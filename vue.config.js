module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://172.24.244.111:2484',
        ws: false,
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': '/'// 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        // }
      }
      // '/api-icbc': {
      //   target: '',
      //   ws: false,
      //   changeOrigin: true
      // }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  assetsDir: 'assets',
  // configureWebpack: config => {
  //   require('@vux/loader').merge(config, {
  //     plugins: ['vux-ui', {
  //       name: 'less-theme',
  //       path: 'src/theme.less'
  //     }]
  //   })
  // }
  outputDir: 'icbc',

  productionSourceMap: true,

  lintOnSave: true,

  filenameHashing: true
}
