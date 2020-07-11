export interface Config {
  appBasepath: String;
  cdnBasepath: String;
  environment: String;
}

export interface AppConfig {
  config: Config;
}

const getAppConfig: Function = (): AppConfig => {
  const isSSR = typeof window === 'undefined';

  let appConfig;

  if (isSSR) {
    appConfig = require('../../config/local');
  } else {
    appConfig = window['__NEXT_DATA__'].props.pageProps;
    appConfig.config.buildId = window['__NEXT_DATA__'].buildId;
  }

  //console.log(appConfig);
  return appConfig;
};

export default getAppConfig;
