const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:  [
    path.resolve(__dirname, '../src/application.js') // arguments can be seen as being passed to `cd` and chained from left to right; see https://nodejs.org/api/path.html#path_path_resolve_from_to
  ],
  module: {
    loaders: [
      // Babel
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '../src'),
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/app.css', {
      allChunks: true
    })
  ],
  output: {
    path: path.resolve(__dirname, '../dist/built'),
    publicPath: '/built/',
    filename: 'js/application.js',
    devtoolModuleFilenameTemplate: '[resource-path]' // copied from Mathias, see: https://webpack.github.io/docs/configuration.html#output-devtoolmodulefilenametemplate
  },
  resolve: {
    // had problems importing react in src/components with the following option, so I disabled it again.
    // root: 'src', // allows us to specify import paths as if they were from the root of the src directory. This makes it very easy to navigate to files regardless of how deeply nested your current file is. https://webpack.github.io/docs/configuration.html#resolve-root
    extensions: ['', '.js', '.jsx'] // '' is required for Webpack to work!?!
  },
  stats: {
    colors: true
  }
};
