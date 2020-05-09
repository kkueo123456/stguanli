import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
const index = () => import("../pages/index")
const welcome = () => import("../pages/welcome")

const login = () => import("../pages/login")
const kufang = () => import("../pages/kufang")
const caigou = () => import("../pages/caigou")
const ruku = () => import("../pages/ruku")
const tongji = () => import("../pages/tongji")
const guanli = () => import("../pages/guanli")
const detail = () => import("../pages/detail")
const dingdan = () => import("../pages/dingdan")
const buinformation = () => import("../pages/buinformation")

/*采购的三极路由*/
// const allding = () => import("../pages/allDing")
// const cgtj = () => import("../pages/caigoutongji")
// const shenhe = () => import("../pages/shenhe")
const information = () => import("../pages/information")
const tuihui = () => import("../pages/tuihui")
const allBuy = () => import("../pages/allBuy")


/*待入库的三级路由*/ 
const buyEnter = () => import("../pages/buyRk")
const diaoEnter = () => import("../pages/diaoRk")

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
          component: ruku,
          children:[{
            path: "buyEnter",
            component: buyEnter
          },
          {
            path:'',
            redirect: 'buyEnter'
          },
          {
            path: "diaoEnter",
            component: diaoEnter
          }
        ]
        },
        {
          path: "caigou",
          component: caigou,
          children: [{
            path: "tuihui",
            component: tuihui
          },{
            path: "allBuy",
            component: allBuy
          },
          {
            path:'information',
            component:information
          },
          {
            path:'',
            redirect: 'allBuy'
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
          path:'welcome',
          component:welcome
        },
        {
          path: '',
          redirect: 'welcome'
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
      path: '/dingdan',
      component: dingdan
    },
    {
      path: '/buquan',
      component: buinformation
    },
    {
      path: "*",
      redirect: '/login'
    }
  ]
})
