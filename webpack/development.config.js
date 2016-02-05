const base = require('./base.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const developmentConfig = {
  devServer: {
    stats: 'errors-only',
    hot: true,
    inline: true,
    progress: true,
    contentBase: 'dist',
    colors: true,
    historyApiFallback: true
  },
  devtool: 'eval', // babel sourcemap setting, this is best for development but has no source maps - see https://webpack.github.io/docs/configuration.html#devtool alternative cheap-module-eval-source-map: has proper source maps in development
  entry: [
    'webpack-dev-server/client?http://localhost:3000' // activates webpack inline mode, see: https://webpack.github.io/docs/webpack-dev-server.html#inline-mode
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin()
  ]
};

module.exports = merge(base, developmentConfig);
