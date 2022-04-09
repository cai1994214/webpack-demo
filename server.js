const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require("webpack-dev-middleware"); //webpack-dev-middleware 是一个express中间件
const config = require('./webpack.config.js');
const complier = webpack(config); // 创建编译器

const app = express();
app.use(webpackMiddleware(complier, {
    publicPath: config.devServer.publicPath,
}))

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})