const path = require('path');
const webpack = require('webpack');
const alias = require('./alias');

module.exports = {
  webpack: config => {
    config.resolve.alias = alias;
    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    DROPBOX_APP_KEY: process.env.DROPBOX_APP_KEY,
  },
};
