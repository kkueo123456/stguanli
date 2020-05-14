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
const buinformation = () => import("../pages/caigou/buinformation")
const pandian = () => import("../pages/pandian")
/*采购的三极路由*/
// const allding = () => import("../pages/allDing")
// const cgtj = () => import("../pages/caigoutongji")
// const shenhe = () => import("../pages/shenhe")
const information = () => import("../pages/caigou/information")
const tuihui = () => import("../pages/caigou/tuihui")
const allBuy = () => import("../pages/caigou/allBuy")
/*待入库的一级路由*/
const rukuDetail = () => import("../pages/ruku/rukuDetail")

/*待入库的三级路由*/
const buyEnter = () => import("../pages/ruku/buyRk")
const diaoEnter = () => import("../pages/ruku/diaoRk")
/*库房的一级路由*/
const dbDetail = () => import("../pages/kufang/diaoboDetail")
/*库房的三级路由*/
const zaiku = () => import("../pages/kufang/zaiku")
const chukuF = () => import("../pages/kufang/chukuFind")
const diaoboF = () => import("../pages/kufang/diaoboFind")
const xiaoshou = () => import("../pages/kufang/xiaoshou")

/*销售一级路由*/
const sellMan = () => import('../pages/xiaoshou/sellMan')
//销售二级路由
const goods = () => import('../pages/xiaoshou/goods')

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
          component: kufang,
          children: [{
            path: "zaiku",
            component: zaiku
          },
          {
            path: '',
            redirect: 'zaiku'
          },
          {
            path: "chukuF",
            component: chukuF
          },
          {
            path: "diaoboF",
            component: diaoboF
          },
          {
            path: "xiaoshou",
            component: xiaoshou
          }
          ]
        },
        {
          path: 'ruku',
          component: ruku,
          children: [{
            path: "buyEnter",
            component: buyEnter
          },
          {
            path: '',
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
          }, {
            path: "allBuy",
            component: allBuy
          },
          {
            path: 'information',
            component: information
          },
          {
            path: '',
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
          path: "sellMan",
          component: sellMan,
          children: [
            {
              path: "goods",
              component: goods
            },{
              path:'',
              redirect:'goods'
            }
          ]
        },
        {
          path: 'welcome',
          component: welcome
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
      path: '/dbDetail',
      component: dbDetail
    },
    {
      path: '/buquan',
      component: buinformation
    },
    {
      path: '/rkDetail',
      component: rukuDetail
    },
    {
      path: '/pandian',
      component: pandian
    },
    {
      path: "*",
      redirect: '/login'
    }
  ]
})
