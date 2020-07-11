/* eslint-disable */
const MODE_STANDALONE = 'standalone';

const spaConfig = {
  local: {
    bffUrl: 'http://localhost:3000/api',
    mode: MODE_STANDALONE,
    staticUrl: './public/static',
    debug: true,
  },
  'local-mock': {
    bffUrl: 'http://localhost:3000/api',
    mode: MODE_STANDALONE,
    staticUrl: './public/static',
    debug: true,
  },
  server: {
    bffUrl: 'http://localhost:3000/api',
    mode: MODE_STANDALONE,
    staticUrl: './public/static',
    debug: true,
  },
  development: {
    bffUrl: 'http://localhost:3000/api',
    mode: MODE_STANDALONE,
    staticUrl: './public/static',
    debug: true,
  },
  production: {
    bffUrl: 'http://localhost:3000/api',
    mode: MODE_STANDALONE,
    staticUrl: './public/static',
    debug: false,
  },
};

module.exports = function getConfigByEnviroment(environment) {
  //console.log('SPA CONFIG: env: ',environment,'config: ',spaConfig[environment]);
  return spaConfig[environment];
};
