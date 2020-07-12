const typescript = require('@zeit/next-typescript');
const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass')
const webpack = require('webpack');

const fs = require('fs');
const { promisify } = require('util');

const { join, resolve } = require('path');

const copyFile = promisify(fs.copyFile);
const isProd = process.env.NODE_ENV === 'production';

const assetPrefix = isProd ? process.env.CDN_URL || '' : '';

module.exports = withPlugins([ [typescript],[sass] ], {
  //useFileSystemPublicRoutes: false,
  //target: 'serverless',
  assetPrefix,
  publicRuntimeConfig: {
    bff_url: process.env.BFF_URL,
    aws_region: process.env.AWS_REGION,
    aws_user_pool: process.env.AWS_USER_POOL,
    aws_identity_pool: process.env.AWS_IDENTITY_POOL,
    aws_client_id: process.env.AWS_CLIENT_ID
  },
  exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => {
    if (dev) {
      return defaultPathMap;
    }

    await copyFile(join(distDir, 'build-manifest.json'), join(outDir, 'build-manifest.json'));
    await copyFile(join(distDir, 'BUILD_ID'), join(outDir, 'BUILD_ID'));
    return defaultPathMap;
  },
  webpack: (config, { dev }) => {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries['main.js'] &&
        !entries['main.js'].includes(resolve(__dirname, 'client/polyfills.js'))
      ) {
        entries['main.js'].unshift(resolve(__dirname, 'client/polyfills.js'));
      }

      return entries;
    };

    // Setting Alias
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@lib': resolve(__dirname, 'src/lib/'),
        '@config': resolve(__dirname, 'src/config/'),
        '@contexts': resolve(__dirname, 'src/contexts/'),
        '@components': resolve(__dirname, 'src/components/'),
        '@containers': resolve(__dirname, 'src/containers/'),
        '@actions': resolve(__dirname, 'src/actions/'),
        '@reducers': resolve(__dirname, 'src/reducers/'),
        '@types': resolve(__dirname, 'src/types/'),
      },
    };

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: '/_next/static/fonts/',
            outputPath: 'static/fonts/',
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });

    if (isProd) {
      // Configure next.js to transpile node_modules targeting IE, so every module that provides an ESM build, doesn't break in IE >= 10
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  modules: false,
                  targets: {
                    // Recommended in: https://jamie.build/last-2-versions
                    esmodules: true,
                    browsers: ['>0.25%', 'ie 10', 'not op_mini all'],
                  },
                },
              ],
            ],
          },
        },
      });
    }

    return config;
  },
});
