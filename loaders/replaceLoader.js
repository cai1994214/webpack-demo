const loaderUtils = require('loader-utils');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);
    console.log(options);
    const res = source.replace('dell', options.name);
    this.callback(null, res)
};

