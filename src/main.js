// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import "animate.css"
Vue.prototype.$echarts = echarts
//css重置
import './assets/css/reset.css'
//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//全局过滤器
import filters from "./filter/index"
for (var i in filters) {
  Vue.filter(i, filters[i])
}
//挂载store
import store from './store/index'
//axios
import axios from 'axios'
axios.interceptors.response.use(res => {
  console.log("---" + res.config.url + "--------")
  console.log(res.data)
  if (res.data.data == -1) {
    router.push('/login')
  }
  return res.data;
})
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
//  导入excel插件
import XLSX from 'xlsx'
Vue.prototype.XLSX = XLSX
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
