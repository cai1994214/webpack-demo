const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    mode: 'production', //默认是production
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundle.js'
    }
}