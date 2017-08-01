---
layout: post
title:  "移动端的Canvas绘制可配置的转盘抽奖"
date:   2016-10-23 11:53:35 +0800
categories: JavaScript
---
## 简介

适用于移动端的Canvas绘制可配置的转盘抽奖
  

## 使用

### Browser

{% highlight html %}
<link rel="stylesheet" href="css/GB-canvas-turntable.css">
<script src="js/GB-canvas-turntable.js"></script>
{% endhighlight %}

### JS

{% highlight javascript %}
gbTurntable.init({
    id: 'turntable',
    config: function(callback){
        // 获取奖品信息
        callback && callback(['1元红包','2元红包','3元红包','4元红包','5元红包','6元红包']);    
    },
    getPrize: function(callback) {
        // 获取中奖信息
        var num = Math.random() * 6 >>> 0,   //奖品ID
            chances = num;  // 可抽奖次数
            callback && callback([num, chances]);   
    },
    gotBack: function(data) {
        alert('恭喜抽中' + data);
    }
});
{% endhighlight %}


### 演示

[http://blog.givebest.cn/GB-canvas-turntable.html](http://blog.givebest.cn/GB-canvas-turntable.html)


