/* eslint-disable */
// @ts-ignore
const env = process.env.NODE_ENV || 'development';

console.info(`Starting app with ENV = ${env}`);

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

module.exports = localConfig[env];