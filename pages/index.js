import '@babel/polyfill';
import React, {Component} from 'react';
import { getAppConfig } from '@lib';
import AppRouter from '../src/commons/AppRouter';

class Index extends Component {
    static displayName = 'Index';

    static async getInitialProps(ctx) {
        return getAppConfig(ctx);
    }

    state = {
        generalError: null,
    };

    static getDerivedStateFromError(generalError) {
        return { generalError };
    }

    render() {
        const { config, generalError } = this.props;
        return <AppRouter config={config} />;
    }
}
export default Index;