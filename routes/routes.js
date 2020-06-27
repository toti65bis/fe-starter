const config = require('config');


const appRouter = (app, version) => {
    const serverConfig = config.get('server');
    const context = serverConfig.context;

    require('./health')(app);

    app.get(`${context}`, (req, res) => {
        res.status(200).send(`Welcome to API - version ${encodeURI(version)}`);
    });
}

module.exports = appRouter;