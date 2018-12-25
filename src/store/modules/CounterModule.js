export default {
	//共享的组件状态数据
	state:{
		num:0,
		list:[]
	},
	//唯一可以用来修改state的状态
	mutations:{
		//inc事件接受两个参数，一个必要参数为固定参数state,第二个不必要参数payload接受传过来的值
		INC:(state)=>{
			state.num ++
		}
	},
	//用来监听外部组件的动作请求
	//可以执行异步(async)操作
	actions:{
		ADD:(store)=>{
			//可以做逻辑处理
			//store.commit包含两个参数，一个参数是调用mutations的事件名，第二个参数为传过去的值
			setTimeout(()=>{
				store.commit("INC")
			},2000)
		}
	},
	//通过getters来访问最新状态
	getters:{
		GETNUM:(state)=>{
			return state.num
		}
	}
}