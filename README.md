# dbl-shop
我的专属基于uniapp电商程序模板.


# 1. uniapp的环境设置 #
## 1.1 插件 ##
本项目使用的插件有如下，清自行在uniapp安装：  


## 1.2 小程序appid   ##
以微信小程序为例，请修改文件 ./manifest.json


    /* 小程序特有相关 */
    "mp-weixin" : {
    "appid" : "这里写您的appid",
    "setting" : {
    "urlCheck" : false
    },
    "usingComponents" : true
    },

