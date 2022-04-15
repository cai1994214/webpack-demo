class CopyrightWebpackPlugin {
    apply(compiler) {
        //同步
        // compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation, cb) => {
        //    console.log(compilation, 'compilation')
        // })
        //异步
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            // debugger;
            compilation.assets['copyright.txt'] = {
                source: function () {
                    return 'copyright by webpack-plugin-copyright';
                },
                size: function () {
                    return this.source().length;
                }
            }
            cb();
        })
    }
}

module.exports = CopyrightWebpackPlugin;