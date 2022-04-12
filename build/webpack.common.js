const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HemlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: ["./src/index.js"],
	},
	output: {
		publicPath: "./", //可以配置cdn 如果服务器存储了打包后的js
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].js", //入口文件的key值对应的文件名
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
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
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HemlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
	optimization: {
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
					test: /[\\/]node_modules[\\/]/,//打包后的文件名 打包node_modules内的
					priority: -10,
				},
				default: { //打包引入自己的js 
					minChunks: 1,
					priority: -20,
					reuseExistingChunk: true, 
				},
			},
		},
	},
};
