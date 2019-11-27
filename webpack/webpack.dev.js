const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
     devServer: {
         contentBase: path.join(__dirname, '../dist/'),
         port: 2222,
         host: '0.0.0.0',
         allowedHosts: [
             '192.168.168.*'
         ]
     },
     devtool: 'inline-source-map',
 });
