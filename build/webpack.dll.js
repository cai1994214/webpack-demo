const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: {
        vendors: ['lodash'],
        react: ['react', 'react-dom'],
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../dll'),
        library: '[name]', //将js打包生成一个库 然后通过library引入
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, '../dll/[name].manifest.json'),
        })
    ]
}