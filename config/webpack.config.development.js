const merge = require('webpack-merge')
    , webpack = require('webpack')
    , config = require('./webpack.config.base')
    , path = require('path')

    , GLOBALS = {
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
    };

module.exports = merge(config, {
  cache: true,
  devtool: 'eval-source-map',
  entry: {
    application: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
        './src/index.js',
    ],
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    loaders: [
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, '../src/styles')
        ],
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
          { loader: 'less-loader', query: { outputStyle: 'expanded' } }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss'
      }
    ]
  }
});
