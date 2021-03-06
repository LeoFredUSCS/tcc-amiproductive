module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'C-Tasks'
      },
      nodeModulesPaths: ['./node_modules']
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/assets/_main.scss";
          @import "./src/assets/_variables.scss";
          @import "./src/assets/_mixins.scss";
        `
      }
    }
  }
}
