<!-- mix-list-cell.vue -->
<template>
	<view class="content">
		<view class="mix-list-cell" :class="border" @click="eventClick" hover-class="cell-hover"  :hover-stay-time="50">
			<text
				v-if="icon"
				class="cell-icon iconfont"
				:style="[{
					color: iconColor,
				}]"
				:class="icon"
			></text>
			<text class="cell-tit clamp">{{title}}</text>
			<text v-if="tips" class="cell-tip">{{tips}}</text>
			<text class="cell-more iconfont"
				:class="typeList[navigateType]"
			></text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeList: {
					left: 'icon-zuo',
					right: 'icon-you',
					up: 'icon-shang',
					down: 'icon-xia'
				},
			}
		},
		props: {
			icon: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: '标题'
			},
			tips: {
				type: String,
				default: ''
			},
			navigateType: {
				type: String,
				default: 'right'
			},
			border: {
				type: String,
				default: 'b-b'
			},
			hoverClass: {
				type: String,
				default: 'cell-hover'
			},
			iconColor: {
				type: String,
				default: '#333'
			}
		},
		methods: {
			eventClick(){
				this.$emit('eventClick');
			}
		},
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	// 1. 引用公共资源(common/stylus)中自定义svg-base64矢量图库】
	@import "@/common/stylus/svg.styl"
	
	// 2. 是引用公共资源(common/stylus)中的公共样式
	@import "@/common/stylus/mixins.styl"
	
	.icon .mix-list-cell.b-b:after
		left 90upx
	.mix-list-cell
		display flex
		align-items baseline
		padding 20upx $page-row-spacing
		line-height 60upx
		position relative
		&.cell-hover
			background #fafafa
		&.b-b:after
			left 30upx
		.cell-icon
			align-self center
			width 56upx
			max-height 60upx
			font-size 38upx
		.cell-more
			align-self center
			font-size 30upx
			color $font-color-base
			margin-left $uni-spacing-row-sm
		.cell-tit
			flex 1
			font-size $font-base
			color $font-color-dark
			margin-right 10upx
		.cell-tip
			font-size $font-sm+2upx
			color $font-color-light
</style>
