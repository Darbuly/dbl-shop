<!--  -->
<template>
	<view>参数：{{status}}</view>
</template>

<script>
	export default {
		props:{
			status:{
				//上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
				type: String,
				default: 'more'
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
