import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		token:'111',
		baseUrl:'http://localhost:8080/api',
		user:{
			id:'1',
			nickname:'Kuzma',
			avatar:'https://avatars2.githubusercontent.com/u/55436087?s=40&v=4'
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