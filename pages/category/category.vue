<!-- 分类路由 -->
<template>
<view class="content">
		<scroll-view scroll-y class="left-aside">
			<view v-for="item in flist" 
			:key="item.id" 
			class="f-item b-b" 
			:class="{active: item.id === currentId}"
			@click="tabtap(item)">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view scroll-with-animation scroll-y 
		class="right-aside" 
		@scroll="asideScroll"
		:scroll-top="tabScrollTop">
			<view v-for="item in slist"  
			:key="item.id" 
			class="s-list" 
			:id="'slist-'+item.id">
				<text class="s-item">{{item.name}}</text>
				<view class="t-list">
					<view @click="navToList(item.id, titem.id)" v-if="titem.pid === item.id" v-for="titem in tlist" class="t-item">
						<image :src="titem.picture"></image>
						<text>{{titem.name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				flist: [],
				slist: [],
				tlist: [],
			}
		},
		onLoad(){
			this.loadData()
		},
		methods: {
			/**
			 * 加载分类数据方法
			 */
			async loadData(){
				let list = await this.$tapi.json('cateList');
				//处理无限级分类堆
				list.forEach(item=>{
					if(!item.pid){//pid为空，是顶级分类
						this.flist.push(item);  
					}else if(!item.picture){
						this.slist.push(item); //没有图的是2级分类
					}else{
						this.tlist.push(item); //3级分类
					}
				}) 
			},
			/**
			 * 改变左边顶级分类
			 */
			tabtap(item){
				//如果高度尚未初始化
				if(!this.sizeCalcState){
					this.calcSize()
				}
				this.currentId = item.id
				let index = this.slist.findIndex(sitem=>sitem.pid === item.id)//找到二级分类的index
				this.tabScrollTop = this.slist[index].top
			},
			/**
			 * 初始化右边二级分类高度方法
			 */
			calcSize(){
				let h = 0;
				this.slist.forEach(item=>{
					let view = uni.createSelectorQuery().select("#slist-" + item.id);
					view.fields({	//获取节点的相关信息。
						size: true	//是否返回节点尺寸（width height）
					}, data => {
						item.top = h;	//写进当前item里的头高
						h += data.height;	//累计高度
						item.bottom = h;	//写进当前item里的尾高
					}).exec();	//执行所有的请求。
				})
				this.sizeCalcState = true;	//标记为已经初始化
			},
			/**
			 * 响应滚动事件
			 */
			asideScroll(e){
				if(!this.sizeCalcState){
					this.calcSize()
				}
				let scrollTop = e.detail.scrollTop
				let tabs = this.slist.filter(item=>item.top <= scrollTop).reverse();//如果到底了，反向就没有
				if(tabs.length > 0){
					this.currentId = tabs[0].pid;
				}
			},
			/**
			 * 跳转到某个四级分类
			 */
			navToList(sid,tid){
				uni.navigateTo({
					url: `/pages/product/list?fid=${this.currentId}&sid=${sid}&tid=${tid}`
				})
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
		height 100%
		background-color #f8f8f8
		display flex
	.left-aside 
		flex-shrink 0
		width 200rpx
		height 100%
		background-color #fff
	.f-item
		display flex
		align-items center
		justify-content center
		width 100%
		height 100rpx
		font-size 28rpx
		color $font-color-base
		position relative
		&.active
			color $base-color
			background #f8f8f8
			&:before
				content ''
				position absolute
				left 0
				top 50%
				transform translateY(-50%)
				height 36rpx
				width 8rpx
				background-color $base-color
				border-radius 0 4px 4px 0
				opacity .8
	.right-aside
		flex 1
		overflow hidden
		padding-left 20rpx
		.s-item
			display flex
			align-items center
			height 70rpx
			padding-top 8rpx
			font-size 28rpx
			color $font-color-dark
		.t-list
			display flex
			flex-wrap wrap
			width 100%
			background #fff
			padding-top 12rpx
			.t-item
				flex-shrink 0
				display flex
				justify-content center
				align-items center
				flex-direction column
				width 176rpx
				font-size 26rpx
				color #666
				padding-bottom 20rpx
				image
					width 140rpx
					height 140rpx
					background-color #D4D8DB
</style>
