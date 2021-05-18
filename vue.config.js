module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'News App'
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
