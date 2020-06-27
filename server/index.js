const next = require('next')
const path = require('path')
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const config = require('config');
const nextRoutes = require('../routes/nextRoutes');
const routes = require('../routes/routes');
const pjson = require('../package.json');

const serverConfig = config.get('server');

const port = parseInt(serverConfig.port, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });

const handler = nextRoutes.getRequestHandler(app);


app.prepare().then(() => {
    const server = express();

    server.use(helmet());
    server.use(compression());
    server.use(cookieParser());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: true
    }));

    const staticPath = path.join(__dirname, '../public/static')
    server.use('/public/static', express.static(staticPath, {
        maxAge: '30d',
        immutable: true
    }))

    routes(server, pjson.version);

    server.use(handler).listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})
