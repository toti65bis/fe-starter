import getConfig from 'next/config';

const MODE_STANDALONE = 'standalone';

export interface SpaConfig {
  bffUrl: String;
  mode: String;
  staticUrl: String;
  debug: Boolean;
}

const getSpaConfig: Function = (environment): SpaConfig => {
  const env = environment || 'development';

  let conf = require('./config')(env);

  if (
    conf.mode === MODE_STANDALONE &&
    conf.bffUrl === '' &&
    environment !== 'local-mock'
  ) {
    conf.bffUrl = getConfig().publicRuntimeConfig.bff_url;
  }

  return conf;
};

export default getSpaConfig;
