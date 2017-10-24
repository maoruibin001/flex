import Vue from 'vue'
import Router from 'vue-router'
import Child from '@/components/child'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/child',
      name: 'child',
      component: Child
    }
  ]
})
