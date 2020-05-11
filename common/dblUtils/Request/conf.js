/**
 * 请求模块的配置
 * 
 */
import {UTILCONFIG} from '../UtilConfig'
import {P,D,E} from '../Console/console'

const SET = {
	200:{
		description:'正常',
		fun:(proc)=>{
			proc.success?proc.success(proc.sParams):0
		}
	},
	204:{
		description:'正常，但空内容',
		fun:(proc)=>{
			E('返回正常，但空内容')
		}
	},
	400:{
		description:'带坏请求',
		fun:(proc)=>{
			P(proc.response.data.msg)
			proc.fail?proc.fail(proc.fParams):0
		}
	},
	422:{
		description:'请求参数错误或不完整',
		fun:(proc)=>{
			P(proc.response.data.msg)
			proc.fail?proc.fail(proc.fParams):0
		}
	},
}
const CONF = {
	SET
}

module.exports = {
	CONF
}