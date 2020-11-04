const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    index: './js/pageEntry/index.js',
    photo: './js/pageEntry/photo.js',
    form: './js/pageEntry/form.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js')
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
      // Popper: ['popper.js', 'default']
      // svg4everybody: 'svg4everybody'
    })
  ]
};


