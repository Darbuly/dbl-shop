<script>
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

<style>
	/*引入 阿里图片库 离线*/
/* 	@font-face {
	  font-family: 'iconfont';  
	  src: url('static/font_ali/iconfont.eot');
	  src: url('static/font_ali/iconfont.eot?#iefix') format('embedded-opentype'),
	  url('static/font_ali/iconfont.woff2') format('woff2'),
	  url('static/font_ali/iconfont.woff') format('woff'),
	  url('static/font_ali/iconfont.ttf') format('truetype'),
	  url('static/font_ali/iconfont.svg#iconfont') format('svg');
	} */
	
	/*引入 阿里图片库 在线*/
	@font-face {
	  font-family: 'iconfont';  /* project id 1780043 */
	  src: url('https://at.alicdn.com/t/font_1780043_pk7wpwddwqh.eot');
	  src: url('https://at.alicdn.com/t/font_1780043_pk7wpwddwqh.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_1780043_pk7wpwddwqh.woff2') format('woff2'),
	  url('https://at.alicdn.com/t/font_1780043_pk7wpwddwqh.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_1780043_pk7wpwddwqh.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_1780043_pk7wpwddwqh.svg#iconfont') format('svg');
	}
	.iconfont {
	  font-family:"iconfont" !important;
	  font-size:100rpx;
	  color: orange;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	.iconai59:before {
	  content: "\e6b1";
	}
	*{
		background-color: #f5f9fa;;
	}
</style>
