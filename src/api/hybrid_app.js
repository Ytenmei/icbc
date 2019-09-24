  
var hybrid_app ={}
var ua = navigator.userAgent
//判断e生活版本号
hybrid_app.elifeVer = function() {
      try {
          var version = navigator.userAgent.match(new RegExp('fullversion:(\\d\.\\d\.\\d\.\\d)'))
          if(version==undefined){
              version = navigator.userAgent.match(new RegExp('fullversion:(\\d\.\\d\.\\d)'))
          }
          version = (version == undefined ? "0" : version)
          version = parseInt(version[1].replace(/\./g, ''))
          version = (version==""?"1000":version)
          return version
      } catch (e) {
        return "1000"
      }
}
//判断是否是融e联 ios
hybrid_app.isRELIphone = function () {
	if (ua.indexOf('ICBCiPhoneBS')>-1) {
		return true
	}
	return false
}
//  判断是否是融e联 android
hybrid_app.isRELAndroid = function () {
	if (ua.indexOf('ICBCAndroidBS')>-1 ) { 
		return true
	}
	return false
}
/**
 * 检测当前浏览器是否为Android(Chrome)
 */
hybrid_app.isAndroid = function() {
	if (ua.indexOf('Android')>-1) {
		return true
	}
	return false
}
/**
 * 检测当前浏览器是否为iPhone(Safari)
 */
hybrid_app.isIPhone = function() {
	if (ua.indexOf('iPhone')>-1) {
		return true
	}
	return false
}
//android拦截native
hybrid_app.GetNativeFunctionAndroid = function(para) {
	setTimeout(function () {
        var res
        switch (para.keyword) {
            case 'open' :
                res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['open','" + para.callMethod + "']}")
                callLogin(res)
                break
            case 'showToolBar' :
                res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['showToolBar','" + para.isShow + "']}")
                break
            case 'back' :
                res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['back','']}")
                break
            case 'openGPS' :
                res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['openGPS','']}")
                break
            case 'closeGPS' :
                res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['closeGPS','']}")
                break
            case 'getMyLocation' :
	            res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['getMyLocation','" + para.getGps + "']}")
                getGps(res)
	            break
            case 'callPhoneNumber' :
	            res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['callPhoneNumber','" + para.tel + "']}")
	            break
            case 'share' :
                res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['share','" + para.shareInfo + "']}")
                break
            case 'openAddress' : 
                res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['openAddress','" + para.custId + "','" + para.appId + "']}")
                break
            case 'getDefaultAddress' : 
                res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['getDefaultAddress','" + para.custId + "','" + para.appId + "'],callBack:" + para.callback + "}")
                callBackAddress(res)
                break
            case 'getThirdScan' : 
                res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['getThirdScan','" + para.callback + "']}")
                thirdScanCallback(res)
                break
            case 'getThirdARScan' : 
                res = prompt('callNativeMethod', "{obj:Native,func:DataConfigServiceServer,args:['getThirdARScan','" + para.callback + "']}")
                thirdARScanCallback(res)
                break
        }
    })
}

//ios注册native
function connectWebViewJavascriptBridge(callback) {
    if(window.WebViewJavascriptBridge){
    	return callback(WebViewJavascriptBridge)
    }else{
    	document.addEventListener('WebViewJavascriptBridgeReady', function() {
            callback(WebViewJavascriptBridge)
        }, false)
    }
    if(window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
    window.WVJBCallbacks = [callback]
    var WVJBIframe=document.createElement('iFrame')
    WVJBIframe.style.display='none'
    WVJBIframe.src='wvjbscheme://__BRIDGE_LOADED__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function(){document.documentElement.removeChild(WVJBIframe)})

}
connectWebViewJavascriptBridge(function(bridge) {
    bridge.init()
    bridge.registerHandler("callback",callback)
})

var ICBCBridge = {
    callHandler: function(name, params, callback) {
        connectWebViewJavascriptBridge(function(bridge) {
            bridge.callHandler(name, params, callback)
        })
    },
    send: function(params, callback) {
        connectWebViewJavascriptBridge(function(bridge) {
            bridge.send(params, callback)
        })
    }
}
window.ICBCBridge = ICBCBridge

//中途登录
hybrid_app.merLogin = function(callMethod){
	//如果是安卓
	if(hybrid_app.isAndroid()){
		if(callMethod != null){
			if(hybrid_app.elifeVer() < '213') {
                Myutils.open(callMethod)
            } else {
                hybrid_app.GetNativeFunctionAndroid({'keyword': 'open', 'callMethod': callMethod})
            }
		}else{
			if(hybrid_app.elifeVer() < '213') {
                Myutils.open("callLogin")
            } else {
                hybrid_app.GetNativeFunctionAndroid({'keyword': 'open', 'callMethod': "callLogin"})
            }
		}
	}else{  //ios
		if(callMethod != null){
			 window.ICBCBridge.callHandler("Myutils.open",callMethod)
		}else{
			 window.ICBCBridge.callHandler("Myutils.open","callLogin")
		}
	}

}
//第三方显示或隐藏tabbar isShow:true显示tabbar 反之隐藏
hybrid_app.showToolBar = function(isShow){
	//如果是安卓
	if(hybrid_app.isAndroid()){
		if(hybrid_app.elifeVer() < '213') {
            Myutils.showToolBar(isShow)
        } else {
            hybrid_app.GetNativeFunctionAndroid({'keyword': 'showToolBar', 'isShow': isShow})
        }
	}else{  //ios
		window.ICBCBridge.callHandler("Myutils.showToolBar",isShow)
	}
}

//第三方返回上一级页面
hybrid_app.back = function(){
	//如果是安卓
	if(hybrid_app.isAndroid()){
		if(hybrid_app.elifeVer() < '213') {
            Myutils.back()
        } else {
            hybrid_app.GetNativeFunctionAndroid({'keyword': 'back'})
        }
	}else{  //ios
		 window.ICBCBridge.callHandler("Myutils.back")
	}
}
//第三方开启定位
hybrid_app.openGPS = function(){
	//如果是安卓
	if(hybrid_app.isAndroid()){
		if(hybrid_app.elifeVer() < '213') {
            Myutils.openGPS()
        } else {
            hybrid_app.GetNativeFunctionAndroid({'keyword': 'openGPS'})
        }
	}else{  //ios
		window.ICBCBridge.callHandler("Myutils.openGPS")
	}
}
//第三方关闭定位
hybrid_app.closeGPS = function(){
	//如果是安卓
	if(hybrid_app.isAndroid()){
		if(hybrid_app.elifeVer() < '213') {
            Myutils.closeGPS()
        } else {
            hybrid_app.GetNativeFunctionAndroid({'keyword': 'closeGPS'})
        }
	}else{  //ios
		window.ICBCBridge.callHandler("Myutils.closeGPS")
	}
}

//第三方获取定位  参数是回调的函数名的字符串
hybrid_app.getMyLocation = function(getGps){
	//如果是安卓
	if(hybrid_app.isAndroid()){
		if(getGps != null){
			if(hybrid_app.elifeVer() < '213') {
	            Myutils.getMyLocation(getGps)
	        } else {
	            hybrid_app.GetNativeFunctionAndroid({'keyword': 'getMyLocation', 'getGps': getGps})
	        }
		}else{
			if(hybrid_app.elifeVer() < '213') {
	            Myutils.getMyLocation("getGps")
	        } else {
	            hybrid_app.GetNativeFunctionAndroid({'keyword': 'getMyLocation', 'getGps': "getGps"})
	        }
		}
		
	}else{  //ios
		if(getGps != null){
			window.ICBCBridge.callHandler("Myutils.getMyLocation",getGps)
		}else{
			window.ICBCBridge.callHandler("Myutils.getMyLocation","getGps")
		}
	}
}


//第三方打电话功能  参数是电话号
hybrid_app.callPhoneNumber = function(tel){
	//如果是安卓
	if(hybrid_app.isAndroid()){
		if(hybrid_app.elifeVer() < '213') {
            Myutils.callPhoneNumber(tel)
        } else {
            hybrid_app.GetNativeFunctionAndroid({'keyword': 'callPhoneNumber', 'tel': tel})
        }
	}else{  //ios
		window.ICBCBridge.callHandler("Myutils.callPhoneNumber",tel)
	}
}

//base64转码（由于ios客户端对特殊字符拦截，故要转码后传值）
hybrid_app.base64Encode = function (str) {
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g, "\n")
        var utftext = ""
        for (var n = 0 ;n < string.length;n++) {
            var c = string.charCodeAt(n)
            if (c < 128) {
                utftext += String.fromCharCode(c)
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192)
                utftext += String.fromCharCode((c & 63) | 128)
            } else {
                utftext += String.fromCharCode((c >> 12) | 224)
                utftext += String.fromCharCode(((c >> 6) & 63) | 128)
                utftext += String.fromCharCode((c & 63) | 128)
            }
        }
        return utftext
    }
    
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    var output = ""
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4
    var i = 0
    str = _utf8_encode(str)
    while (i < str.length) {
        chr1 = str.charCodeAt(i++)
        chr2 = str.charCodeAt(i++)
        chr3 = str.charCodeAt(i++)
        enc1 = chr1 >> 2
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
        enc4 = chr3 & 63
        if (isNaN(chr2)) {
            enc3 = enc4 = 64
        } else if (isNaN(chr3)) {
            enc4 = 64
        }
        output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4)
    }
    return output
},
//分享
hybrid_app.share = function (shareInfo) {
    if (ICBCUtilTools.isAndroid()) {
        if(hybrid_app.elifeVer() < '213') {
            window.Myutils.share(shareInfo)
            return
        } else {
            hybrid_app.GetNativeFunctionAndroid({'keyword': 'share','shareInfo': shareInfo})
        }
    }else if(ICBCUtilTools.isiPhone()){
        //（ios需要将参数base64加密）
        window.ICBCBridge.callHandler("Myutils.share", hybrid_app.base64Encode(shareInfo))
    }
}
//分享方法调用示例
/*
  <div onclick="share()">分享</div>
  
  function share() {
    //调用分享交互需要传入的参数如下
    //pngUrl：分享后链接显示的图片地址
    var pngUrl = "https://122.19.157.9:443/filepath/elife/2018/12/31/15/cc91f9e05902461b83ff15dfda8fa9c3_s.gif"

    //shareUrl：分享后点击链接需要跳转的地址
    var shareUrl = "https://OFST-APP-GND.sdc.cs.icbc/OFSTCUSTH5/dist/#/business/index/02000015087"

    //title：分享后链接显示的标题
    var title = "特约商户支付专用01（修改）1111111111111111111111111"

    //content：分享后链接显示的内容
    var content = "4星级 4167256元/人 回龙观  汽车销售4S店/ 洗浴/  自助餐"
    
    //封装需要分享的对象
    var shareInfo = {
        PNGUrl: pngUrl,
        ShareUrl: shareUrl,
        Title: title,
        Content: content
    }
    // 将对象转为字符串
    shareInfo = JSON.stringify(shareInfo)

    var _jumpUtil = new jumpUtil()
    _jumpUtil.share(shareInfo)

}*/

//中途登录的回调示例，提供给第三方时，请删除方法体内容
function callLogin(param){
    var loginUrl = "merLogin.do?loginParams="+param
    $.ajax({
		type : "POST",
		url : loginUrl,
		dataType : 'json',
		async : false,
		success : function(msg) {
			$("#cust_id").text(msg.cust_id)
			$("#phone").text(msg.phone)
			
			if(null != msg.longitude && null != msg.latitude){
			$("#longitudeAndlatitude").text(
					msg.longitude + "," + msg.latitude)
			}
			
			$("#cisno").text(msg.cisno)
			$("#third_cisno").text(msg.third_cisno)
			$("#isNewUser").text(msg.isNewUser)
			$("#city_name").text(msg.city_name)
			$("#city_code").text(msg.city_code)
			$("#special").text(msg.special)
			$("#device_id").text(msg.device_id)
			$("#currentTimeMillis").text(msg.currentTimeMillis)
			
			$("#loginSuc").text("中途登录成功！")
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert($.parseXML(XMLHttpRequest) + "," + textStatus + ","
					+ errorThrown)
		}
	})
}

//获取定位信息的回调例，提供给第三方时，请删除方法体内容
//param位json格式，{"longitude":"","latitude":""},定位失败时，param为null,或""
function getGps(param) {
    if(param != null && param != ""){
   		$("#myLocal").text(param.longitude+","+param.latitude)
    }else{
   		$("#myLocal").text("定位获取失败！")
    }
}

//4月新增 1、获取默认地址(解密方式同中途登录) 2、打开管理收货地址页面 3、第三方唤起扫一扫
//获取默认地址回调，同中途登录，获取param值后做自有逻辑即可
function callBackAddress(param) {
    alert(param += '')
}
//第三方扫一扫回调，同中途登录，获取param值后做自有逻辑即可
function thirdScanCallback(param) {
    alert(param += '')
}
//第三方AR扫一扫回调，同中途登录，获取param值后做自有逻辑即可
function thirdARScanCallback(param) {
    alert(param += '')
}

//获取默认地址
hybrid_app.getDefaultAddress = function (custId, appId) {
    if (ICBCUtilTools.isAndroid()) {
        hybrid_app.GetNativeFunctionAndroid({'keyword': 'getDefaultAddress', 'custId': custId, 'appId': appId, 'callback': 'callBackAddress'})
    }else if(ICBCUtilTools.isiPhone()){
        var paraObj = {
            custId: custId,
            appId: appId,
            callback: 'callBackAddress'
        }
        paraObj = JSON.stringify(paraObj)
        window.ICBCBridge.callHandler("Myutils.getDefaultAddress",hybrid_app.base64Encode(paraObj))
    }
}
//打开管理收货地址页面
hybrid_app.openAddress = function (custId, appId) {
    if (ICBCUtilTools.isAndroid()) {
        hybrid_app.GetNativeFunctionAndroid({'keyword': 'openAddress', 'custId': custId, 'appId': appId})
    }else if(ICBCUtilTools.isiPhone()){
        var paraObj = {
            custId: custId,
            appId: appId
        }
        paraObj = JSON.stringify(paraObj)
        window.ICBCBridge.callHandler("Myutils.openAddress",hybrid_app.base64Encode(paraObj))
    }
}
//打开扫一扫
hybrid_app.getThirdScan = function () {
    if (ICBCUtilTools.isAndroid()) {
        hybrid_app.GetNativeFunctionAndroid({'keyword': 'getThirdScan', 'callback': "thirdScanCallback"})
    }else if(ICBCUtilTools.isiPhone()){
        window.WebViewJavascriptBridge.callHandler("Myutils.getThirdScan", "thirdScanCallback")
    }
}

//打开AR扫一扫
hybrid_app.getThirdARScan = function () {
    if (ICBCUtilTools.isAndroid()) {
        hybrid_app.GetNativeFunctionAndroid({'keyword': 'getThirdARScan', 'callback': "thirdARScanCallback"})
    }else if(ICBCUtilTools.isiPhone()){
        window.WebViewJavascriptBridge.callHandler("Myutils.getThirdARScan", "thirdARScanCallback")
    }
}
export default hybrid_app
