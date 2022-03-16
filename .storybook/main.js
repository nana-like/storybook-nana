const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.slice().map((subRule) => {
          if (subRule.test instanceof RegExp && subRule.test.test('.scss')) {
            return {
              ...subRule,
              use: [
                ...subRule.use,
                {
                  loader: require.resolve('sass-resources-loader'),
                  options: {
                    resources: [
                      path.resolve(__dirname, '../src/styles/_variable.scss')
                    ]
                  }
                }
              ]
            };
          }
          return subRule;
        });
      }
      return rule;
    });
    return config;
  }
};
