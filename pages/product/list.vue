<!-- 商品四级列表 -->
<template>
	<view class="container">
		<view class="navbar" >
			<view class="nav-item current" >
				综合排序
			</view>
			<view class="nav-item" >
				销量优先
			</view>
			<view class="nav-item">
				<text>价格</text>
				<view class="order-box">
					<text  class="iconfont icon-shangjiantou active"></text>
					<text  class="iconfont icon-shangjiantou xia"></text>
				</view>
			</view>
			<text class="cate-item iconfont icon-fenlei"></text>
		</view>
		<view class="goods-list">
			<view class="goods-item">
				<view class="image-wrapper">
					<image  mode="aspectFill"></image>
				</view>
				<text class="title clamp">商品名称</text>
				<view class="price-box">
					<text class="price">400</text>
					<text>已售 200</text>
				</view>
			</view>
			<view class="goods-item">
				<view class="image-wrapper">
					<image  mode="aspectFill"></image>
				</view>
				<text class="title clamp">商品名称</text>
				<view class="price-box">
					<text class="price">400</text>
					<text>已售 200</text>
				</view>
			</view>
			<view class="goods-item">
				<view class="image-wrapper">
					<image  mode="aspectFill"></image>
				</view>
				<text class="title clamp">商品名称</text>
				<view class="price-box">
					<text class="price">400</text>
					<text>已售 200</text>
				</view>
			</view>
			<view class="goods-item">
				<view class="image-wrapper">
					<image  mode="aspectFill"></image>
				</view>
				<text class="title clamp">商品名称</text>
				<view class="price-box">
					<text class="price">400</text>
					<text>已售 200</text>
				</view>
			</view>
			<view class="goods-item">
				<view class="image-wrapper">
					<image  mode="aspectFill"></image>
				</view>
				<text class="title clamp">商品名称</text>
				<view class="price-box">
					<text class="price">400</text>
					<text>已售 200</text>
				</view>
			</view>
			<view class="goods-item">
				<view class="image-wrapper">
					<image  mode="aspectFill"></image>
				</view>
				<text class="title clamp">商品名称</text>
				<view class="price-box">
					<text class="price">400</text>
					<text>已售 200</text>
				</view>
			</view>
			<view class="goods-item">
				<view class="image-wrapper">
					<image  mode="aspectFill"></image>
				</view>
				<text class="title clamp">商品名称</text>
				<view class="price-box">
					<text class="price">400</text>
					<text>已售 200</text>
				</view>
			</view>
			<view class="goods-item">
				<view class="image-wrapper">
					<image  mode="aspectFill"></image>
				</view>
				<text class="title clamp">商品名称</text>
				<view class="price-box">
					<text class="price">400</text>
					<text>已售 200</text>
				</view>
			</view>
		</view>
		<load-more :status="loadingType"></load-more>
		
		<view class="cate-mask show" 
		@click="toggleCateMask">
			<view class="cate-content">
				<scroll-view scroll-y class="cate-list">
					<view >
						<view class="cate-item b-b two">顶级分类</view>
						<view class="cate-item b-b" >
							二级分类
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import LoadMore from './loadMore/loadMore.vue';
	export default {
		data(){
			return {
				cateMaskState: 0, //分类面板展开状态
				headerPosition:"fixed",
				headerTop:"0px",
				loadingType: 'more', //加载更多状态
				filterIndex: 0, 
				cateId: 0, //已选三级分类id
				priceOrder: 0, //1 价格从低到高 2价格从高到低
				cateList: [],
				goodsList: []
			}
		},
		components:{
			LoadMore
		},
		onLoad(options){
			console.log(options)
		},
		methods:{
			/**
			 * 弹出分类窗口
			 */
			toggleCateMask(){
				
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	// 1. 引用公共资源(common/stylus)中自定义svg-base64矢量图库】
	@import "@/common/stylus/svg.styl"
	// 2. 是引用公共资源(common/stylus)中的公共样式
	@import "@/common/stylus/mixins.styl"

	
	page, 
	.content
		background $page-color-base
	.content
		padding-top 96rpx
	.navbar
		position fixed
		left 0
		top var(--window-top)//--window-top是CSS变量，在uniapp中记录着NavigationBar 的高度
		display flex
		width 100%
		height 80rpx
		background #fff
		box-shadow 0 2rpx 10rpx rgba(0,0,0,.06)
		z-index 10
		.nav-item
			flex 1
			display flex
			justify-content center
			align-items center
			height 100%
			font-size 30rpx
			color: $font-color-dark
			position relative
			&.current
				color $base-color
				&:after
					content ''
					position absolute
					left 50%
					bottom 0
					transform translateX(-50%)
					width 120rpx
					height 0
					border-bottom 4rpx solid $base-color
		.order-box
			display flex
			flex-direction column
			.iconfont
				display flex
				align-items center
				justify-content center
				width 30rpx
				height 14rpx
				line-height 1
				margin-left 4rpx
				font-size 26rpx
				color #888
				&.active
					color $base-color
			.xia
				transform scaleY(-1)
		.cate-item
			display flex
			justify-content center
			align-items center
			height 100%
			width 80rpx
			position relative
			font-size 44rpx
			&:after
				content: ''
				position: absolute
				left: 0
				top 50%
				transform translateY(-50%)
				border-left 1px solid #ddd
				width 0
				height 36rpx


	/* 商品列表 */
	.goods-list
		display flex
		flex-wrap wrap
		padding 0 30rpx
		background #fff
		.goods-item
			display flex
			flex-direction column
			width 48%
			padding-bottom 40rpx
			&:nth-child(2n+1)
				margin-right 4%//48*2+4=100
		.image-wrapper
			width 100%
			height 330rpx
			border-radius 3px
			overflow hidden
			image
				width 100%
				height 100%
				opacity 1
		.title
			font-size $font-lg
			color $font-color-dark
			line-height 80rpx
		.price-box
			display flex
			align-items center
			justify-content space-between
			padding-right 10rpx
			font-size 24rpx
			color $font-color-light
		.price
			font-size $font-lg
			color $uni-color-primary
			line-height 1
			&:before
				content '￥'
				font-size 26rpx
	/* 分类 */
	.cate-mask
		position fixed
		left 0
		top var(--window-top)
		bottom 0
		width 100%
		background rgba(0,0,0,0)
		z-index 95
		transition .3s
		.cate-content
			width 630rpx
			height 100%
			background #fff
			float right
			transform translateX(100%)
			transition: .3s
		&.none
			display none
		&.show
			background rgba(0,0,0,.4)
			.cate-content
				transform translateX(0)
	.cate-list
		display flex
		flex-direction column
		height 100%
		font-size 28rpx
		.cate-item
			display flex
			align-items center
			height 90rpx
			padding-left 30rpx
			color #555
			position relative
		.two
			height 64rpx
			color #303133
			font-size 30rpx
			background #f8f8f8
		.active
			color $base-color
</style>
