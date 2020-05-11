<!-- 个人中心 -->
<template>
	<view>
		个人中心
		<button @click="login" >点击登录</button>
		<button open-type="getUserInfo" @getuserinfo="getUserInfo">授权登录</button>
		<button @click="test" >test</button>
		<button @click='logout'>退出登录</button>
	</view>
</template>

<script>
	import {UTILCONFIG} from '@/common/dblUtils/UtilConfig'
	import {api} from '@/common/dblUtils/api'
	import {
		sS,	
		dS,
		rS
	} from '@/common/dblUtils/Storage/storage'
	export default {
		methods:{
			async login(){
				let res =  await api.codeLogin()
				console.log(res)
			},
			getUserInfo(res){
				api.cacheUserInfo()
			},
			async test (){
				console.log('uploadUserInfo')
				let userInfo = rS(UTILCONFIG.KEY_OF_USERINFO).data.userInfo
				let data = {
					nickName:userInfo.nickName,
					avator:userInfo.avatarUrl,
					gender:userInfo.gender
					
				}
				let res = await api.uploadUserInfo(data)
				console.log(res)
			},
			async logout(){
				let res = await api.logOut()
				console.log(res)
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
