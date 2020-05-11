/**
 * Util的公共封装
 */
import {UTILCONFIG} from '../UtilConfig'
/**
 * 信息框-showToast-v1
 * @param {String} 	msg 信息文本 默认值：'Sth. happened?'
 * return:{Null}
 */
const sT = (msg='Sth. happened?')=>{
	uni.showToast({
		title:msg,
		duration:UTILCONFIG.TOASTDUR
	})
}

module.exports = {
	sT	//信息框
}
