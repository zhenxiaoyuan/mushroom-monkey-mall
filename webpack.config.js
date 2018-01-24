// webpack.config.js

var webpack = require("webpack"); // to access built-in plugins
var HtmlWebpackPlugin = require("html-webpack-plugin"); // helps generate index.html automatically
var path = require("path");

module.exports = {
    // __dirname indicates current path
    entry: [
        __dirname + "/app/index.js" // the only one entry file
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devServer: {
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
        contentBase: "./dist", // the directory that localhost will load
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
                include: path.resolve(__dirname, "app")
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: 'url-loader?limit=5000'
            } // 限制大小小于5k
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: "react boilerplate by Hao Zhen",
            inject: true,
            template: __dirname + "/index.template.html",
            filename: __dirname + "/dist/index.html"
        }),
        new webpack.BannerPlugin("Copyright by Hao Zhen."),
        // new webpack.optimize.UglifyJsPlugin()
    ]
};