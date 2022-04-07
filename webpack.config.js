const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HemlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: "./src/index.js",
	},
	mode: "production", //默认是production
	output: {
		publicPath: "./",
		path: path.resolve(__dirname, "dist"),
		filename: "boundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)(\?.*)?$/,
				use: {
					loader: "url-loader",
					options: {
						//placeholder: '占位符'
						name: "[name]_[hash].[ext]",
						outputPath: "images/", //打包后的图片存放的文件夹
						limit: 10240, //10k
					},
				},
			},
            {
                test: /\.(eot|woff|ttf|woff2|appcache|svg)\??.*$/,
                // exclude: [/^node_modules$/, path.resolve(__dirname, '../src/svg')],
                use:[{
                    loader:'file-loader',
                    options:{
                        name: "[name].[ext]",
                        outputPath: "static/fonts/"
                    }
                }]
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
                            // modules: true, //使用css模块化
						},
					},
					"sass-loader",
					"postcss-loader",
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HemlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
};
