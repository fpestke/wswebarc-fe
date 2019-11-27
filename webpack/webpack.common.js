const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      showErrors: true,
      title: 'ev-frontend app',
      path: path.join(__dirname, '../dist/'),
      hash: true
    })
  ]

}
