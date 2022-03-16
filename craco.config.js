const CracoAlias = require('craco-alias');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "./src/styles/_variables.scss";
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
  ]
};
