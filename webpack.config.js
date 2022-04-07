const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    mode: 'production', //默认是production
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    }
}