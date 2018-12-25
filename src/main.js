// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入Vuex
import Vuex from "vuex"
Vue.use(Vuex)
//进入vuex仓库
import store from "./store/index.js"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //注册store，以便其他组件可以访问
  components: { App },
  template: '<App/>'
})
