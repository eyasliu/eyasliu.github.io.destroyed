import webpack from 'webpack';
import common from './webpack.common';
import path from 'path';
import config from './config';

module.exports = {
  entry: {
    app: [
      `webpack-dev-server/client?http://${config.host}:${config.clientPort}`,
      'webpack/hot/only-dev-server',
      './app/client/entry.js'
    ]
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    publicPath: `http://${config.host}:${config.clientPort}/build/`
  },
  resolve: common.resolve,
  module: {
    noParse: common.module.noParse,
    loaders: [
      ...common.module.loaders,
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: [path.join(__dirname, '../app/client'), path.join(__dirname, 'config')],
        exclude: [path.join(__dirname, '../node_modules'), path.join(__dirname, '../app/client/vendor')]
      }
    ]
  },
  devtool: 'eval',
  plugins: [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
};
