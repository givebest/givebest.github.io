# [testPC](http://www.test.com)

---

包括了一套通用样式模块库，编码规范建议。

---


## 开发事项

### Fiddler设置

#### m.test.com

	regex:http://m.test.com/m/(.*)
	http://localhost:3001/m/$1

	regex:http://www.test.com/n/(.*)
	http://localhost:3001/n/$1

	regex:http://m.test.com/css-modules/(.+)
	E:\test\branches\v1.5.8\h5\testSystem.Html5\src\css-modules\$1

	regex:http://m.test.com/fonts/(.+)
	E:\test\branches\v1.5.8\h5\testSystem.Html5\src\fonts\$1

	regex:http://m.test.com/images/(.+)
	E:\test\branches\v1.5.8\h5\testSystem.Html5\src\images\$1

	regex:http://m.test.com/js/(.+)
	E:\test\branches\v1.5.8\h5\testSystem.Html5\dist\js\$1





## 安装

	gem install jekyll


## 使用

	jekyll build
	# => 当前文件夹中的内容将会生成到 ./site 文件夹中。
	
	jekyll build --destination <destination>
	# => 当前文件夹中的内容将会生成到目标文件夹<destination>中。
	
	jekyll build --source <source> --destination <destination>
	# => 指定源文件夹<source>中的内容将会生成到目标文件夹<destination>中。
	
	jekyll build --watch
	# => 当前文件夹中的内容将会生成到 ./site 文件夹中，
	#    查看改变，并且自动再生成。


	jekyll serve
	# => 一个开发服务器将会运行在 http://localhost:4000/
	
	jekyll serve --detach
	# => 功能和`jekyll serve`命令相同，但是会脱离终端在后台运行。
	#    如果你想关闭服务器，可以使用`kill -9 1234`命令，"1234" 是进程号（PID）。
	#    如果你找不到进程号，那么就用`ps aux | grep jekyll`命令来查看，然后关闭服务器。[更多](http://unixhelp.ed.ac.uk/shell/jobz5.html).
	
	jekyll serve --watch
	# => 和`jekyll serve`相同，但是会查看变更并且自动再生成。




