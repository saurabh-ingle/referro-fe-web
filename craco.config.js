module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore source map warnings
      webpackConfig.ignoreWarnings = [
        { module: /\.css$/ },
      ];
      return webpackConfig;
    },
  },
}; 