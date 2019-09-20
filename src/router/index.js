import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'commodity',
      path: '/commodity',
      component: () => import('@/views/commodity')
    },
    {
      name: 'detail',
      path: '/detail',
      component: () => import('@/views/detail')
    },
    {
      name: 'finishPay',
      path: '/finishPay',
      component: () => import('@/views/finishPay')
    },
    {
      name: 'goodList',
      path: '/',
      component: () => import('@/views/goodList')
    },
    {
      name: 'orderSure',
      path: '/orderSure',
      component: () => import('@/views/orderSure')
    }
  ]
})
