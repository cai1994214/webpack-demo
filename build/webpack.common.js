const path = require("path");
const fs = require('fs');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HemlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

const merge = require("webpack-merge");
const devConfig = require("./webpack.dev.js");
const prodConfig = require("./webpack.prod.js");
function resolve(dir) {
	return path.join(__dirname, ".", dir);
}

const comPlugins = [
  new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  new HemlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
  }),
];


const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
console.log('file', files);

const commConfig = {
	entry: {
		main: ["./src/index.js"],
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"],
		mainFiles: ["index"], //引入一个目录 默认去找当下的index.js
		alias: {
			"@": resolve("src"),
		}, //引入别名
	},
	module: {
		rules: [
			{
				test: /\.m?jsx?$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, "../src"),
				use: [
					{
						loader: "babel-loader",
					},
					{
						loader: "imports-loader",
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: {
					loader: "file-loader",
					options: {
						//placeholder: '占位符'
						name: "[name]_[hash].[ext]",
						outputPath: "images/", //打包后的图片存放的文件夹
						limit: 10240, //10k
					},
				},
			},
		],
	},
	plugins: [
    ...comPlugins
    // new AddAssetHtmlPlugin({
    //   filepath: path.resolve(__dirname, '../dll/vendors.dll.js'),
    // }),
    // new AddAssetHtmlPlugin({
    //   filepath: path.resolve(__dirname, '../dll/react.dll.js'),
    // }),
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, '../dll/vendors.manifest.json'),
    // }),
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, '../dll/react.manifest.json'),
    // }),
		// new BundleAnalyzerPlugin(),
	],
	optimization: {
		runtimeChunk: {
			name: "runtime",
		},
		usedExports: true,
		splitChunks: {
			//splitChunk默认对异步打包
			chunks: "all", //async initial 异步同步 all所有
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: "~",
			name: true,
			cacheGroups: {
				//缓存分组
				vendors: {
					test: /[\\/]node_modules[\\/]/, //打包后的文件名 打包node_modules内的
					filename: "vendors-chunk.js",
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
	if (env && env.production) {
		//env.production 是package.json --env.production 传的参数
		return merge(commConfig, prodConfig);
	} else {
		return merge(commConfig, devConfig);
	}
};
