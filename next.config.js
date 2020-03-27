const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: config => {
    config.resolve.alias["@src"] = path.join(path.resolve(__dirname), "src");
    config.resolve.alias["@redux"] = path.join(
      path.resolve(__dirname),
      "src",
      "redux"
    );
    config.resolve.alias["@layouts"] = path.join(
      path.resolve(__dirname),
      "src",
      "layouts"
    );
    config.resolve.alias["@pages"] = path.join(
      path.resolve(__dirname),
      "src",
      "pages"
    );
    config.resolve.alias["@components"] = path.join(
      path.resolve(__dirname),
      "src",
      "components"
    );
    config.resolve.alias["@elements"] = path.join(
      path.resolve(__dirname),
      "src",
      "components",
      "elements"
    );
    config.resolve.alias["@icons"] = path.join(
      path.resolve(__dirname),
      "src",
      "components",
      "icons"
    );
    config.resolve.alias["@lib"] = path.join(
      path.resolve(__dirname),
      "src",
      "lib"
    );
    config.resolve.alias["@models"] = path.join(
      path.resolve(__dirname),
      "src",
      "models"
    );
    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    DROPBOX_APP_KEY: process.env.DROPBOX_APP_KEY
  }
};
