/**
 * 请求类封装
 * 
 */

import {UTILCONFIG} from '../UtilConfig'
import {P,D,E} from '../Console/console'
import {sT} from '../Common/Common'
import {I} from './Interceptor'
import {rS} from '../Storage/storage'
import {updateUserInfo} from '../UserInfo/userinfo'
import {login}	from '../Login/login'


var reqQueue = []
var reqLock = false
/**
 * 后台数据请求入口:该函数根据后端的设计不同而不同
 * @param {Sring}  url	请求路径
 * @param {Sring}  method	请求方法
 * @param {Object}  data	请求数据
 * @param {Boolean}  token	是否带token
 * @param {Function}  success	请求路径
 * @param {Function}  fail	请求路径
 * @param {Function}  complete	请求路径
 * @return {Null}	以{res,data}
 */
const Rq = (url,method='POST',data,token=false,success,fail=null,complete=null)=>{
	
	return new Promise((resolve,reject)=>{
		let r = {
			url:UTILCONFIG.BACKEND_URL+url,
			token,
			method,
			data,
			success:(res)=>{
				success&&success(res)
				let reslut = {res:true,data:res}
				resolve(reslut)
			},
			fail:(err)=>{
				fail&&fail(err)
				let reslut = {res:false,data:err}
				resolve(reslut)
			},
			complete:(res)=>{
				complete&&complete(res);
				let reslut = {res:true,data:res}
				resolve(reslut)
				}
			}
		request(r)
	})
}
/**
 * 后台数据统一请求:该函数根据后端的设计不同而不同
 * 请求体格式要求{url,header,token,method,data,success,fail,complete}
 * @param {Object}  r	请求对象体{url,header,token,method,data,success,fail,complete}
 * @return {Null}	以回调函数的形式执行反馈结果
 */
const request = (r)=>{
	//封装请求头
	let method = 'POST',header = {}
	if (r.method) {
		//如果有指定请求方法 get，post
		method = r.method
	}
	if(r.header){
		for (let i in r.header){	//单独遍历header
			header[i]=r.header[i]
		}
	}
	switch (method) {
		case 'POST':
			header['Accept'] = 'application/json'
			header['Content-Type'] = 'application/json'
			break
		case 'GET':
			header['Accept'] = 'application/json'
			header['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
			break
		default:
			header['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
			break
	}
	//如果是token的请求
	if(r.token){
		P('token请求')
		let token = rS(UTILCONFIG.KEY_OF_TOKEN).data.token
		if (!token) {
			p('从未登陆过，本地token缓存为空为空')
			//同步login获取token
			//如果没有请求锁
			if(!reqLock){
				//上锁
				reqLock = true
				if(login(false)){
					reqQueue.push(r)
					reqQueue.map(request)//重新队列执行请求
					reqQueue = []//情况请求队列
					//解锁
					reqLock = false
				}
			}
			//上锁了,就直接加入队列等待token获取成功
			reqQueue.push(r)
			return
		} else {
			P('缓存获取token成功')
			header["token"] = token
		}
		uni.request({
			url: r.url,
			method,
			header,
			data:{...r.data,...UTILCONFIG.TOKEN_PARAMS},
			success:(res)=>{
				P('后台成功返回数据！')
				I({
					request:r,
					response:res,
					success:(res)=>{
						r.success&&r.success(res)
					},
					sParams:res,
					fail:(res)=>{
						r.fail&&r.fail(res)
					},
					fParams:res
				})
			},
			fail:(err)=>{
				//uni.request请求失败
				r.fail&&r.fail(err)
			},
			complete:(res)=>{
				r.complete&&r.complete(res)
			}
		})
	}else{
		//非token请求
		P('非token请求')
		uni.request({
			url: r.url,
			method,
			header,
			data:r.data,
			success:(res)=>{
				I({
					request:r,
					response:res,
					success:(res)=>{
						r.success&&r.success(res)
					},
					sParams:res
				})
			},
			fail:(err)=>{
				//uni.request请求失败
				r.fail?r.fail(err):0
			},
			complete:(res)=>{
				r.complete?r.complete(res) : 0;
			}
		})
	}

}


module.exports = {
	Rq
}