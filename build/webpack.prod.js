const merge = require('webpack-merge');
const commConfig = require('./webpack.common.js');

const prodConfig = {
	mode: "production",
	devtool: "cheap-module-source-map",
};

module.exports = merge(commConfig, prodConfig);
