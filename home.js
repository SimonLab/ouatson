exports.register = function (server, options, next) {

  server.route([
  {
    method: 'GET',
    path: '/',
    config: {
      description: 'return the home page',
      handler: function (request, reply) {
          const data = require('./data.json');
          return reply.view('home', {data: data});
      }
    }
  }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
