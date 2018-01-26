# 蘑菇猴 - MushroomMonkeyMall

### 由React+Redux+Router+Fetch+Koa实现的电商页面

## 安装
### 第0步：请确保你的电脑上安装了npm，你可以在命令提示符中敲入"npm -v"进行查询。如果没有安装，直接安装node.js即可，它包含了npm。[下载地址](http://nodejs.cn/download/)
### 第1步：下载我的源代码，你可以点击右上方的绿色按钮（Clone and download）下载；如果你有git，那么在git bash中输入下面这个命令即可。  
`git clone https://github.com/zhenxiaoyuan/mushroom-monkey-mall`  

Step 1: Download the source and open the root direction in command line.

Step 2: use the command "npm install" to install all of the libs that project needs.

Step 3: use the command "npm run server" to open the webpack-dev-server, and it will open the web in your browser automatically.

This is the first time I write something on github, if anybody have the advice, please tell me to improve, thanks:)

测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步测试一下有没有被同步

2018-01-22：
增加了router功能，使用了4.0以上版本，较之前版本变化较大，代码在/app/index.js中。更多功能参考官方文档。

2018-01-23:
增加了redux功能，各模块添加顺序为constants-actions-reducers-store-provider，最后在containers中进行connect。注意mapStateToProps与mapDispatchToProps的区别，前者通过subscribe以实时修改View，后者通过dispatch触发store中数据的变化。

2018-01-24:
1 Stateless component 中连props都不能使用，否则报错。
2 icomoon的使用方法
    2.1 从官方挑选icon后打包下载
    2.2 将压缩包中fonts文件夹放到styles目录下。注意解析需要用到url-loader、file-loader。
    2.3 将压缩包中font.css文件放到styles/css目录下，注意修改文件前段的fonts文件路径。注意这个解析需要用到css-loader。
    2.4 需要使用时，引用font.css即可。
3 注意html中需要有这句话：<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">，否则浏览器后台查看时分辨率会很高。
4 fetch是较新的处理表单请求的方法，代替了ajax。
Promise是什么鬼？下来补一下。
参考文章 https://github.com/camsong/blog/issues/2
这个有空看一下 http://javascript.ruanyifeng.com/bom/ajax.html#toc27
5 使用koa做web框架，好能在本地完成服务器取值的工作。
参考文章 http://www.ruanyifeng.com/blog/2017/08/koa.html
https://github.com/alexmingoia/koa-router