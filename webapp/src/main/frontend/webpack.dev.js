const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    context: path.resolve(__dirname, 'src/apps'),

    entry: {

           start: "./start.js",

       },
       output: {

           path: path.resolve(__dirname, '../webapp/javascript/'),
           filename: '[name]/[name].bundle.js'

       },

    devtool: 'inline-source-map',
});