
import {UTILCONFIG} from '../UtilConfig'
import {P,D,E} from '../Console/console'
import {
	sS,	//基础-写缓存对接-1.0
	dS,	//基础-删除缓存对接-1.0
	rS//基础-读取缓存对接-0
} from '../Storage/storage'
import {Rq} from '../Request/Request'
/**
 * 更新用户信息缓存-v1
 * @param {String} provider 服务商
 * @return {Promise} 异步返回，返回{res,data}，同时写进缓存
 */
const cacheUserInfo = function(provider='weixin'){
	let res
	return new Promise((resolve,reject)=>{
		uni.getUserInfo({
		  provider,
		  success: function (infoRes) {
			  //写缓存
			  if(sS(UTILCONFIG.KEY_OF_USERINFO,infoRes)){
				  res = {res:true,data:infoRes}  
				  resolve(res)
			  }else{
				  res = {res:false,data:'有数据但是没有写缓存失败'}
				  resolve(res)
			  }
		  },
		  fail:function (err){
			  //获取失败，先看看是不是没有授权
			  if(!isAuthorize()) {
				   res = {res:false,data:'没有授权'}
				   resolve(res)
			  }else{
				  E(err)
				  reject(err)
			  }
			
		  }
		});
	})
}



module.exports = {
	cacheUserInfo	//更新用户信息缓存
}