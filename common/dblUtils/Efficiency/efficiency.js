

/**
 * 防抖函数-v0
 * @param {Function} func	要执行的函数镜像
 * @param {Number} wait	防抖间隔
 * return:{Function} 一个有防抖功能的新函数
 */
const debounce = function (func,wait){
	let timer
	return function () {
		if(timer) clearTimeout(timer)
		let callNow = !timer
		timer = setTimeout(()=>{
			timer = null
		},wait)
		if(callNow){func(arguments)}
	}
}

module.exports = {
	debounce //防抖函数
}