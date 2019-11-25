const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    main: './src/app.tsx'
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].bundle.js',
  },
  watch: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '*.json']
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist/'),
    port: 2222,
    host: '0.0.0.0',
    allowedHosts: [
      '192.168.168.*'
    ]
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /.tsx?$/, use: ['awesome-typescript-loader'] },
      { test: /.html$/, use: 'raw-loader' },
      { test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader'] },
      { test: /\.woff(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?.+)?$/, use: 'file-loader' },
      { test: /\.eot(\?.+)?$/, use: 'file-loader' },
      { test: /\.svg(\?.+)?$/, use: 'file-loader' },
      { test: /\.png$/, use: 'url-loader?mimetype=image/png' },
      { test: /\.gif$/, use: 'url-loader?mimetype=image/gif' }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "locales/**/*" }]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      showErrors: true,
      title: 'HomeEcoChargerExtension App',
      path: path.join(__dirname, '../dist/'),
      hash: true
    })
  ]

}
