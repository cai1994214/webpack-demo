const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HemlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

const commConfig = {
  entry: {
    main: ['./src/index.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'imports-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            //placeholder: '占位符'
            name: '[name]_[hash].[ext]',
            outputPath: 'images/', //打包后的图片存放的文件夹
            limit: 10240, //10k
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HemlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash',
    }),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    usedExports: true,
    splitChunks: {
      //splitChunk默认对异步打包
      chunks: 'all', //async initial 异步同步 all所有
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        //缓存分组
        vendors: {
          test: /[\\/]node_modules[\\/]/, //打包后的文件名 打包node_modules内的
          filename: 'vendors-chunk.js',
          priority: -10,
        },
        default: {
          //打包引入自己的js
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};

module.exports = (env) => {
  if(env && env.production) { //env.production 是package.json --env.production 传的参数
    return merge(commConfig, prodConfig);
  }else{
    return merge(commConfig, devConfig);
  }
}