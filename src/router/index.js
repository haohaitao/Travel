import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import city from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: () => import('@/pages/home/Home')
      component: Home     
    }, {
      path: '/city',
      name: 'city',
      // component: () => import('@/pages/city/City')
      component: city
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      // component: () => import('@/pages/detail/Detail')
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0}
  }
})
