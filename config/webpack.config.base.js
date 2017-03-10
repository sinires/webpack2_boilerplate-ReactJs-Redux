const path = require('path')
    , webpack = require('webpack')
    , autoprefixer = require('autoprefixer');

module.exports = {
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    modules: [
        path.join(__dirname, '../src/'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json', '.less']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'  // fetch API
    }),
    // Shared code
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.bundle.js',
      minChunks: Infinity
    })
  ],
  module: {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, '../src/'),
            exclude: /node_modules/
        },
      // JavaScript / ES6
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '../src/'),
        loader: 'babel-loader'
      },
      // Images
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'images/[name].[ext]?[hash]'
        }
      },
      // Fonts
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'fonts/[name].[ext]?[hash]'
        }
      },
        {
          test: /\.css$/,
          use: [
              {
                  loader: 'postcss-loader',
                  options: {
                      plugins: function () {
                          return [
                              require('precss'),
                              require('autoprefixer')
                          ];
                      }
                  }
              }
          ]
        }
    ]
  }
};
