const CracoAlias = require('craco-alias');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "@/styles/_variable.scss";
          @import "@/styles/_helper.scss";
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
