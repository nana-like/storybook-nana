const CracoAlias = require('craco-alias');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "@/styles/_variable.scss";
          @import "@/styles/_mixin.scss";
        `
      }
    }
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json'
      }
    }
  ],
  rules: [
    // Apply loader
    {
      test: /\.scss$/,
      use: [
        // 'style-loader',
        // 'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: 'ㅏ멀ㄴ이ㅏ로마ㅣㅇㄴ러ㅣ마어림너'
          }
        }
      ]
    }
  ]
};
