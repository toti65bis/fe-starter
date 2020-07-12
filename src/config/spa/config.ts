/* eslint-disable */
const MODE_STANDALONE = 'standalone';

const spaConfig = {
  local: {
    bffUrl: 'http://localhost:3000/api',
    mode: MODE_STANDALONE,
    staticUrl: './public/static',
    debug: true,
    cognito: {
      region: "us-east-1",
      userPool: "us-east-1_Hz5Dg1WJ2",
      identityPool: "us-east-1:343a6538-b13a-42a8-87ce-3d24dba03a21",
      clientId: "4265s9n0h885bcn6l478s0p8l8"
    }
  },
  'local-mock': {
    bffUrl: 'http://localhost:3000/api',
    mode: MODE_STANDALONE,
    staticUrl: './public/static',
    debug: true,
    cognito: {
      region: "us-east-1",
      userPool: "us-east-1_Hz5Dg1WJ2",
      identityPool: "us-east-1:343a6538-b13a-42a8-87ce-3d24dba03a21",
      clientId: "4265s9n0h885bcn6l478s0p8l8"
    }
  },
  server: {
    bffUrl: 'http://localhost:3000/api',
    mode: MODE_STANDALONE,
    staticUrl: './public/static',
    debug: true,
    cognito: {
      region: "us-east-1",
      userPool: "us-east-1_Hz5Dg1WJ2",
      identityPool: "us-east-1:343a6538-b13a-42a8-87ce-3d24dba03a21",
      clientId: "4265s9n0h885bcn6l478s0p8l8"
    }
  },
  development: {
    bffUrl: 'http://localhost:3000/api',
    mode: MODE_STANDALONE,
    staticUrl: './public/static',
    debug: true,
    cognito: {
      region: "us-east-1",
      userPool: "us-east-1_Hz5Dg1WJ2",
      identityPool: "us-east-1:343a6538-b13a-42a8-87ce-3d24dba03a21",
      clientId: "4265s9n0h885bcn6l478s0p8l8"
    }
  },
  production: {
    bffUrl: 'http://localhost:3000/api',
    mode: MODE_STANDALONE,
    staticUrl: './public/static',
    debug: false,
    cognito: {
      region: "",
      userPool: "",
      identityPool: "",
      clientId: ""
    }
  },
};

module.exports = function getConfigByEnviroment(environment) {
  //console.log('SPA CONFIG: env: ',environment,'config: ',spaConfig[environment]);
  return spaConfig[environment];
};
