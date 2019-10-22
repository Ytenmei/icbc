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
// import vueResource from 'vue-resource'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
dayjs.extend(customParseFormat)
// Vue.use(vueResource)
Vue.use(Vuex)
const a = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})
Vue.use(vuexI18n.plugin, a)
const translationsEn = {
  'content': 'This is some {type} content'
}
// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.
// add translations directly to the application
Vue.i18n.add('en', translationsEn)
// set the start locale to use
Vue.i18n.set('en')
Vue.use(Vant)
Vue.use(Lazyload)
Vue.config.productionTip = false
dayjs.locale('zh-cn')

Vue.filter('formTime', value => {
  return dayjs(value).format('YYYY-MM-DD HH:mm:ss', 'zh_cn')
})
Vue.prototype.$dayjs = time => {
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss', 'zh_cn')
}

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
