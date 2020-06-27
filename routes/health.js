const config = require('config');

module.exports =  (server) => {
  const serverConfig = config.get('server');
  const context = serverConfig.context;

  server.get(encodeURI(context + '/health'), function (req, res) {
    res.json({ status: 'UP' });
  });
}