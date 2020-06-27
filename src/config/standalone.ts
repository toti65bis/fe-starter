/* eslint-disable */
const environment = process.env.NODE_ENV || 'development';
const MODE = 'standalone';

const standaloneConfig = {
    'development': {
        config: {
            appBasepath: '/',
            cdnBasepath: '',
            spa: {
                bffUrl: 'http://localhost:3000',
                mode: MODE,
            },
        },
    },
    'production': {
        config: {
            appBasepath: '/',
            cdnBasepath: '',
            spa: {
                bffUrl: process.env.REACT_APP_BFF_URL,
                mode: MODE,
            },
        },
    },
};
module.exports = standaloneConfig[environment];