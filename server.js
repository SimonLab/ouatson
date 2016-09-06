const Hapi = require('hapi');
const Home = require('./home');
const Public = require('./public');
const Inert = require('inert');
const Handlebars = require('handlebars');
const Vision = require('vision');

exports.init = function (port, next) {
  const server = new Hapi.Server();
  server.connection({port: port});
  server.register([Inert, Vision, Public, Home], function (err) {
    if (err) {
      return next(err);
    }

    server.views({
      engines: {
        html: Handlebars
      },
      relativeTo: __dirname + '/views/',
      path: '.',
      layout: 'default',
      layoutPath: 'layout',
      helpersPath: 'helpers',
      partialsPath: 'partials'
    });

    server.start(function (err) {
      return next(err, server);
    });
  });
};
