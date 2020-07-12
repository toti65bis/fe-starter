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
    conf.cognito.region = getConfig().publicRuntimeConfig.aws_region;
    conf.cognito.userPool = getConfig().publicRuntimeConfig.aws_user_pool;
    conf.cognito.identityPool = getConfig().publicRuntimeConfig.aws_identity_pool;
    conf.cognito.clientId = getConfig().publicRuntimeConfig.aws_client_id;
  }

  return conf;
};

export default getSpaConfig;
