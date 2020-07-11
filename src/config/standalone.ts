/* eslint-disable */
const environment = process.env.ENV || 'server';
const MODE = 'standalone';

const standaloneConfig = {
  local: {
    config: {
      appBasepath: '/',
      cdnBasepath: '',
      spa: {
        bffUrl: 'http://localhost:3000/api',
        mode: MODE,
      },
    },
  },
  'local-mock': {
    config: {
      appBasepath: '/',
      cdnBasepath: '',
      spa: {
        bffUrl: 'http://localhost:3000/api',
        mode: MODE,
      },
    },
  },
  server: {
    config: {
      appBasepath: '/',
      cdnBasepath: '',
      spa: {
        bffUrl: process.env.REACT_APP_BFF_URL,
        mode: MODE,
      },
    },
  },
  development: {
    config: {
      appBasepath: '/',
      cdnBasepath: '',
      spa: {
        bffUrl: process.env.REACT_APP_BFF_URL,
        mode: MODE,
      },
    },
  },
  production: {
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
