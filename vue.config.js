module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/': {
        target: 'http://172.24.244.111:2484',
        ws: false,
        changeOrigin: true
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  assetsDir: 'assets'
  // outputDir: "ICBC"

  // productionSourceMap: false

  // lintOnSave: true

  // filenameHashing: true
}
