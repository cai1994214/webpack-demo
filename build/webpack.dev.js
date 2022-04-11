const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const commConfig = require('./webpack.common.js');

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
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
	optimization: {
		usedExports: true,
	}
};

module.exports = merge(commConfig, devConfig)