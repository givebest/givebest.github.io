---
layout: post
title:  "webpack 实现的多入口项目脚手架"
date:   2017-06-25 16:23:35 +0800
categories: webpack
---

## 简介
基于 webpack2 实现的多入口项目脚手架，主要使用 extract-text-webpack-plugin 实现 js 、css 公共代码提取，html-webpack-plugin 实现 html 多入口，less-loader 实现 less 编译，postcss-loader 配置 autoprefixer 实现自动添加浏览器兼容前缀，html-withimg-loader 实现 html 内引入图片版本号添加和模板功能，babel-loader 实现 ES6 转码功能， happypack 多线程加速构建速度。

## 目录

```
├── dist                     # 构建后的目录
├── config                   # 项目配置文件
│   ├── webpack.config.js    # webpack 配置文件
│   └── postcss.config.js    # postcss 配置文件
├── src                      # 程序源文件
│   └── js                   # 入口
│   ├   └── index.js         # 匹配 view/index.html
│   ├   └── user         
│   ├   ├    ├── index.js    # 匹配 view/user/index.html
│   ├   ├    ├── list.js     # 匹配 view/user/list.html
│   ├   └── lib              # JS 库等，不参与路由匹配
│   ├       ├── jquery.js 
│   └── view                 
│   ├    └── index.html       # 对应 js/index.js
│   ├    └── user         
│   ├        ├── index.html   # 对应 js/user/index.js
│   ├        ├── list.html    # 对应 js/user/list.js
│   └── css                   # css 文件目录
│   ├    └── base.css          
│   ├    └── iconfont.css     
│   └── font                  # iconfont 文件目录
│   ├    └── iconfont.ttf         
│   ├    └── iconfont.css
│   └── img                   # 图片文件目录
│   ├    └── pic1.jpg         
│   ├    └── pic2.png     
│   └── template              # html 模板目录
│       └── head.html         
│       └── foot.html            
```

## 配置

### 多入口

> 根据 `JS` 目录获取多入口数组

```
const ROOT = process.cwd();  // 根目录

let entryJs = getEntry('./src/js/**/*.js');

/**
 * 根据目录获取入口
 * @param  {[type]} globPath [description]
 * @return {[type]}          [description]
 */
function getEntry (globPath) {
	let entries = {};
	Glob.sync(globPath).forEach(function (entry) {
		let basename = path.basename(entry, path.extname(entry)),
			pathname = path.dirname(entry);
		// js/lib/*.js 不作为入口
		if (!entry.match(/\/js\/lib\//)) {
			entries[pathname.split('/').splice(3).join('/') + '/' + basename] = pathname + '/' + basename;
		}
	});
	return entries;
}

// webpack 配置
const config = {
	entry: entryJs,
	output: {
		filename: 'js/[name].js?[chunkhash:8]',
		chunkFilename: 'js/[name].js?[chunkhash:8]',
		path: path.resolve(ROOT, 'dist'),
		publicPath: '/'
	},  
}
```

### module

> 使用 babel 实现 ES2015 转 ES5，less 转 css 并使用 postcss 实现 autoprefixer 自动添加浏览器兼容，url-loader 实现 css 引用图片、字体添加版本号，html-withimg-loader 实现 html 引用图片添加版本号并实现模板功能。

```
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader?id=js',
                options: {
                    presets: ['env']
                }
            }
        },
        {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader?id=styles',
                use: [{
                        loader: 'css-loader?id=styles',
                        options: {
                            minimize:  !IsDev
                        }
                    }, 
                    {
                        loader: 'less-loader?id=styles'
                    }, 
                    {
                        loader: 'postcss-loader?id=styles',
                        options: {
                            config: {
                                path: PostcssConfigPath
                            }
                        }
                    }
                ]
            })
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 100,
                        publicPath: '',
                        name: '/img/[name].[ext]?[hash:8]'
                    }
                }
            ]
        },
        {
            test: /\.(eot|svg|ttf|woff)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 100,
                        publicPath: '',
                        name: '/font/[name].[ext]?[hash:8]'
                    }
                }
            ]
        },
        // @see https://github.com/wzsxyz/html-withimg-loader
        {
            test: /\.(htm|html)$/i,
            loader: 'html-withimg-loader?min=false'
        }
    ]
},


// postcss.config.js
module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: ['> 1%', 'last 5 versions', 'not ie <= 9'],
		})
	]
}
```

### View 视图

> 根据目录对应关系，获取 js 对应的 html 入口

```
let entryHtml = getEntryHtml('./src/view/**/*.html'),
    configPlugins;

entryHtml.forEach(function (v) {
	configPlugins.push(new HtmlWebpackPlugin(v));
});

// webpack 配置
resolve: {
    alias: {
        views:  path.resolve(ROOT, './src/view')	
    }
},

/**
 * 根据目录获取 Html 入口
 * @param  {[type]} globPath [description]
 * @return {[type]}          [description]
 */
function getEntryHtml (globPath) {
	let entries = [];
	Glob.sync(globPath).forEach(function (entry) {
		let basename = path.basename(entry, path.extname(entry)),
			pathname = path.dirname(entry),
			// @see https://github.com/kangax/html-minifier#options-quick-reference
			minifyConfig = IsDev ? '' : {
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true	
			};

		entries.push({
			filename: entry.split('/').splice(2).join('/'),
			template: entry,
			chunks: ['common', pathname.split('/').splice(3).join('/') + '/' + basename],
			minify: minifyConfig
		});

	});
	return entries;
}
```

### plugins

> 使用 happypack 多线程加快构建速度，CommonsChunkPlugin 实现提取公用 js 为单独文件，extract-text-webpack-plugin 实现提取公用 css 为单独文件，

```
let configPlugins = [
    new HappyPack({
        id: 'js',
        // @see https://github.com/amireh/happypack
        threadPool: HappyThreadPool,
        loaders: ['babel-loader']
    }),
    new HappyPack({
        id: 'styles',
        threadPool: HappyThreadPool,
        loaders: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
    }),
    // @see https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points-commons-chunk-css-bundle
    new ExtractTextPlugin({
        filename: 'css/[name].css?[contenthash:8]',
        allChunks: true
    })
];

entryHtml.forEach(function (v) {
	configPlugins.push(new HtmlWebpackPlugin(v));
});

// webpack 配置
plugins: configPlugins,
```

### 开发

> webpack-dev-server 实现开发环境自动刷新等功能

```
// webpack 配置
devServer: {
    contentBase: [
        path.join(ROOT, 'src/')
    ],
    hot: false,
    host: '0.0.0.0',
    port: 8080
}
```

### 开发

```
npm start
```
> http://localhost:8080/view


### 构建

> cross-env 实现区分开发和生产环境构建

| 命令 | 说明 |
|----------|------|
| `npm run dev` | 开发环境构建，不压缩代码 |
| `npm run build` | 生产环境构建，压缩代码 |


###  仓库

> 欢迎 star

[https://github.com/givebest/webpack2-multiple-entry](https://github.com/givebest/webpack2-multiple-entry)

> 转载请注明出处：[http://blog.givebest.cn/webpack/2017/06/25/webpack-multiple-entry.html](http://blog.givebest.cn/webpack/2017/06/25/webpack-multiple-entry.html)
