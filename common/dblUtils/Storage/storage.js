import {P,D,E} from '../Console/console'
/**
 * 基础-写缓存对接-v1.0
 * @param {String} key 键名，必须
 * @param {Object}	data 键值，必须 
 * @param {Boolean}  sync	是否异步执行 默认为false
 * @return {Boolean} 成功返回true,失败返回false
 */
const sS = (key,data,sync=false) => {
	if (!sync){
		try {
			uni.setStorageSync(key, data);
			return true
		} catch (e) {
			E(e)
			return false
		}
	}
	//异步写
	return new Promise((resolve,reject)=>{
		uni.setStorage({
			key,
			data,
			success:()=>{
				resolve(true)
			},
			fail: ()=>{
				reject(false)
			}
		});
	})
}

/**
 * 基础-读取缓存对接-1.1
 * @param {String} key 要删除的键名，必须
 * @param {Boolean}  sync	是否异步执行 默认为false
 * @return {Object} 成功返回{res:true,data}对象,失败返回{res:false,e}对象
 */
const rS = (key,sync=false) => {
	let res = {}
	if(!sync){
		try {
			let data = uni.getStorageSync(key)
			if('' == data){
				res = {res:false,data:null}
			}else{
				res = {res:true,data}
			}
			return res 
		} catch (e) {
			E(e)
			res = {res:false,e}
			return res 
		}
	}
	return new Promise((resolve,reject)=>{
		uni.getStorage({
			key,
			success: function (r) {
				res = {res:true,data:r.data}
				resolve(res)
			},
			fail:(e)=>{
				reject({res:false,data:null})
			}
		});
	})
}
/**
 * 基础-删除缓存对接-1.0
 * @param {String} key 要删除的键名，必须
 * @param {Boolean}  sync	是否异步执行 默认为false
 * @return {Boolean} 成功返回true,失败返回false
 */
const dS = (key,sync=false) => {
	if (!sync){
		//先判断是否存在
		if(!rS(key).res){
			return false
		}
		try {
			uni.removeStorageSync(key);
			return true
		} catch (e) {
			E(e)
			return false
		}
	}
	//异步写
	return new Promise((resolve,reject)=>{
		//先判断是否存在
		if(!rS(key).res){
			reject(false)
			return
		}
		uni.removeStorage({
			key,
			success:()=>{
				resolve(true)
			}
		});
	})
}

module.exports = {
	sS,	//基础-写缓存对接-1.0
	dS,	//基础-删除缓存对接-1.0
	rS//基础-读取缓存对接-0
}