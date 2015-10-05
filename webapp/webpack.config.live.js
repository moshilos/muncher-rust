/**
 * Created by Moshi.los on 10/4/2015.
 */
var config = require('./webpack.config');

config.entry.app.push('webpack/hot/dev-server');
config.output.publicPath = '/js/';

module.exports = config;