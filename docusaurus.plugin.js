module.exports = function (context, options) {
  return {
    name: "font-loader-plugin",
    configureWebpack(config, isServer, utils) {
      const { getCacheLoader } = utils;
      return {
        module: {
          rules: [
            {
              test: /\.woff2?$/,
              use: [getCacheLoader(isServer), "url-loader"],
            },
          ],
        },
      };
    },
  };
};
