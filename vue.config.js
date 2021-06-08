module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'Charlinhos Tasks'
      }
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
