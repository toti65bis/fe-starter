const next = require('next');
const path = require('path');
const express = require('express');
const Url = require('url');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const routes = require('../routes/routes');
const pjson = require('../package.json');

const getQuery = url => Url.parse(url, true).query;
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });

const handler = app.getRequestHandler();


app.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(compression());
  server.use(cookieParser());
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  const staticPath = path.join(__dirname, '../public/static');
  server.use(
    '/public/static',
    express.static(staticPath, {
      maxAge: '30d',
      immutable: true,
    })
  );

  routes(server, pjson.version);

  // Setup next handler
  server.get('/', (req, res) => {
    //res.cookie('XSRF-TOKEN', req.csrfToken());
    res.set({ 'content-type': 'text/html; charset=utf-8'});
    app.render(req, res, '/', getQuery(req.url));
  });

  server.all('*', (req, res) => {
    return handler(req, res)
  })

  server.use(handler).listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
