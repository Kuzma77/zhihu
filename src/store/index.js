import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		token:'1',
		baseUrl:'http://localhost:8080/api',
		user:{
			id:'1',
			nickname:'Kuzma',
			avatar:'https://pic3.zhimg.com/50/v2-e9f793b4e24fc991216fd97764fbf487_hd.jpg'
		}
	},
	mutations:{
		setToken(state,data){
			state.token = data;
		},
		setUser(state,data){
			state.user = data;
		}
	},
	actions:{},
	modules:{}
})