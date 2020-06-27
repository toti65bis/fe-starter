const appRouter = (server) => {

    require('./health')(server);

    server.get("/", function (req, res) {
        res.status(200).send(`Welcome to API`);
    });
}

module.exports = {
    appRouter
};