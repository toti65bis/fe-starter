import Amplify, { Auth } from 'aws-amplify';
import getAppConfig from '@lib/utils/config';
import getSpaConfig from '../spa/index';

const { config } = getAppConfig();
const spaConfig = getSpaConfig(config.environment);
console.log("SOPUTOVO", spaConfig);

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: spaConfig.cognito.identityPool,

        // REQUIRED - Amazon Cognito Region
        region: spaConfig.cognito.region,

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        //identityPoolRegion: 'XX-XXXX-X',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: spaConfig.cognito.userPool,

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: spaConfig.cognito.clientId,

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        //mandatorySignIn: false,

        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        //cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            //domain: '.yourdomain.com',
        // OPTIONAL - Cookie path
            //path: '/',
        // OPTIONAL - Cookie expiration in days
            //expires: 365,
        // OPTIONAL - Cookie secure flag
        // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
            //secure: true
        //},

        // OPTIONAL - customized storage object
        //storage: MyStorage,

        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        //authenticationFlowType: 'USER_PASSWORD_AUTH',

        // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
        //clientMetadata: { myCustomKey: 'myCustomValue' },

         // OPTIONAL - Hosted UI configuration
        //oauth: {
            //domain: 'your_cognito_domain',
            //scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            //redirectSignIn: 'http://localhost:3000/',
            //redirectSignOut: 'http://localhost:3000/',
            //responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        //}
    }
});

// You can get the current config object
const currentConfig = Auth.configure();

export default currentConfig;