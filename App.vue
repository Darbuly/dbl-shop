<script>
	/**
	 * vuex管理登陆状态
	 */
	import {
		mapMutations
	} from 'vuex';
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 1. 引用公共资源(common/stylus)中的全局UI库
@import "@/common/stylus/ui.styl"

// 2. 引用公共资源(common/stylus)中自定义svg-base64矢量图库】
@import "@/common/stylus/svg.styl"

// 3. 是引用公共资源(common/stylus)中的公共样式
@import "@/common/stylus/mixins.styl"


</style>
