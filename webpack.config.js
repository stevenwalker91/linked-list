const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: {
      keep: 'index.html',
    },
    globalObject: 'this',
    library: {
      name: 'linkedList',
      type: 'umd',
    },
  },

  module: {
    rules: [],
  },
};
