/* eslint-disable import/no-extraneous-dependencies */
const { addWebpackAlias, override } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@shared': path.resolve(__dirname, 'src/shared'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@store': path.resolve(__dirname, 'src/store')
  })
);
