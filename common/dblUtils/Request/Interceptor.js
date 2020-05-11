/**
 * 请求的res拦截器
 */

import {UTILCONFIG} from '../UtilConfig'
import {CONF} from './conf'
import {P,D,E} from '../Console/console'
import {sT} from '../Common/Common'

const SET = CONF.SET

/**
 * res拦截器封装-1
 * @param {Object}  proc	拦截处理对象
 * @return {Null}	执行一些东西
 */
const I = (proc)=>{
	P(`拦截器处理：code：${proc.response.data.code}，描述：${SET[proc.response.data.code].description}`)
	SET[proc.response.data.code].fun(proc)
}

module.exports = {
	I	//res拦截器封装
}