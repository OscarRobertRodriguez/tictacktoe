const commonPaths = require("./common-paths");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 

const config = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: commonPaths.outputPath,
  },
  module: {
    rules: [{
        test: /.*\.(svg|gif|png|jpe?g)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'assets/images/[name].[ext]'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf)/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'assets/fonts/[name].[ext]'
          }
        }]
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.html$/,
        use: ['html-loader?attrs=img:src video:poster']
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use:[{
          loader: 'file-loader',
          options: {
            name: 'assets/audio/[name]'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'JQuery': 'jquery'
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'tic-tak-toe',
      template: commonPaths.indexPath
    }),
    new CleanWebpackPlugin(['dist'], {
      root: commonPaths.root
    }),
    new BundleAnalyzerPlugin()
  ]
};

module.exports = config;