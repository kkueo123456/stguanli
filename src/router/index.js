import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
const index = () => import("../pages/index")
//欢迎页面路由 
const welcome = () => import("../pages/welcome")
// 登录路由
const login = () => import("../pages/login")
//左侧菜单一级路由
const caigou = () => import("../pages/caigou")
const kufang = () => import("../pages/kufang")
const ruku = () => import("../pages/ruku")
const sellMan = () => import('../pages/xiaoshou/sellMan')
const guanli = () => import("../pages/guanli")
const customer = () => import("../pages/customer/customer")
const tongji = () => import("../pages/tongji")
//页面的二级路由
//详情页
const detail = () => import("../pages/detail")
//订单填写页
const dingdan = () => import("../pages/dingdan")
//批量入库
const batchStorage = () => import('../pages/ruku/batchStorage')
// 补全信息页
const buinformation = () => import("../pages/caigou/buinformation")
//盘点页
const pandian = () => import("../pages/pandian")
//全部的编辑按钮
const allBianji = () => import('../pages/allBianji')
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
const diaoboPage = () => import("../pages/kufang/diaoboPage")
const diaoboEdit = () => import("../pages/kufang/diaoboEdit")
const xiaoshouCheck = () => import('../pages/kufang/xiaoshouCheck')
/*库房的三级路由*/
const zaiku = () => import("../pages/kufang/zaiku")
const chukuF = () => import("../pages/kufang/chukuFind")
const diaoboF = () => import("../pages/kufang/diaoboFind")
const xiaoshou = () => import("../pages/kufang/xiaoshou")

/*销售一级路由*/

//查询销售历史详情
const findSellDetail = () => import('../pages/xiaoshou/findSellDetail')

//销售订单
const sellDing = () => import('../pages/xiaoshou/sellDingdan')
//编辑销售订单
const updateDing = () => import('../pages/xiaoshou/updateDing')

//查询销售历史
const findSell = () => import('../pages/xiaoshou/findSell')
//销售二级路由
const goods = () => import('../pages/xiaoshou/goods')

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      component: index,
      children: [{
          path: 'kufang',
          component: kufang,
          children: [{
              path: "zaiku",
              component: zaiku,
              name: 'zaiku',
              meta: ['仓库管理', '在库货品']
            },
            {
              path: '',
              redirect: 'zaiku'
            },
            {
              path: "chukuF",
              component: chukuF,
              name: 'chukuF',
              meta: ['仓库管理', '出库查询']
            },
            {
              path: "diaoboF",
              component: diaoboF,
              name: 'diaoboF',
              meta: ['仓库管理', '调拨查询']
            },
            {
              path: "xiaoshou",
              component: xiaoshou,
              name: 'xiaoshou',
              meta: ['仓库管理', '销售订单']
            }
          ]
        },
        {
          path: 'ruku',
          component: ruku,
          children: [{
              path: "buyEnter",
              component: buyEnter,
              name: 'buyEnter',
              meta: ['入库管理', '采购入库']
            },
            {
              path: '',
              redirect: 'buyEnter'
            },
            {
              path: "diaoEnter",
              component: diaoEnter,
              name: 'diaoEnter',
              meta: ['入库管理', '调拨入库']
            }
          ]
        },
        {
          path: "caigou",
          component: caigou,
          children: [{
              path: "tuihui",
              component: tuihui,
              name: 'tuihui',
              meta: ['采购管理', '退回']
            }, {
              path: "allBuy",
              component: allBuy,
              name: 'allBuy',
              meta: ['采购管理', '全部订单']
            },
            {
              path: 'information',
              component: information,
              name: 'information',
              meta: ['采购管理', '补全信息']
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
          name: 'tongji',
          meta: ['数据统计']
        },
        {
          path: "guanli",
          component: guanli,
          name: 'guanli',
          meta: ['角色管理']
        },
        {
          path: "sellMan",
          component: sellMan,
          children: [{
              path: "goods",
              component: goods,
              name: 'goods',
              meta: ['销售管理', '全部货品']
            }, {
              path: '',
              redirect: 'goods'
            },
            {
              path: 'findSell',
              component: findSell,
              name: 'findSell',
              meta: ['销售管理', '销售查询']
            }
          ]
        },
        {
          path: 'customer',
          component: customer,
          name: 'customer',
          meta: ['顾客管理']
        },
        {
          path: 'welcome',
          component: welcome,
          name: 'welcome',
          meta: ['欢迎']
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
      component: dbDetail,
      name: 'dbDetail',
      meta: ['调拨查询']
    },
    {
      path: '/buquan',
      component: buinformation
    },
    {
      path: '/rkDetail',
      component: rukuDetail,
      name: 'rkDetail',
      meta: ['调拨详情']
    },
    {
      path: '/pandian',
      component: pandian
    },
    {
      path: '/sellDing',
      component: sellDing
    },
    {
      path: '/diaoboPage',
      component: diaoboPage
    },
    {
      path: '/allBianji',
      component: allBianji
    },
    {
      path: '/xiaoshouCheck',
      component: xiaoshouCheck
    },
    {
      path: '/diaoboEdit',
      component: diaoboEdit
    },
    {
      path: '/findSellDetail',
      component: findSellDetail
    },
    {
      path: '/batchStorage',
      component: batchStorage
    },
    {
      path: '/updateDing',
      component: updateDing
    },
    {
      path: "*",
      redirect: '/login'
    }
  ]
})
