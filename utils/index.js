const fs = require("fs");
const path = require("path");
let list = [];

async function findFileLoop(params = {}, callback) {
  const dirPath = params.dirPath;
  if (!dirPath) {
    return;
  }

  const files = fs.readdirSync(dirPath);

  for (let index = 0; index < files.length; index++) {
    const filename = files[index];

    const filedir = path.join(dirPath, filename);
    const statType = fs.statSync(filedir);
    const isFile = statType.isFile(); // 文件
    const isDir = statType.isDirectory(); // 文件夹

    if (isFile) {
      list.push(filedir);
    }

    if (isDir) {
      await findFileLoop({ dirPath: filedir }); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  }

  return list;
}

module.exports = findFileLoop;
