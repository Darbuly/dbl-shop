import {UTILCONFIG} from '../UtilConfig'


/**
 * 调试模式下的控制台输出-v1.2
 * @param {String} msg 要输出的调试信息
 * return:{Null}
 */
const P = (msg)=>{
	if(UTILCONFIG.DEBUG) {
		console.log(`${UTILCONFIG.ENAME}>> ${msg}`)
	}
	
}
/**
 * 控制台dump-1
 */
const D = (value)=>{
	P('dump>>'+value)
	console.log(value)
}

/**
 * 异常捕获-v1
 * @param {Object} e 异常信息对象
 * return:{Null}
 */
const E = (e)=>{
	P('捕获异常：')
	console.log(e)
}

module.exports = {
/****************console.js 控制台封装类-2 */
/**==================
*	1. 调试类对接
====================*/
	P,	//调试输出-1.2
	D,	//控制台dump-1
	E	//异常捕获-1
}