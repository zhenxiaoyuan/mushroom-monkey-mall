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
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
                include: path.resolve(__dirname, "app")
            }
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