var imgUrl = 'http://yun.ercmedia.cn/haiyang/public/images/img-weixin-share.jpg';
var lineLink = document.location.href;
var descContent = '';
var shareTitle = '史上最好玩的微信，可听可视可看可互动——找海阳玩儿';

function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
        "img_url": imgUrl,
        "img_width": "320",
        "img_height": "320",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        _report('send_msg', res.err_msg);
    });
}
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url": imgUrl,
        "img_width": "320",
        "img_height": "320",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        _report('timeline', res.err_msg);
    });
}
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
        "content": descContent,
        "url": lineLink,
    }, function(res) {
        _report('weibo', res.err_msg);
    });
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {

    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
        shareFriend();
    });

    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv){
        shareTimeline();
    });

    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function(argv){
        shareWeibo();
    });
}, false);