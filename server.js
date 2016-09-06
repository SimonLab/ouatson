const Hapi = require('hapi');
const Home = require('./home');
const Inert = require('inert');
exports.init = function (port, next) {
  const server = new Hapi.Server();
  server.connection({port: port});
  server.register([Inert, Home], function (err) {
    if (err) {
      return next(err);
    }

    server.start(function (err) {
      return next(err, server);
    });
  });
};
