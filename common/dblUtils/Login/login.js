
import {UTILCONFIG} from '../UtilConfig'
import {P,D,E} from '../Console/console'
import {sT} from '../Common/Common'

import {updateUserInfo} from '../UserInfo/userinfo'
import {I} from '../Request/Interceptor'

/**
 * 登录封装-v1.1
 * 	只负责申请code，然后去后端拿token，拿到了token，如果发现授权了就顺便更新一下用户信息
 * @return：[Boolean] 登录成功与否
 */
const login = function (){
	//异步执行
	return new Promise((resolve,reject)=>{
		uni.login({
			success:(res)=>{
				P('成功获取code')
				let data = {
					code:res.code,
					...UTILCONFIG.TOKEN_PARAMS
				}
				uni.request({
					url:UTILCONFIG.BACKEND_URL+UTILCONFIG.BACKEND_LOGIN,
					data,
					method:'POST',
					success:(res)=>{
						P('成功获取token')
						I({//拦截器处理
							request:data,
							response:res,
							success:(resolve)=>{
								//把token写进缓存
								let save_data = {}
								save_data.token = res.data.data.token
								save_data.user_id = res.data.data.user_id
								save_data.third_id = res.data.data.third_id
								uni.setStorage({ 
									key:UTILCONFIG.KEY_OF_TOKEN,
									data:save_data
								})
								//如果是已经授权登录，就自动获取用户信息
								if(isAuthorize()) updateUserInfo()
								resolve(true)
							},
							sParams:resolve,
							fail:(resolve)=>{
								resolve(false)
							},
							fParams:resolve
						})
					},
					fail:(err)=>{
						P('获取token失败')
						E(err)
						resolve(false)
					}
				})
				
			},
			fail:(err)=>{
				P('无法获取code!')
				sT('无法连接网络')
				resolve(false)
			}
		})
	})

}

/**
 * 判断是否已经授权-v1
 * @return {Boolean} 
 */
const isAuthorize = ()=>{
	uni.getSetting({
		success:(res)=>{
			if(res.authSetting['scope.userInfo']){
				P('已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框')
				return true;
			}else{
				P('从未授权，无法获取用户信息,请通过按钮来授权登录')
				return false
			}
		}
	})
}
/**
 * 获取服务商信息-1
 * @param {String}  服务类型，如oauth是登录服务，share是分享服务
 * @return {Array}	服务商的数组
 */
const gP = (service='oauth')=>{
	return new Promise((resolve,reject)=>{
		uni.getProvider({
			service,
			success: function (res) {
				resolve(res.provider)
			},
			fail: function (err){
				reject(err)
			}
		})
	})

}
module.exports = {
	login,	//登录封装-1.1
	isAuthorize,	//判断是否已经授权
	gP	//获取服务商信息-1
}