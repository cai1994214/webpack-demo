const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const commConfig = require("./webpack.common.js");

const devConfig = {
  mode: "development", //默认是production
  devtool: "cheap-module-eval-source-map",
  devServer: {
    publicPath: "/",
    contentBase: path.resolve(__dirname, "./"),
    compress: true,
    open: true,
    inline: true,
  },
  output: {
    publicPath: "./", //可以配置cdn 如果服务器存储了打包后的js
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js", //入口文件的key值对应的文件名
    chunkFilename: "[name].js", //异步加载的文件名
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"], //cssloader 处理css相关文件成一个css 然后通过style-loader 将css插入到html中
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              //在 css-loader 前应用的 loader 的数量 比如在scss文件里重新引入别的scss文件 需要配置两个loader重新编译
              importLoaders: 2,
              modules: true, //使用css模块化
            },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
};

module.exports = merge(commConfig, devConfig);
