const path = require('path')
    , merge = require('webpack-merge')
    , webpack = require('webpack')
    , config = require('./webpack.config.base')

    , GLOBALS = {
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          },
          __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        };

module.exports = merge(config, {
  entry: {
    application: [
        'webpack-hot-middleware/client',
        'react-hot-loader/patch',
        './src/index.js',
    ],
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        'screw_ie8': true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ],
  module: {
    noParse: /\.min\.js$/,
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
  },
});
