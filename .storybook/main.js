module.exports = {
  stories: ['../src/**/*.stories.(tsx|ts|js)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            uglyCommentsRegex: [/^eslint-.*/, /^global.*/],
            injectDecorator: false,
            prettierConfig: {
              printWidth: 100,
              tabWidth: 2,
              bracketSpacing: true,
              trailingComma: 'es5',
              singleQuote: true,
            },
          },
        },
      ],
      enforce: 'pre',
    });

    return config;
  },
};
