import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
const index = () => import("../pages/index")
const login = () => import("../pages/login")
const kufang = () => import("../pages/kufang")
const caigou = () => import("../pages/caigou")
const ruku = () => import("../pages/ruku")
const tongji = () => import("../pages/tongji")
const guanli = () => import("../pages/guanli")
const detail = () => import("../pages/detail")
/*三极路由*/
const allding = () => import("../pages/allDing")
const cgtj = () => import("../pages/caigoutongji")
const shenhe = () => import("../pages/shenhe")
const jianding = () => import("../pages/jianding")

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
      component: index,
      children: [
        {
          path: 'kufang',
          component: kufang
        },
        {
          path: 'ruku',
          component: ruku
        },
        {
          path: "caigou",
          component: caigou,
          children: [{
            path: 'allding',
            component: allding
          },{
            path: "shenhe",
            component: shenhe
          },
          {
            path: "jianding",
            component: jianding
          },
          {
            path: "cgtj",
            component: cgtj
          },{
            path: '',
            component: allding
          }
        ]
        },
        {
          path: "tongji",
          component: tongji,
        },
        {
          path: "guanli",
          component: guanli
        },
        {
          path: '',
          redirect: 'kufang'
        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: "*",
      redirect: '/login'
    }
  ]
})
