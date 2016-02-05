const base = require('./base.config');
const merge = require('webpack-merge');
const webpack = require('webpack');

const productionConfig = {
  devtool: 'source-map', // activate source maps, see https://webpack.github.io/docs/configuration.html#devtool alternative cheap-module-eval-source-map: has proper source maps in development
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false // useless warnings, says Mathias :)
      }
    }),
    new webpack.DefinePlugin({ // required for redux to build properly - this is the recommended fix, taken from: http://stackoverflow.com/a/30061249
      'process.env.NODE_ENV': '"production"'
    })
  ]
};

module.exports = merge(base, productionConfig);
