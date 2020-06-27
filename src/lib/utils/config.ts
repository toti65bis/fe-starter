interface Functionality {
    id: Number;
    title: String;
    description: String;
    level: Number;
    visibility: Boolean;
    uri: String;
    type: String;
    children: Array<Functionality>;
}

export interface User {
    name: String;
    lastname: String;
    gender: String;
    birthday: String;
    theme: String;
    functionalities: Functionality;
}

export interface Config {
    appBasepath: String;
    cdnBasepath: String;
}

export interface AppConfig {
    config: Config;
    user: User;
}

const getAppConfig: Function = (): AppConfig => {
    const isSSR = typeof window === 'undefined';
    let appConfig;

    if (isSSR) {
        appConfig = require('../../config/local');
    } else {
        // @ts-ignore
        appConfig = window.__NEXT_DATA__.props.pageProps;
        // @ts-ignore
        appConfig.config.buildId = window.__NEXT_DATA__.buildId;
    }

    //console.log(appConfig);
    return appConfig;
};

export default getAppConfig;