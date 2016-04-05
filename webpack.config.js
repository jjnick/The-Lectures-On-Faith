var webpack = require('webpack');

module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: '',
    path: 'public'
  },

  module: {
    // preLoaders: [
    //   //Javascript
    //   { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
    // ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    //   { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ]
  },
  
//   eslint: {
//       configFile: './eslintrc.js',
//       failOnWarning: false,
//       failOnError: true
//   },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : []

};
