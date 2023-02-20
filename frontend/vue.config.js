const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/': {
        target: 'https://to-do-list-backend.up.railway.app',
        changeOrigin: true
      }
    }
  }
})
