// GB-Message.js
// (c) 2016-2016 givebest(givenlovs@msn.com)

/**
* GBMessage
* @class gbmsg
* @see https://coding.net/u/givebest/p/GB-Message/git
* @author givenlovs@msn.com
**/

/*
使用：
gbmsg.success('恭喜', '您的提供已经成功。');
gbmsg.failure('抱歉', '网络异常，请重试。');
gbmsg.info('警告', '您确定要删除这个吗？');
gbmsg.waitting('加载中，请稍候。');
gbmsg.loading('加载中...');
gbmsg.loading();
gbmsg.frown('很遗憾', '亲未能抽中大奖');
gbmsg.smile('恭喜', '小手一点，大奖到手');
*/


var GBMessage = (function(){

	var domBody = document.body,
		overlay,   // 遮罩层
		dialog;    // 信息层

	function init(){
		var eleDiv = document.createElement('div');
		eleDiv.id = 'GBMsg';
		eleDiv.className = 'gbmsg-overlay';
		eleDiv.innerHTML = '<div class="gbmsg-dialog"></div>';
		domBody.appendChild(eleDiv);

		overlay = document.getElementById('GBMsg');
		dialog = GBMsg.firstElementChild || GBMsg.children[0];
	}

	function showDialog(title, msg, opts){
		var _this = this,
			title = title,
			msg = msg,
			opts = opts,
			optsTime = opts.timeout || 1;
			html = [],
			htmlContainer = '',
			timeoutId = null;

		html.push('<div class="gbmsg-dialog-icon">');
		html.push('<i class="' + opts.iconClass + '"></i>');
		html.push('</div>');

		// msg为空，移除title，msg展示title内容
/*		!!msg ? 
			html.push('<div class="gbmsg-dialog-container"><h5 class="gbmsg-dialog-title">' + title + '</h5>') :
			msg = title;*/
		if(!!msg){
			html.push('<div class="gbmsg-dialog-container">');
			html.push('<h5 class="gbmsg-dialog-title">' + title + '</h5>')	
		}else{
			msg = title;
			htmlContainer = '<div class="gbmsg-dialog-container">';
		}

		// msg依然为空，移除msg，只展示icon
		!!msg ?
			html.push( htmlContainer + '<div class="gbmsg-dialog-content">' + msg + '</div>') :
			'';

		html.push('</div></div>');

		dialog.innerHTML = html.join('');	
		overlay.style.display = 'block';

		console.log(optsTime)

		if(!!optsTime && optsTime < 100){
			clearTimeout && clearTimeout(timeoutId);
			timeoutId = setTimeout(function(){
				hide();	
				clearTimeout = null;
			}, optsTime * 1000);
		}
	}

	function hideDialog(){
		overlay.style.display = 'none';	
	}

	// success
	function success(title, msg){
		showDialog(title, msg, {
			'iconClass': 'icono-checkCircle'
		});	
	}

	// failure
	function failure(title, msg){
		showDialog(title, msg, {
			'iconClass': 'icono-crossCircle'
		});
	}

	// info
	function info(title, msg){
		showDialog(title, msg, {
			'iconClass': 'icono-exclamationCircle'
		});
	}

	// waitting
	function waitting(title, msg){
		showDialog(title, msg, {
			'iconClass': 'icono-clock',
			'timeout': 100
		});
	}

	// loading
	function loading(title, msg){
		showDialog(title, msg, {
			'iconClass': 'icono-reset',
			'timeout': 100
		});
	}

	// frown
	function frown(title, msg){
		showDialog(title, msg, {
			'iconClass': 'icono-frown'
		});
	}

	// smile
	function smile(title, msg){
		showDialog(title, msg, {
			'iconClass': 'icono-smile'
		});
	}

	// hide
	function hide(){
		hideDialog();
	}

	// 初始化
	init();

	return {
		success: success,
		failure: failure,
		info: info,
		waitting: waitting,
		loading: loading,
		frown: frown,
		smile: smile
	}

}());

window.gbmsg = gbmsg = window.GBMessage;























// Polyfill
/*if(!Object.create){
	Object.create = function(o){
		function F(){};
		F.prototype = o;
		return new F();
	}
}*/