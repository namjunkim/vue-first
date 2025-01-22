const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //transpileDependencies: true
  devServer: {
      proxy: {
        '/vue2' : {
          target: 'http://localhost:8231',
          changeOrigin: true,
        },
      },
  },
})
