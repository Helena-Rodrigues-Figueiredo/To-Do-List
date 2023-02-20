const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  disableHostCheck: true,
  devServer: {
    proxy: {
      '^/': {
        target: 'https://to-do-list-backend.up.railway.app',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
