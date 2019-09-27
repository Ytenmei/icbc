import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.VUE_APP_URL,
  routes: [
    {
      name: 'detail',
      path: '/detail/:id',
      component: () => import('@/views/detail'),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      name: 'finishPay',
      path: '/finishPay',
      component: () => import('@/views/finishPay'),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      name: 'goodList',
      path: '/',
      component: () => import('@/views/goodList'),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      name: 'orderSure',
      path: '/orderSure',
      component: () => import('@/views/orderSure'),
      meta: {
        keepAlive: false // 需要被缓存
      }
    }
  ]
})
