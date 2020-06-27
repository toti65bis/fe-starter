const typescript = require('@zeit/next-typescript');
const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');

const fs = require('fs');
const { promisify } = require('util');
const { join, resolve } = require('path');

const copyFile = promisify(fs.copyFile);

const isProd = process.env.NODE_ENV === 'production';
const webpack = require('webpack');


const { ASSET_HOST } = process.env

// for those who using CDN
const assetPrefix = ASSET_HOST || ''

module.exports = {
  assetPrefix,
  target: 'serverless',
  webpack: (config, { dev }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

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

    return config
  }
}
