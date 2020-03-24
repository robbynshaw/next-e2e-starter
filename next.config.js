const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: config => {
    config.resolve.alias['@src'] = path.join(path.resolve(__dirname), "src");
    config.resolve.alias['@redux'] = path.join(path.resolve(__dirname), "src", "redux");
    config.resolve.alias['@layouts'] = path.join(path.resolve(__dirname), "src", "layouts");
    config.resolve.alias['@pages'] = path.join(path.resolve(__dirname), "src", "pages");
    config.resolve.alias['@components'] = path.join(path.resolve(__dirname), "src", "components");
    config.resolve.alias['@elements'] = path.join(path.resolve(__dirname), "src", "components", "elements");
    config.resolve.alias['@icons'] = path.join(path.resolve(__dirname), "src", "components", "icons");
    return config;
  }
};