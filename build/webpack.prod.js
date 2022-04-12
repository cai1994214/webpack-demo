const merge = require("webpack-merge");
const commConfig = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"], //cssloader 处理css相关文件成一个css 然后通过style-loader 将css插入到html中
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      fileName: "[name].css",
      chunkFilename: "[name].chunk.css",
    }),
  ],
};

module.exports = merge(commConfig, prodConfig);
