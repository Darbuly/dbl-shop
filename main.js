import Vue from 'vue'
import store from './store'
import App from './App'

import Json from './Json' //测试用数据

/**
 * 模拟异步请求数据
 */
const json = type => {
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type])
		}, 500)
	})
}
/**
 * 上一页
 */
const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2]
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$v
}
//测试用的api封装
Vue.prototype.$tapi = {json, prePage}
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
