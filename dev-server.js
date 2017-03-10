/**
 * Created by ftalaev on 07.03.17.
 */
const path = require('path')
    , express = require('express')
    , webpack = require('webpack')
    , webpackDevMiddleware = require('webpack-dev-middleware')
    , webpackHotMiddleware = require('webpack-hot-middleware')
    , development = require('./build.js').development
    , config = require(`./config/webpack.config.${development ? 'development' : 'production'}`)
    , app = express()
    , compiler = webpack(config)
    , host = 'localhost'
    , port = 3000;

function log() {
  arguments[0] = '\nWebpack: ' + arguments[0];
  console.log.apply(console, arguments);
}

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  historyApiFallback: true,
    hot: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, host, (err) => {
  if (err) {
    log(err);
    return;
  }

  log('🚧  App is listening at http://%s:%s', host, port);
});
