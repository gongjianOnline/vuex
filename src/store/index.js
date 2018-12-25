import Vue from "vue"
import Vuex from "vuex"

//引入vuex仓库模块
import CounterModule from "./modules/CounterModule"
Vue.use(Vuex)
let store = new Vuex.Store({
	//用来管理不同类型的状态的方式
	modules:{
		CounterModule
		//...
	}
})

export default store 