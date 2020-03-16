<template>
    <div>
      	<h1>{{num}}</h1> 
      	<input type="button" value="+" @click="updata">
          <input type="button" value="-" @click="reduce">
        <button @click="test">test</button>
    </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
    data () {
        return {
            
        }
    },
    computed:{
    	//把计算属性中的属性映射(map)到store中的getters对应的事件上
    	...mapGetters({
			num:"GETNUM"
    	})
    },
    methods:{
        ...mapActions({
            updata:"ADD",
            reduce:"reduceFun"
        }),
        test(){
            fetch("../data/data.json").then((response)=>{
                response.json().then((data)=>{
                    console.log(data)
                })
            })
        }
    	// updata(){
    	// 	//发起请求，store修改num +1
    	// 	//dispatch()专门发起外部请求的方法，会触发actions中的事件
    	// 	//该方法可定义多个参数，一个必要参数为actions对象中的事件名，其他为可选的参数传值
    	// 	this.$store.dispatch("ADD")
    	// }
    }
    
}
</script>


<style scoped>
.templates{

}
</style>
