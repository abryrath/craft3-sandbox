const base = require('./webpack.base.config');

base.mode = 'development';
base.devtool = 'source-map';

module.exports = base;