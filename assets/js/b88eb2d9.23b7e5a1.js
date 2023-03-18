"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6142],{9613:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>v});var n=r(9496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),g=p(r),m=a,v=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return r?n.createElement(v,l(l({ref:e},c),{},{components:r})):n.createElement(v,l({ref:e},c))}));function v(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[g]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4457:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(1163),a=(r(9496),r(9613));const i={slug:"javascript/2017/08/02/javascript-sorting-algorithms.html",title:"JavaScript \u6392\u5e8f\u7b97\u6cd5\uff08JavaScript sorting algorithms\uff09",tags:["javascript","sorting"],date:"2017-08-02 18:10:35 +0800",authors:"givebest"},l="JavaScrip \u6392\u5e8f\u7b97\u6cd5\uff08JavaScript Sorting Algorithms\uff09",o={permalink:"/javascript/2017/08/02/javascript-sorting-algorithms.html",source:"@site/blog/2017-08-02-javascript-sorting-algorithms.mdx",title:"JavaScript \u6392\u5e8f\u7b97\u6cd5\uff08JavaScript sorting algorithms\uff09",description:"\u57fa\u7840\u6784\u9020\u51fd\u6570",date:"2017-08-02T18:10:35.000Z",formattedDate:"2017\u5e748\u67082\u65e5",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"sorting",permalink:"/tags/sorting"}],readingTime:6.765,hasTruncateMarker:!0,authors:[{name:"givebest",title:"Front End Engineer",url:"https://github.com/givebest",imageURL:"https://github.com/givebest.png",key:"givebest"}],frontMatter:{slug:"javascript/2017/08/02/javascript-sorting-algorithms.html",title:"JavaScript \u6392\u5e8f\u7b97\u6cd5\uff08JavaScript sorting algorithms\uff09",tags:["javascript","sorting"],date:"2017-08-02 18:10:35 +0800",authors:"givebest"},prevItem:{title:"\u66f4\u4f18\u96c5\u7684\u65b9\u5f0f\uff1a JavaScript \u4e2d\u987a\u5e8f\u6267\u884c\u5f02\u6b65\u51fd\u6570",permalink:"/javascript/2018/04/05/javascript-sync.html"},nextItem:{title:"JavaScript addEventListener \u7b2c\u4e09\u4e2a\u53c2\u6570",permalink:"/javascript/2017/08/01/javascript-addEventListener-third-parameter.html"}},s={authorsImageUrls:[void 0]},p=[{value:"\u57fa\u7840\u6784\u9020\u51fd\u6570",id:"\u57fa\u7840\u6784\u9020\u51fd\u6570",level:2},{value:"1. \u5192\u6ce1\u6392\u5e8f",id:"1-\u5192\u6ce1\u6392\u5e8f",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:4},{value:"\u56fe\u89e3",id:"\u56fe\u89e3",level:4},{value:"2. \u9009\u62e9\u6392\u5e8f",id:"2-\u9009\u62e9\u6392\u5e8f",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801-1",level:4},{value:"\u56fe\u89e3",id:"\u56fe\u89e3-1",level:4},{value:"3. \u63d2\u5165\u6392\u5e8f",id:"3-\u63d2\u5165\u6392\u5e8f",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801-2",level:4},{value:"\u56fe\u89e3",id:"\u56fe\u89e3-2",level:4},{value:"4. \u5f52\u5e76\u6392\u5e8f",id:"4-\u5f52\u5e76\u6392\u5e8f",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801-3",level:4},{value:"\u56fe\u89e3",id:"\u56fe\u89e3-3",level:4},{value:"5. \u5feb\u901f\u6392\u5e8f",id:"5-\u5feb\u901f\u6392\u5e8f",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801-4",level:4},{value:"\u56fe\u89e3",id:"\u56fe\u89e3-4",level:4},{value:"6. ECMAScript \u6392\u5e8f",id:"6-ecmascript-\u6392\u5e8f",level:3},{value:"\u6027\u80fd\u6d4b\u8bd5",id:"\u6027\u80fd\u6d4b\u8bd5",level:2},{value:"\u73af\u5883",id:"\u73af\u5883",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801-5",level:3},{value:"\u6765\u6e90/\u53c2\u8003",id:"\u6765\u6e90\u53c2\u8003",level:2},{value:"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\uff1a http://blog.givebest.cn/javascript/2017/08/02/javascript-sorting-algorithms.html",id:"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904-httpbloggivebestcnjavascript20170802javascript-sorting-algorithmshtml",level:3}],c={toc:p},g="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(g,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u57fa\u7840\u6784\u9020\u51fd\u6570"},"\u57fa\u7840\u6784\u9020\u51fd\u6570"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u51e0\u79cd\u6392\u5e8f\u7b97\u6cd5\u505a\u4e3a\u65b9\u6cd5\u653e\u5728\u6784\u9020\u51fd\u6570\u91cc\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function ArrayList() {\n  var array = [];\n\n  // \u4ea4\u6362\u4f4d\u7f6e\n  var swap = function (index1, index2) {\n    var aux = array[index1];\n    array[index1] = array[index2];\n    array[index2] = aux;\n  };\n\n  this.insert = function (item) {\n    array.push(item);\n  };\n\n  this.toString = function () {\n    return array.join();\n  };\n\n  this.val = function () {\n    return array;\n  };\n\n  // \u5192\u6ce1\u6392\u5e8f\n  this.bubbleSort = function () {\n    //etc\n  };\n}\n")),(0,a.kt)("h3",{id:"1-\u5192\u6ce1\u6392\u5e8f"},"1. \u5192\u6ce1\u6392\u5e8f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5192\u6ce1\u6392\u5e8f\u6bd4\u8f83\u4efb\u4f55\u4e24\u4e2a\u76f8\u90bb\u7684\u9879\uff0c\u5982\u679c\u7b2c\u4e00\u4e2a\u6bd4\u7b2c\u4e8c\u4e2a\u5927\uff0c\u5219\u4ea4\u6362\u5b83\u4eec\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u590d\u6742\u5ea6 O(n^2)\u3002")),(0,a.kt)("h4",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'this.bubbleSort = function () {\n  console.time("Bubble Sort");\n  var length = array.length;\n  for (var i = 0; i < length; i++) {\n    for (var j = 0; j < length - 1 - i; j++) {\n      if (array[j] > array[j + 1]) {\n        swap(j, j + 1);\n      }\n    }\n  }\n  console.timeEnd("Bubble Sort");\n};\n')),(0,a.kt)("h4",{id:"\u56fe\u89e3"},"\u56fe\u89e3"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://givebest.github.io/images/javascript-sorting-algorithms/bubble.jpg",alt:"\u5192\u6ce1\u6392\u5e8f"})),(0,a.kt)("h3",{id:"2-\u9009\u62e9\u6392\u5e8f"},"2. \u9009\u62e9\u6392\u5e8f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9009\u62e9\u6392\u5e8f\u7b97\u6cd5\u662f\u4e00\u79cd\u539f\u5740\u6bd4\u8f83\u6392\u5e8f\u7b97\u6cd5\u3002\u9009\u62e9\u6392\u5e8f\u5927\u81f4\u7684\u601d\u8def\u662f\u627e\u5230\u6570\u636e\u7ed3\u6784\u4e2d\u7684\u6700\u5c0f\u503c\u5e76\u5c06\u5176\u653e\u7f6e\u5728\u7b2c\u4e00\u4f4d\uff0c\u63a5\u7740\u627e\u5230\u7b2c\u4e8c\u5c0f\u7684\u503c\u5e76\u5c06\u5176\u653e\u5728\u7b2c\u4e8c\u4f4d\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u590d\u6742\u5ea6\uff1aO(n^2)\u3002")),(0,a.kt)("h4",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'this.selectionSort = function () {\n  console.time("selectionSort");\n  var length = array.length,\n    indexMin;\n\n  for (var i = 0; i < length - 1; i++) {\n    indexMin = i;\n    for (var j = i; j < length; j++) {\n      if (array[indexMin] > array[j]) {\n        indexMin = j;\n      }\n    }\n\n    if (i !== indexMin) {\n      swap(i, indexMin);\n    }\n  }\n  console.timeEnd("selectionSort");\n};\n')),(0,a.kt)("h4",{id:"\u56fe\u89e3-1"},"\u56fe\u89e3"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://givebest.github.io/images/javascript-sorting-algorithms/selection.jpg",alt:"\u9009\u62e9\u6392\u5e8f"})),(0,a.kt)("h3",{id:"3-\u63d2\u5165\u6392\u5e8f"},"3. \u63d2\u5165\u6392\u5e8f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u63d2\u5165\u6392\u5e8f\u6bcf\u6b21\u6392\u4e00\u4e2a\u6570\u7ec4\u9879\uff0c\u4ee5\u6b64\u65b9\u5f0f\u6784\u5efa\u6700\u540e\u7684\u6392\u5e8f\u6570\u7ec4\u3002\u5047\u5b9a\u7b2c\u4e00\u9879\u5df2\u7ecf\u6392\u5e8f\u4e86\uff0c\u63a5\u7740\uff0c\u5b83\u548c\u7b2c\u4e8c\u9879\u8fdb\u884c\u6bd4\u8f83\uff0c\u7b2c\u4e8c\u9879\u662f\u5e94\u8be5\u5f85\u5728\u539f\u4f4d\u8fd8\u662f\u63d2\u5230\u7b2c\u4e00\u9879\u4e4b\u524d\u5462\uff1f\u8fd9\u6837\uff0c\u5934\u4e24\u9879\u5c31\u5df2\u6b63\u786e\u6392\u5e8f\uff0c\u63a5\u7740\u548c\u7b2c\u4e09\u9879\u6bd4\u8f83\uff08\u5b83\u662f\u8be5\u63d2\u5165\u5230\u7b2c\u4e00\u3001\u7b2c\u4e8c\u8fd8\u662f\u7b2c\u4e09\u7684\u4f4d\u7f6e\u5462\uff1f\uff09\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u6392\u5e8f\u5c0f\u578b\u6570\u7ec4\u65f6\uff0c\u6b64\u7b97\u6cd5\u6bd4\u9009\u62e9\u6392\u5e8f\u548c\u5192\u6ce1\u6392\u5e8f\u6027\u80fd\u8981\u597d\u3002")),(0,a.kt)("h4",{id:"\u4ee3\u7801-2"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'this.insertionSort = function () {\n  console.time("insertionSort");\n  var length = array.length,\n    j,\n    temp;\n\n  for (var i = 1; i < length; i++) {\n    j = i;\n    temp = array[i];\n    while (j > 0 && array[j - 1] > temp) {\n      array[j] = array[j - 1];\n      j--;\n    }\n    array[j] = temp;\n  }\n  console.timeEnd("insertionSort");\n};\n')),(0,a.kt)("h4",{id:"\u56fe\u89e3-2"},"\u56fe\u89e3"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://givebest.github.io/images/javascript-sorting-algorithms/insertion.jpg",alt:"\u63d2\u5165\u6392\u5e8f"})),(0,a.kt)("h3",{id:"4-\u5f52\u5e76\u6392\u5e8f"},"4. \u5f52\u5e76\u6392\u5e8f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f52\u5e76\u6392\u5e8f\u662f\u4e00\u79cd\u5206\u6cbb\u7b97\u6cd5\u3002\u5176\u601d\u60f3\u662f\u5c06\u539f\u59cb\u6570\u7ec4\u5207\u5206\u6210\u8f83\u5c0f\u7684\u6570\u7ec4\uff0c\u76f4\u5230\u6bcf\u4e2a\u5c0f\u6570\u7ec4\u53ea\u6709\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u63a5\u7740\u5c06\u5c0f\u6570\u7ec4\u5f52\u5e76\u6210\u8f83\u5927\u7684\u6570\u7ec4\uff0c\u76f4\u5230\u6700\u540e\u53ea\u6709\u4e00\u4e2a\u6392\u5e8f\u5b8c\u6bd5\u7684\u5927\u6570\u7ec4\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u590d\u6742\u5ea6\uff1aO(n log^n)\u3002")),(0,a.kt)("h4",{id:"\u4ee3\u7801-3"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'this.mergeSort = function () {\n  console.time("mergeSort");\n  array = mergeSortRec(array);\n  console.timeEnd("mergeSort");\n};\nvar mergeSortRec = function (array) {\n  var length = array.length;\n  if (length === 1) {\n    return array;\n  }\n\n  var mid = Math.floor(length / 2),\n    left = array.slice(0, mid),\n    right = array.slice(mid, length);\n\n  return merge(mergeSortRec(left), mergeSortRec(right));\n};\nvar merge = function (left, right) {\n  var result = [],\n    il = 0,\n    ir = 0;\n\n  while (il < left.length && ir < right.length) {\n    if (left[il] < right[ir]) {\n      result.push(left[il++]);\n    } else {\n      result.push(right[ir++]);\n    }\n  }\n\n  while (il < left.length) {\n    result.push(left[il++]);\n  }\n\n  while (ir < right.length) {\n    result.push(right[ir++]);\n  }\n\n  return result;\n};\n')),(0,a.kt)("h4",{id:"\u56fe\u89e3-3"},"\u56fe\u89e3"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://givebest.github.io/images/javascript-sorting-algorithms/merge.jpg",alt:"\u5f52\u5e76\u6392\u5e8f"})),(0,a.kt)("h3",{id:"5-\u5feb\u901f\u6392\u5e8f"},"5. \u5feb\u901f\u6392\u5e8f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f52\u5e76\u6392\u5e8f\u4e00\u6837\uff0c\u5feb\u901f\u6392\u5e8f\u4e5f\u4f7f\u7528\u5206\u6cbb\u7684\u65b9\u6cd5\uff0c\u5c06\u539f\u59cb\u6570\u7ec4\u5206\u4e3a\u8f83\u5c0f\u7684\u6570\u7ec4\uff08\u4f46\u5b83\u6ca1\u6709\u50cf\u5f52\u5e76\u6392\u5e8f\u90a3\u6837\u5c06\u5b83\u4eec\u5206\u5272\u5f00\uff09\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u5b83\u7684\u6027\u80fd\u901a\u5e38\u6bd4\u5176\u4ed6\u7684\u590d\u6742\u5ea6\u4e3a O(n log^n)\u7684\u6392\u5e8f\u7b97\u6cd5\u8981\u597d\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u590d\u6742\u5ea6\uff1aO(n log^n)\u3002")),(0,a.kt)("h4",{id:"\u4ee3\u7801-4"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'this.quickSort = function () {\n  console.time("quickSort");\n  quick(array, 0, array.length - 1);\n  console.timeEnd("quickSort");\n};\n\nvar quick = function (array, left, right) {\n  var index;\n  if (array.length > 1) {\n    index = partition(array, left, right);\n\n    if (left < index - 1) {\n      quick(array, left, index - 1);\n    }\n\n    if (index < right) {\n      quick(array, index, right);\n    }\n  }\n};\n\n// \u5212\u5206\u8fc7\u7a0b\nvar partition = function (array, left, right) {\n  var pivot = array[Math.floor((right + left) / 2)],\n    i = left,\n    j = right;\n\n  while (i < j) {\n    while (array[i] < pivot) {\n      i++;\n    }\n\n    while (array[j] > pivot) {\n      j--;\n    }\n\n    if (i <= j) {\n      swapQuickSort(array, i, j);\n      i++;\n      j--;\n    }\n  }\n  return i;\n};\n\nvar swapQuickSort = function (array, index1, index2) {\n  var aux = array[index1];\n  array[index1] = array[index2];\n  array[index2] = aux;\n};\n')),(0,a.kt)("h4",{id:"\u56fe\u89e3-4"},"\u56fe\u89e3"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://givebest.github.io/images/javascript-sorting-algorithms/quick1.jpg",alt:"\u5feb\u901f\u6392\u5e8f1"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://givebest.github.io/images/javascript-sorting-algorithms/quick2.jpg",alt:"\u5feb\u901f\u6392\u5e8f2"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://givebest.github.io/images/javascript-sorting-algorithms/quick3.jpg",alt:"\u5feb\u901f\u6392\u5e8f3"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://givebest.github.io/images/javascript-sorting-algorithms/quick4.jpg",alt:"\u5feb\u901f\u6392\u5e8f4"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://givebest.github.io/images/javascript-sorting-algorithms/quick5.jpg",alt:"\u5feb\u901f\u6392\u5e8f5"})),(0,a.kt)("h3",{id:"6-ecmascript-\u6392\u5e8f"},"6. ECMAScript \u6392\u5e8f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ECMAScript \u6ca1\u6709\u5b9a\u4e49\u7528\u54ea\u4e2a\u6392\u5e8f\u7b97\u6cd5\uff0c\u6240\u4ee5\u6d4f\u89c8\u5668\u5382\u5546\u53ef\u4ee5\u81ea\u884c\u53bb\u5b9e\u73b0\u7b97\u6cd5\u3002\u4f8b\u5982\uff0cMozilla Firefox \u4f7f\u7528\u5f52\u5e76\u6392\u5e8f\u4f5c\u4e3a Array.prototype.sort \u7684\u5b9e\u73b0\uff0c\u800c Chrome \u4f7f\u7528\u4e86\u4e00\u4e2a\u5feb\u901f\u6392\u5e8f\uff08\u4e0b\u9762\u6211\u4eec\u4f1a\u5b66\u4e60\u7684\uff09\u7684\u53d8\u4f53\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'this.esSort = function () {\n  console.time("esSort");\n  var tempArray = [];\n  tempArray = array.sort(function (a, b) {\n    return a - b;\n  });\n  console.timeEnd("esSort");\n  return tempArray;\n};\n')),(0,a.kt)("h2",{id:"\u6027\u80fd\u6d4b\u8bd5"},"\u6027\u80fd\u6d4b\u8bd5"),(0,a.kt)("h3",{id:"\u73af\u5883"},"\u73af\u5883"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OS\uff1aWIN10 64 \u4f4d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\uff1aGoogle Chrome 60.0.3112.78"))),(0,a.kt)("h3",{id:"\u4ee3\u7801-5"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * \u521b\u5efa\u968f\u673a\u6570\u7ec4\n * @param  {[type]} size [description]\n * @return {[type]}      [description]\n */\nfunction createNonSortedArray(size) {\n  var array = new ArrayList();\n  for (var i = size; i > 0; i--) {\n    var tempNum = (Math.random() * i) >>> 0;\n    array.insert(tempNum);\n  }\n  return array;\n}\n\n// \u5192\u6ce1\u6392\u5e8f\n(function () {\n  var array = createNonSortedArray(500);\n  array.bubbleSort(); // Bubble Sort: 2.625ms\n  console.log(array.val());\n})();\n\n// \u9009\u62e9\u6392\u5e8f\n(function () {\n  var array = createNonSortedArray(500);\n  array.selectionSort(); // selectionSort: 1.986083984375ms\n  console.log(array.val());\n})();\n\n// \u63d2\u5165\u6392\u5e8f\n(function () {\n  var array = createNonSortedArray(500);\n  array.insertionSort(); // insertionSort: 1.825927734375ms\n  console.log(array.val());\n})();\n\n// \u5f52\u5e76\u6392\u5e8f\n(function () {\n  var array = createNonSortedArray(500);\n  array.mergeSort(); // mergeSort: 0.76416015625ms\n  console.log(array.val());\n})();\n\n// \u5feb\u901f\u6392\u5e8f\n(function () {\n  var array = createNonSortedArray(500);\n  array.quickSort(); // quickSort: 0.39111328125ms\n  console.log(array.val());\n})();\n\n// ES\u6392\u5e8f\n(function () {\n  var array = createNonSortedArray(500);\n  array.esSort(); // esSort: 0.34130859375ms\n  console.log(array.val());\n})();\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7531\u6b64\u53ef\u89c1\uff0c\u4e00\u822c\u60c5\u51b5\u6211\u4eec\u53ea\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.sort()")," \u65b9\u6cd5\u5373\u53ef\uff0c\u6d4f\u89c8\u5668\uff08\u6216\u5bbf\u4e3b\u73af\u5883\uff09\u4f1a\u5728\u5e95\u5c42\u91c7\u7528\u6700\u4f18\u7b97\u6cd5\u5e2e\u6211\u4eec\u5b9e\u73b0\u6392\u5e8f\u3002")),(0,a.kt)("h2",{id:"\u6765\u6e90\u53c2\u8003"},"\u6765\u6e90/\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.amazon.cn/%E5%9B%BE%E4%B9%A6/dp/B016DWSF8M/ref=sr_1_1?ie=UTF8&qid=1501473141&sr=8-1&keywords=%E5%AD%A6%E4%B9%A0+javascript+%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84"},"\u300a\u5b66\u4e60 javascript \u6570\u636e\u7ed3\u6784\u300b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript-all-the-code/"},"About the #sorting-algorithms series")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/benoitvallon/computer-science-in-javascript/tree/master/sorting-algorithms-in-javascript"},"https://github.com/benoitvallon/computer-science-in-javascript/tree/master/sorting-algorithms-in-javascript"))),(0,a.kt)("h3",{id:"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904-httpbloggivebestcnjavascript20170802javascript-sorting-algorithmshtml"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\uff1a ",(0,a.kt)("a",{parentName:"h3",href:"http://blog.givebest.cn/javascript/2017/08/02/javascript-sorting-algorithms.html"},"http://blog.givebest.cn/javascript/2017/08/02/javascript-sorting-algorithms.html")))}u.isMDXComponent=!0}}]);