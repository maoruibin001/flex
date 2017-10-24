import Vue from 'vue'
import Router from 'vue-router'
import Child from '@/components/child'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/example'

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
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    }
  ]
})
