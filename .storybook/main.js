var path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/addon-controls',
    '@storybook/addon-notes/register',
    '@storybook/addon-viewport/register',
  ],
  babel: async (options) => ({
    ...options,
  }),
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(js|mdx)'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(png|jpeg|jpg|gif|svg|JPEG|JPG|PNG|GIF|SVG)$/,
      use: ['file-loader'],
      include: path.resolve(__dirname, '../'),
    });

    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    };

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader],
    });

    return config;
  },
};
