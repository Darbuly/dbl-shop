<!-- 商品四级列表 -->
<template>
	<view class="container">
		<view class="navbar" :style="{position:headerPosition,top:headerTop}">
			<view class="nav-item " :class="{current: filterIndex === 0}" @click="tabClick(0)">
				综合排序
			</view>
			<view class="nav-item" :class="{current: filterIndex === 1}" @click="tabClick(1)">
				销量优先
			</view>
			<view class="nav-item" :class="{current: filterIndex === 2}" @click="tabClick(2)">
				<text>价格</text>
				<view class="order-box">
					<text  class="iconfont icon-shangjiantou" :class="{active: priceOrder === 1 && filterIndex === 2}"></text>
					<text  class="iconfont icon-shangjiantou xia" :class="{active: priceOrder === 2 && filterIndex === 1}"></text>
				</view>
			</view>
			<text class="cate-item iconfont icon-fenlei" @click="toggleCateMask('show')"></text>
		</view>
		<view class="goods-list">
			<view class="goods-item"
			v-for="(item, index) in goodsList" :key="index"
			@click="navToDetailPage(item)"
			>
				<view class="image-wrapper">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.title}}</text>
				<view class="price-box">
					<text class="price">{{item.price}}</text>
					<text>已售 {{item.sales}}</text>
				</view>
			</view>
		</view>
		<load-more :status="loadingType"></load-more>
		
		<view class="cate-mask" 
		:class="cateMaskState===0 ? 'none' : cateMaskState===1 ? 'show' : ''"
		@click="toggleCateMask">
			<view class="cate-content">
				<scroll-view scroll-y class="cate-list">
					<view v-for="item in cateList" :key="item.id">
						<view class="cate-item b-b two">{{item.name}}</view>
						<view class="cate-item b-b" 
						v-for="tItem in item.child" :key="tItem.id" 
						:class="{active: tItem.id==cateId}"
						@click="changeCate(tItem)">
							{{tItem.name}}
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
				cateMaskState: 0, //分类面板展开状态,0关闭，1，2
				headerPosition:"fixed",//导航朗的定位方式
				headerTop:"0px",//导航栏的x坐标
				loadingType: 'more', //more:加载更多状态,nomore：已经没了，
				filterIndex: 0, //1指代销量降序，2指代价格排序（具体升降序由priceOrder决定）
				cateId: 0, //已选三级分类id
				priceOrder: 0, //1 价格升序 2价格降序
				cateList: [],//分类列表
				goodsList: []//商品列表
			}
		},
		components:{
			LoadMore
		},
		onLoad(options){
			// #ifdef H5
			//H5的导航高度计算
			this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight+'px';
			// #endif
			this.cateId = options.tid;
			this.loadCateList(options.fid,options.sid);
			this.loadData();
		},
		//下拉刷新
		onPullDownRefresh(){
			this.loadData('refresh');
		},
		//加载更多
		onReachBottom(){
			this.loadData();
		},
		methods:{
			/**
			 * 弹出分类窗口
			 */
			toggleCateMask(type){
				//防抖
				let timer = type === 'show' ? 10 : 300//show10ms,hidden300ms
				let	state = type === 'show' ? 1 : 0//0=hidden,1=show,2=等待
				this.cateMaskState = 2//只要你一直点，都会是等待状态，指导到了时钟点
				setTimeout(()=>{
					this.cateMaskState = state
				}, timer)
			},
			/**
			 * 加载分类列表
			 */
			async loadCateList(fid, sid){
				let list = await this.$tapi.json('cateList')
				//过得第二级
				let cateList = list.filter(item=>item.pid == fid)
				//封装第三级
				cateList.forEach(item=>{
					let tempList = list.filter(val=>val.pid == item.id)
					item.child = tempList;
				})
				this.cateList = cateList;
			},
			/**
			 * 加载数据
			 * @param {type}  加载数据类型，可以是add,refresh
			 * @param {loading}  是否附上了有加载状态，要么提示框，要么下拉刷新
			 */
			async loadData(type='add', loading){
				if(type === 'add'){
					if(this.loadingType === 'nomore'){
						return;//没有更多直接返回
					}
					this.loadingType = 'loading';//type为add时：堆积中状态
				}else{
					this.loadingType = 'more'//type为其他包括refresh时：还有更多状态
				}
				
				let goodsList = await this.$tapi.json('goodsList');
				if(type === 'refresh'){
					this.goodsList = [];//refresh：清空列表，之前堆积的length就为0
				}
				//筛选器逻辑
				if(this.filterIndex === 1){
					goodsList.sort((a,b)=>b.sales - a.sales)//b-a,销量降序
				}
				if(this.filterIndex === 2){
					goodsList.sort((a,b)=>{
						if(this.priceOrder == 1){
							return a.price - b.price;//a-b,价格升序
						}
						return b.price - a.price;//b-a,价格降序
					})
				}
				//组合商品列表
				this.goodsList = this.goodsList.concat(goodsList);
				
				//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
				this.loadingType  = this.goodsList.length > 20 ? 'nomore' : 'more';
				if(type === 'refresh'){
					if(loading == 1){
						uni.hideLoading()//refresh+加载状态取消
					}else{
						uni.stopPullDownRefresh();//refresh+下拉刷星状态取消
					}
				}
			},
			/**
			 * 改变分类
			 */
			changeCate(item){
				this.cateId = item.id//先修改决定当前商品列表的cateId
				this.toggleCateMask()//隐藏
				uni.pageScrollTo({//归顶
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			/**
			 * 筛选点击 - 仅仅是改变状态filterIndex、priceOrder重新获取数据
			 * @param {Object} index 筛选类型，0综合，1销量，2价格
			 */
			tabClick(index){
				if(this.filterIndex === index && index !== 2){
					return//如果当前的筛选是1不变，就不动
				}
				this.filterIndex = index;//更换筛选类
				if(index === 2){
					this.priceOrder = this.priceOrder === 1 ? 2: 1//点一下价格就切换升降序
				}else{
					this.priceOrder = 0//否则价格不理会
				}
				uni.pageScrollTo({//自动置顶
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);//带加载状态的刷新数据
				uni.showLoading({
					title: '正在加载'
				})
			},
			/**
			 * 点进商品详情页
			 */
			navToDetailPage(item){
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
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
	.container
		background $page-color-base
	.container
		padding-top 96rpx
	.navbar
		position fixed
		left 0
		top var(--window-top)//--window-top是CSS变量，在uniapp中记录着NavigationBar 的高度，尽在小程序中有效，H5需要计算法
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
