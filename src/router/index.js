import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
const index = () => import("../pages/index")
const login = () => import("../pages/login")
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/login',
      component: login
    }, {
      path: "*",
      redirect: '/login'
    }
  ]
})
