import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'v1',
      component: () => import('@/pages/theory/v1')
    }
  ]
})
