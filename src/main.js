import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'
import './assets/font/iconfont.js'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

Vue.use(Vant)
Vue.use(Lazyload)
Vue.config.productionTip = false
dayjs.locale('zh-cn')

Vue.filter('formTime', value => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss', 'zh_cn')
})
Vue.prototype.$sleep = time => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve()
    }, time)
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
