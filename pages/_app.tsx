import '@babel/polyfill';
import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import idx from 'idx';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import getSpaConfig from '../src/config/spa/index';
//import getAppConfig from '@lib/utils/config';

import createStore from '../src/store/createStore';




//const { config } = getAppConfig();

interface AppProps {
  config: any;
  pageProps: any;
  cdnBasepath: any;
  store: any;
}

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps: any = {};
    //let store: any = {};
    //let spaProps: any = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps: {
        ...pageProps,
        isServer: 'req' in ctx,
      }
    };
  }

  state = {
    isServer: this.props.pageProps.isServer,
  };

  componentDidMount() {
    this.setState({ isServer: false });
  }

  render() {
    let { Component, pageProps, store } = this.props;
    const env = idx(pageProps.config, (_) => _.environment) || 'development';
    //const DEBUG = env === 'production' ? false : true;
    const spaProps = getSpaConfig(env);
    const cdnBasepath = idx(pageProps.config, (_) => _.cdnBasepath) || '';
    const build_id = idx(pageProps.config, (_) => _.buildId) || 'development';
    const versionFile =
      build_id == 'development'
        ? Math.floor(Date.now() / 1000)
        : pageProps.config.buildId;

    /*if (!DEBUG) {
          console.log = function() {};
        }*/

    // Don't render on SSR
    if (this.state.isServer) {
      return null;
    }

    return (
      <Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />

          <link
            href={`${cdnBasepath}${spaProps.staticUrl}/assets/css/app.min.css?v=${versionFile}`}
            type="text/css"
            rel="stylesheet"
          />

          <title>Nextjs Starter</title>

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                              // eslint-disable-next-line no-undef
                              console.log("App Loaded");
                              `,
            }}
          />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Fragment>
    );
  }
}

export default withRedux(createStore)(MyApp)