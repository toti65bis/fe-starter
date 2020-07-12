/* eslint-disable */
// @ts-ignore
const environment = process.env.ENV || 'local-mock';

console.info(`Starting app with ENV = ${environment}`);

const localConfig = {
  local: {
    config: {
      buildId: '',
      appBasepath: '',
      cdnBasepath: '',
      environment: 'local',
    },
  },
  'local-mock': {
    config: {
      buildId: '',
      appBasepath: '',
      cdnBasepath: '',
      environment: 'local-mock',
    },
  },
  development: {
    config: {
      buildId: '',
      appBasepath: '',
      cdnBasepath: '',
      environment: 'development',
    },
  },
  server: {
    config: {
      buildId: '',
      appBasepath: '',
      cdnBasepath: '',
      environment: 'server',
    },
  },
  production: {
    config: {
      buildId: '',
      appBasepath: '',
      cdnBasepath: '',
      environment: 'server',
    },
  },
};

module.exports = localConfig[environment];
