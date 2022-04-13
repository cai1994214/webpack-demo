const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HemlWebpackPlugin = require('html-webpack-plugin');

const commConfig = {
  mode: 'production',
  entry: {
    main: ['./src/index.tsx'],
  },
  devtool: false,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HemlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};

module.exports = commConfig;
