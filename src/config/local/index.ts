/* eslint-disable */
const environment = process.env.NODE_ENV || 'development';

console.info(`Starting app with ENV = ${environment}`);

const localConfig = {
    'development': {
        config: {
            buildId: '',
            appBasepath: '',
            cdnBasepath: '',
            environment: 'development',
        },
    },
    'production': {
        config: {
            buildId: '',
            appBasepath: '',
            cdnBasepath: '',
            environment: 'server',
        },
    },
};

module.exports = localConfig[environment];