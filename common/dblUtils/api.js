/**
 * API接口模块
 */
import {UTILCONFIG} from './UtilConfig'
import {login} from './Login/login'
import {Rq} from './Request/Request'
import {cacheUserInfoUserInfo} from './UserInfo/userinfo'
//Rq写法：(url后台目录下的定位,method='POST',data,token=false,success,fail=null,complete=null)

const api = {}
//code登录
api.codeLogin=login
//授权用户信息到缓存
api.cacheUserInfo = cacheUserInfoUserInfo
//上传个人资料到后台
api.uploadUserInfo = (data,success=null)=>Rq('user/updateThirdInfo','POST',data,true,success)
//退出登录
api.logOut = (success=null)=>Rq('auth/loginOut','POST',null,true,success)

module.exports = {
	api
}