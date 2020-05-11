/**
*	配置存储-v1
* 	0. 常规
* 	1. 调试类
* 	2. 性能类
* 	3. 请求类
* 	4. 缓存类
* 	5. 渲染类
*/
const UTILCONFIG = {
/**
 * ***************常规
 */
	UTILS_ROOT_PATH:'@/common/dblUtils/',
	ENAME:'uni-app',	//引擎名称
	DEBUG:true,	//是否开启调试模式
	BACKEND_URL:'https://api.mysmartsoft.com/minishop/v1/',	//后端接口定位
	BACKEND_LOGIN:'auth/thirdLogin',	//后端登录接口
	BACKEN_LOGOUT:'loginOut',
	TOKEN_PARAMS:{
		platform:1,	//后台的应用ID
		apply_id:1	//平台ID
	},
	LOGIN_LOCK:4,	//错误登录次数
/**
 * ***************调试类
 */
/**
 * ***************性能类
 */
/**
 * ***************请求类
 */
	TOKEN_API_METHOD_NO_USERINFO:'user.wxapplogin1',
/**
 * ***************缓存类
 */
	KEY_OF_TOKEN:'token_data',
	KEY_OF_USERINFO:'userInfo',	//用户信息缓存的key值
/**
 * ***************渲染类
 */

}
//=================================================
module.exports = {UTILCONFIG}
