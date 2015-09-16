import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import webpack from 'webpack';
import {Schema} from './data/schema';
import config from './webpack.config';

const APP_PORT = 3000;

var app = express();
var compiler = webpack(config);

app.use('/graphql', graphQLHTTP({schema: Schema, pretty: true}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Serve static resources
app.use('/', express.static('public'));
app.use('/node_modules/react', express.static('node_modules/react'));
app.use('/node_modules/react-relay', express.static('node_modules/react-relay'));

app.listen(APP_PORT, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`App is now running on http://localhost:${APP_PORT}`);
});