import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider;
			console.log('登录状态：登入',state.userInfo);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			console.log('登录状态：登出',state.userInfo);
		}
	},
	actions: {
	
	}
})

export default store
