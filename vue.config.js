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
  // configureWebpack: config => {
  //   require('@vux/loader').merge(config, {
  //     plugins: ['vux-ui', {
  //       name: 'less-theme',
  //       path: 'src/theme.less'
  //     }]
  //   })
  // }
  // outputDir: "ICBC"

  // productionSourceMap: false

  // lintOnSave: true

  // filenameHashing: true
}
