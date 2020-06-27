/* eslint-disable */
const MODE_INTEGRATED = 'integrated';
const MODE_STANDALONE = 'standalone';

const spaConfig = {
    "development": {
        bffUrl: 'http://localhost:3000/api',
        mode: MODE_STANDALONE,
        staticUrl: './public/static',
    },
    "production": {
        bffUrl: 'http://localhost:3000/api',
        mode: MODE_STANDALONE,
        staticUrl: './public/static',
    }
};

module.exports = function getOBConfigByEnviroment(environment) {
    return spaConfig[environment];
};