<!-- 首页 -->
<template>
	<view>
		<swiper class="swiper" indicator-dots="true" autoplay="true" :interval="2000" duration="500">
			<swiper-item>
				<image class="item" src="/static/temp/swiper01.jpg" lazy-load=true ></image>
			</swiper-item>
			<swiper-item>
				<image class="item" src="/static/temp/swiper01.jpg" lazy-load=true ></image>
			</swiper-item>
			<swiper-item>
				<image class="item" src="/static/temp/swiper01.jpg" lazy-load=true ></image>
			</swiper-item>
		</swiper>
		<view class="dial-4">
			<view class="item">
				<view class="iconfont iconmaidan"></view>
				<view class="title">买单</view>
			</view>
			<view class="item">
				<view class="iconfont iconchashuijian"></view>
				<view class="title">公司简介</view>
			</view>
			<view class="item">
				<view class="iconfont icontianchongxing-"></view>
				<view class="title">会员充值</view>
			</view>
			<view class="item">
				<view class="iconfont icondaohang"></view>
				<view class="title">导航到店</view>
			</view>
		</view>
		<view class="big-title">严守传统制茶工艺<view class="stamp">茶</view></view>
		<view class="content">
			<scroll-view class="discout" scroll-x="true">
				<view class="item">
					<view class="item-up">
						<view class="money">10</view><view class="title">元<br>优惠券</view>
					</view>
					<view class="btn">满300元使用</view>
				</view>
				<view class="item">
					<view class="item-up">
						<view class="money">10</view><view class="title">元<br>优惠券</view>
					</view>
					<view class="btn">满300元使用</view>
				</view>
				<view class="item">
					<view class="item-up">
						<view class="money">30</view><view class="title">元<br>优惠券</view>
					</view>
					<view class="btn">满500元使用</view>
				</view>
				<view class="item">
					<view class="item-up">
						<view class="money">50</view><view class="title">元<br>优惠券</view>
					</view>
					<view class="btn">满1000元使用</view>
				</view>
				<view class="item">
					<view class="item-up">
						<view class="money">10</view><view class="title">元<br>优惠券</view>
					</view>
					<view class="btn">满300元使用</view>
				</view>
			</scroll-view>
			<view class="produce-list">
				<view class="item">
					<image class="image" src="/static/temp/list-cover.jpg">	
					</image>
					<view class="text">
						<view class="title">传统手工大红袍</view>
						<view class="description">反复试茶，只为一份甘醇</view>
						<view class="merit iconfont icondian">甄选武夷山原料</view>
						<view class="merit iconfont icondian">口感纯正</view>
						<view class="btn">立即购买</view>
					</view>
				</view>
				<view class="item">
					<image class="image" src="/static/temp/list-cover.jpg">	
					</image>
					<view class="text">
						<view class="title">传统手工大红袍</view>
						<view class="description">反复试茶，只为一份甘醇</view>
						<view class="merit iconfont icondian">甄选武夷山原料</view>
						<view class="merit iconfont icondian">口感纯正</view>
						<view class="btn">立即购买</view>
					</view>
				</view>
				<view class="item">
					<image class="image" src="/static/temp/list-cover.jpg">	
					</image>
					<view class="text">
						<view class="title">传统手工大红袍</view>
						<view class="description">反复试茶，只为一份甘醇</view>
						<view class="merit iconfont icondian">甄选武夷山原料</view>
						<view class="merit iconfont icondian">口感纯正</view>
						<view class="btn">立即购买</view>
					</view>
				</view>
				<view class="item">
					<image class="image" src="/static/temp/list-cover.jpg">	
					</image>
					<view class="text">
						<view class="title">传统手工大红袍</view>
						<view class="description">反复试茶，只为一份甘醇</view>
						<view class="merit iconfont icondian">甄选武夷山原料</view>
						<view class="merit iconfont icondian">口感纯正</view>
						<view class="btn">立即购买</view>
					</view>
				</view>
			</view>
		</view>
		<view class="big-title2">老板推荐</view>
		<view class="content">
			<view class="produce-list2">
				<view class="item">
					<image src="/static/temp/list-big-cover.jpg"></image>
					<view class="title">
						传统手工岩茶
					</view>
					<view class="btn">
						立即抢购
					</view>
				</view>
				<view class="item">
					<image src="/static/temp/list-big-cover.jpg"></image>
					<view class="title">
						传统手工岩茶
					</view>
					<view class="btn">
						立即抢购
					</view>
				</view>
				<view class="item">
					<image src="/static/temp/list-big-cover.jpg"></image>
					<view class="title">
						传统手工岩茶
					</view>
					<view class="btn">
						立即抢购
					</view>
				</view>
				<view class="item">
					<image src="/static/temp/list-big-cover.jpg"></image>
					<view class="title">
						传统手工岩茶
					</view>
					<view class="btn">
						立即抢购
					</view>
				</view>
			</view>
		</view>
		<view class="big-title2">精品推荐</view>
		<view class="content">
			<view class="produce-list3">
				<view class="item">
					<image src="@/static/temp/list-sm-cover.jpg"></image>
					<view class="title">遇见果香肉桂</view>
					<view class="price">￥ 198.00</view>
				</view>
				<view class="item">
					<image src="@/static/temp/list-sm-cover.jpg"></image>
					<view class="title">遇见果香肉桂</view>
					<view class="price">￥ 198.00</view>
				</view>
				<view class="item">
					<image src="@/static/temp/list-sm-cover.jpg"></image>
					<view class="title">遇见果香肉桂</view>
					<view class="price">￥ 198.00</view>
				</view>
			</view>
		</view>
		<view class="big-title2">严守传统</view>
		<view class="content">
			<view class="produce-list4">
				<view class="item">
					<view class="border"></view>
					<image class="image" src="/static/temp/list-cover.jpg">	
					</image>
					<view class="text">
						<view class="title">传统手工大红袍</view>
						<view class="description">反复试茶，只为一份甘醇</view>
						<view class="merit iconfont icondian">甄选武夷山原料</view>
						<view class="merit iconfont icondian">口感纯正</view>
						<view class="btn">立即购买</view>
					</view>
				</view>
				<view class="item">
					<view class="border"></view>
					<image class="image" src="/static/temp/list-cover.jpg">	
					</image>
					<view class="text">
						<view class="title">传统手工大红袍</view>
						<view class="description">反复试茶，只为一份甘醇</view>
						<view class="merit iconfont icondian">甄选武夷山原料</view>
						<view class="merit iconfont icondian">口感纯正</view>
						<view class="btn">立即购买</view>
					</view>
				</view>
				<view class="item">
					<view class="border"></view>
					<image class="image" src="/static/temp/list-cover.jpg">	
					</image>
					<view class="text">
						<view class="title">传统手工大红袍</view>
						<view class="description">反复试茶，只为一份甘醇</view>
						<view class="merit iconfont icondian">甄选武夷山原料</view>
						<view class="merit iconfont icondian">口感纯正</view>
						<view class="btn">立即购买</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import test from '@/components/test.vue'
	export default {
		components:{test}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "@/common/stylus/mixins.styl"
	@import "@/static/svg.styl"
	@font-face {
	    font-family: xinwei;
	    src: url("@/static/font_family/xinwei.ttf")
	}
	.swiper
		position relative
		box-shadow 0rpx 6rpx 6rpx rgba(0,0,0,0.05)
		z-index 2
		.item
			width:750rpx;
			height:350.9358288770053rpx;
	.box-test
		top-border-1px($green)
		width:750rpx;
		height:750rpx;
		background-color $green;
	.dial-4
		display flex
		flex-direction row
		justify-content space-around
		background-color $bc
		.item
			margin 38rpx 0
			width 25%
			.iconfont
				width 100rpx
				height 100rpx
				margin 0 auto
				font-size 50rpx
				color #fff
				border-radius 50%
				text-align center
				line-height: 100rpx
			.iconchashuijian
				background-image linear-gradient(to right,#70d345,#5ebc44)
			.iconmaidan
				background-image linear-gradient(to right,#f8bb2f,#ffa801)
			.icontianchongxing-
				background-image linear-gradient(to right,#fb874a,#e47035)
			.icondaohang
				background-image linear-gradient(to right,#1d9eef,#0f79c5)
			.title
				padding-top 14rpx
				color $font-color
				font-size 24rpx
				text-align center
	.big-title
		font-family "华文新魏"
		background-image url($big-title) 
		background-size cover
		color $font-color
		width 100%
		height 152rpx
		text-align center
		font-size 50rpx
		line-height 152rpx
		font-weight bold
	.stamp
		display inline-block
		margin 0 20rpx
		background-image url($stamp)
		background-size 25rpx 48rpx
		width 25rpx
		height 45rpx
		font-size 22rpx
		color $bc
		line-height 45rpx
	.content
		width 100%
		background-color $bc2
		overflow hidden
	.discout
		margin 0 auto
		width $content-width
		height 243rpx
		white-space nowrap
		background-color $bc3
		.item
			margin 57rpx 0
			display inline-block
			width 33.3333333%
			.item-up
				width 174rpx
				margin 0 auto
				.money
					display inline-block
					font-size 64rpx
					font-weight bold
				.title
					display inline-block
					height 64rpx
					font-size 30rpx
					text-align center
			.btn
				background-color $font-color
				margin-top 23rpx
				margin-left auto
				margin-right auto
				width 174rpx
				height 38rpx
				border-radius 15rpx
				text-align center
				font-size 24rpx
				color #fff
				line-height 38rpx
	.produce-list
		width $content-width
		margin 0 auto
		margin-top 0
		margin-bottom 122rpx
		margin-left auto
		margin-right auto
		.item
			margin-top 52rpx
			width 100%
			height 300rpx
			.image
				display inline-block
				width 43.35%
				height 100%
				background-color #007AFF
				vertical-align top
			.text
				display inline-block
				width 56.65%
				height 100%
				background-color $bc
				overflow hidden
				.title
					width 360rpx
					margin 23rpx 14rpx auto auto
					font-family "华文新魏"
					color $font-color
					font-size 44rpx
					font-weight bold
				.description
					width 360rpx
					margin 0 auto
					color #3f3f3f
					font-size 30rpx
				.description:after
					display block
					width 360rpx
					margin 0 auto
					content "----------------------------"
					white-space nowrap
				.merit
					width 360rpx
					margin 0 18rpx auto auto
					font-size 24rpx
					color #3f3f3f
				.btn
					background-image url($btn)
					background-size 246rpx 73rpx
					margin-left 22rpx
					width 246rpx
					height 73rpx
					font-family "华文新魏"
					color #FFFFFF
					font-size 30rpx
					text-align center
					line-height 73rpx
		.item:nth-child(even)
			.image
				position relative
				left 56.65%
			.text
				position relative
				left -43.35%
	.big-title2
		font-family "华文新魏"
		background-image url($big-title) 
		background-size cover
		color #020202
		width 100%
		height 152rpx
		text-align center
		font-size 72rpx
		line-height 152rpx
		font-weight bolder
	.big-title2:before
		display inline-block
		width 65rpx
		height 44rpx
		content ""
		background-image url($cloud-left)
		background-size 65rpx 44rpx
	.big-title2:after
		display inline-block
		width 65rpx
		height 44rpx
		content ""
		background-image url($cloud-right)
		background-size 65rpx 44rpx
	.produce-list2
		width 672rpx
		margin 0 auto
		.item
			margin 0 auto 115rpx auto
			image
				width 100%
				height 580rpx
			.title
				margin 52rpx auto
				text-align center
				font-size 50rpx
				color $font-color
			.title:before
				display inline-block
				width 65rpx
				height 44rpx
				margin-right 10rpx
				content ""
				background-image url($cloud-right)
				background-size 65rpx 44rpx
			.title:after
				display inline-block
				width 65rpx
				height 44rpx
				margin-left 10rpx
				content ""
				background-image url($cloud-left)
				background-size 65rpx 44rpx
			.btn
				background-image url($btn)
				background-size 340rpx 95rpx
				width 340rpx
				height 95rpx
				margin 0 auto
				font-family "华文新魏"
				color #FFFFFF
				font-size 50rpx
				text-align center
				line-height 95rpx
	.produce-list3
		width 690rpx
		margin 0 auto
		.item
			display inline-block
			width 330rpx
			margin-right 10rpx
			margin-bottom 30rpx
			border 1rpx solid #d4d8db
			border-radius 4rpx
			background-color $bc4
			overflow hidden
			image
				width 100%
				height 327rpx
				border 0 0 1rpx 0 solid #d4d8db
			.title
				margin 25rpx auto 25rpx 19rpx
				font-size 28rpx
			.price
				margin 0 auto 40rpx 19rpx
				font-size 28rpx
		.item:nth-child(even)
			margin-left 10rpx
			margin-right 0
	.produce-list4
		width $content-width
		margin 0 auto
		margin-top 0
		margin-bottom 122rpx
		margin-left auto
		margin-right auto
		.item
			width 100%
			height 379rpx
			margin-top 52rpx
			.border
				position absolute
				background-image url($border1)
				background-size 362rpx 379rpx
				width 362rpx
				height 379rpx
				left 0rpx
				z-index 1
			image
				position relative
				display inline-block
				margin-top 25rpx
				width 43.35%
				height 302rpx
				vertical-align top
				border-radius 50%
				z-index 2
			.text
				display inline-block
				width 56.65%
				height 100%
				.title
					width 360rpx
					margin 23rpx 14rpx auto auto
					font-family "华文新魏"
					color $font-color
					font-size 44rpx
					font-weight bold
				.description
					width 360rpx
					margin 0 auto
					color #3f3f3f
					font-size 30rpx
				.description:after
					display block
					width 360rpx
					margin 0 auto
					content "----------------------------"
					white-space nowrap
				.merit
					width 360rpx
					margin 0 18rpx auto auto
					font-size 24rpx
					color #3f3f3f
				.btn
					background-image url($btn)
					background-size 246rpx 73rpx
					margin-left 22rpx
					width 246rpx
					height 73rpx
					font-family "华文新魏"
					color #FFFFFF
					font-size 30rpx
					text-align center
					line-height 73rpx
		.item:nth-child(even)
			image
				position relative
				left 56.65%
			.text
				position relative
				left -43.35%
			.border
				background-image url($border2)
				left auto
				right 0
</style>
