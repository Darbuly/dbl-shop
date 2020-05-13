<!-- 登录 -->
<template>
	<view class="container">
		<!-- #ifdef MP -->
		<view class="msg">你需要授权手机号码才能使用</view>
		<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">授权手机号</button>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.container
		padding-top 115rpx
		position:relative
		width 100vw
		height 100vh
		overflow hidden
		background #fff
	.msg
		padding-top 200rpx
		padding-bottom 300rpx
		text-align center
	.login-btn
		border-radius 80rpx
		margin 70rpx 50rpx
		font-size 35rpx
		background-color #007AFF
</style>
