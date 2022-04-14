const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

const prodConfig = {
  mode: 'production',
  // devtool: "cheap-module-source-map",
  devtool: false,
  output: {
    publicPath: './', //可以配置cdn 如果服务器存储了打包后的js
    path: path.resolve(__dirname, '../dist'),
    filename: '[name][contenthash].js', //根据hash解决浏览器缓存
    chunkFilename: '[name][contenthash].js', //根据hash解决浏览器缓存
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'], //cssloader 处理css相关文件成一个css 然后通过style-loader 将css插入到html中
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              //在 css-loader 前应用的 loader 的数量 比如在scss文件里重新引入别的scss文件 需要配置两个loader重新编译
              importLoaders: 2,
              modules: true, //使用css模块化
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      fileName: '[name].css',
      chunkFilename: '[name].chunk.css',
    }),
  ],
};

module.exports = prodConfig;