import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

const state = {
  data: null,
  session: '',
  data2: [{
      xsnum: "XS202005111509",
      xsman: "王小明",
      xstime: "2020/05/11",
      xsid: "0",
      xsDetail: [{
          img: "",
          name: "LV老花中号字母带",
          biaoqian: ["在售", "直播", "微信"],
          logo: "路易威灯/LV",
          price: "10000",
          lie: "pallas传奇",
          kuan: "Palla clutch",
          time: "1587472220",
          cangwei: "上海总仓/C-1-20",
          color: "95-97新",
          num: "12345678909123",
          finPri: "120000",
          id: "0",
          cw: "2"
        },
        {
          img: "",
          name: "LV老花中号字母带",
          biaoqian: ["在售", "直播", "微信"],
          logo: "路易威灯/LV",
          price: "10000",
          lie: "pallas传奇",
          kuan: "Palla clutch",
          time: "1587472220",
          cangwei: "唐山总仓/C-1-20",
          color: "95-97新",
          num: "12345678909123",
          finPri: "120000",
          id: "1",
          cw: "0"
        },
        {
          img: "",
          name: "LV老花中号字母带",
          biaoqian: ["在售", "直播", "微信"],
          logo: "路易威灯/LV",
          price: "10000",
          lie: "pallas传奇",
          kuan: "Palla clutch",
          time: "1587472220",
          cangwei: "北京总仓/C-1-20",
          color: "95-97新",
          num: "12345678909123",
          finPri: "120000",
          id: "2",
          cw: "1"
        }
      ]
    },
    {
      xsnum: "XS2020051115012",
      xsman: "王小明",
      xstime: "2020/05/12",
      xsid: "11",
      xsDetail: [{
          img: "",
          name: "LV老花中号字母带",
          biaoqian: ["在售", "直播", "微信"],
          logo: "路易威灯/LV",
          price: "10000",
          lie: "pallas传奇",
          kuan: "Palla clutch",
          time: "1587472220",
          cangwei: "上海总仓/C-1-20",
          color: "95-97新",
          num: "12345678909123",
          finPri: "120000",
          id: "0",
          cw: "2"
        },
        {
          img: "",
          name: "LV老花中号字母带",
          biaoqian: ["在售", "直播", "微信"],
          logo: "路易威灯/LV",
          price: "10000",
          lie: "pallas传奇",
          kuan: "Palla clutch",
          time: "1587472220",
          cangwei: "唐山总仓/C-1-20",
          color: "95-97新",
          num: "12345678909123",
          finPri: "120000",
          id: "1",
          cw: "0"
        },
        {
          img: "",
          name: "LV老花中号字母带",
          biaoqian: ["在售", "直播", "微信"],
          logo: "路易威灯/LV",
          price: "10000",
          lie: "pallas传奇",
          kuan: "Palla clutch",
          time: "1587472220",
          cangwei: "北京总仓/C-1-20",
          color: "95-97新",
          num: "12345678909123",
          finPri: "120000",
          id: "2",
          cw: "1"
        }
      ]
    }
  ],
}
const mutations = {
  mainData(state,data) {
    state.session = sessionStorage.getItem('isId')
    state.data = data
  }
}
const actions = {
  getmainData(context) {
    var data=[{
      img: "",
      name: "LV老花中号字母带",
      biaoqian: ["在售", "直播", "微信"],
      logo: "路易威灯/LV",
      price: "10000",
      lie: "pallas传奇",
      kuan: "Palla clutch",
      time: "1587472220",
      cangwei: "唐山总仓/C-1-20",
      color: "95-97新",
      num: "12345678909123",
      finPri: "",
      id: "0",
      zt: "入库在售",
      man: "蒲子杰",
      dbzt: "已生成",
      zf: true
    },
    {
      img: "",
      name: "LV老花中号字母带",
      biaoqian: ["在售", "直播", "微信"],
      logo: "路易威灯/LV",
      price: "10000",
      lie: "pallas传奇",
      kuan: "Palla clutch",
      time: "1587472220",
      cangwei: "唐山总仓/C-1-20",
      color: "95-97新",
      num: "12345678909123",
      finPri: "",
      id: "1",
      zt: "未定价",
      man: "蒲子杰",
      dbzt: "暂存",
      zf: false
    },
    {
      img: "",
      name: "LV老花中号字母带",
      biaoqian: ["在售", "直播", "微信"],
      logo: "路易威灯/LV",
      price: "10000",
      lie: "pallas传奇",
      kuan: "Palla clutch",
      time: "1587472220",
      cangwei: "唐山总仓/C-1-20",
      color: "95-97新",
      num: "12345678909123",
      finPri: "120000",
      id: "22",
      zt: "已采购",
      man: "蒲子杰",
      dbzt: "已生成",
      zf: true
    },
    {
      img: "",
      name: "LV老花中号字母带",
      biaoqian: ["在售", "直播", "微信"],
      logo: "路易威灯/LV",
      price: "10000",
      lie: "pallas传奇",
      kuan: "Palla clutch",
      time: "1587472220",
      cangwei: "唐山总仓/C-1-20",
      color: "95-97新",
      num: "12345678909123",
      finPri: "120000",
      id: "31",
      zt: "入库在售",
      man: "蒲子杰",
      dbzt: "暂存",
      zf: null
    }
  ]
    context.commit('mainData',data)
  }
}
const getters = {
  data(state) {
    return state.data
  },
  session(state) {
    return state.session
  },
  data2(state) {
    return state.data2
  }
}
const store = new vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store;
