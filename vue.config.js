module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://172.24.244.112:1250',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
