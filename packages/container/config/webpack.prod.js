const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "conatiner",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
        auth: `auth@${domain}/auth/remoteEntry.js`,
        dashboard: `dashboard@auth@${domain}/dashboard/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
