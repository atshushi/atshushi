const { ESBuildPlugin } = require('esbuild-loader');

module.exports = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { webpack, dev }) => {
    if (!dev) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          React: 'react',
        }),
      );

      config.plugins.push(new ESBuildPlugin());
    }

    return config;
  },
};
