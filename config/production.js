const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = function(config){
  // The source code will be in a separate file
  config.devtool = 'source-map';

  config.plugins = [
    // Minify the JS
    new UglifyJSPlugin({
      sourceMap: true
    }),

    // Signal libraries we are in production
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ];

  console.log( JSON.stringify( config, null, 2) );
  return config;
};
