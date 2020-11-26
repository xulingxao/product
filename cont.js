$('.swt').click(function () {
    window.open('https://live.zoosnet.net/LR/Chatpre.aspx?id=LEK86479799&lng=en&p=' + encodeURIComponent(window.location.href), 'newwindow', 'height=750,width=1080,top=' + (screen.height - 750) / 2 + ',left=' + (screen.width - 1080) / 2 + ',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
});

// document.writeln('<div style="display: none"><script language="javascript" src="https://live.zoosnet.net/JS/LsJS.aspx?siteid=LEK86479799&float=1&lng=en"></script></div>');


var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
var browser = navigator.userAgent.toLowerCase();
var isMobile = "pc";
for (var i = 0; i < mobileAgent.length; i++) {
    if (browser.indexOf(mobileAgent[i]) != -1) {
        isMobile = "m";
        break;
    }
}

// 第二种：等待5秒商务通显示在浏览器中间
if (isMobile == 'm') {
    document.writeln('<div style="display: none"><script language="javascript" src="https://live.zoosnet.net/JS/LsJS.aspx?siteid=LEK86479799&float=1&lng=en"></script></div>');
} else {
    document.writeln("<div class=\'swt-box\'>");
    document.writeln("    <div class=\'con\' style=\'width: 800px; height:600px;position: relative\'>");
    document.writeln("        <div class=\'close\'></div>");
    document.writeln("        <iframe src=\'\' frameborder=\'0\' class=\'g-swt\'></iframe>");
    document.writeln("    </div>");
    document.writeln("</div>");
    document.writeln("<style>");
    document.writeln(".swt-box{position:fixed;z-index:99999;display:none;left:50%;top:50%;transform: translate(-50%, -50%);width: 800px;}");
    document.writeln(".swt-box .close{position:absolute;right:0;top:0;width:80px;height:54px;z-index:1;cursor:pointer}");
    document.writeln(".g-swt{display:block;width:100%;height:100%}");
    document.writeln("</style>");
    $(function () {
        showSwt();
        $(".close").click(function (event) {
            $(".swt-box").removeAttr('style');
            showSwt();
            return false;
        });
    })
    function showSwt() {
        setTimeout(function () {
            $(".swt-box").attr('style', 'display:block');
            $('.g-swt').attr('src', 'https://live.zoosnet.net/LR/Chatpre.aspx?id=LEK86479799&lng=en&p=' + encodeURIComponent(window.location.href));
        }, 20000)
    }
}



// // 第三种：等待5秒商务通显示在浏览器右下角
// if (isMobile == 'm') {
//     document.writeln('<div style="display: none"><script language="javascript" src="https://live.zoosnet.net/JS/LsJS.aspx?siteid=LEK86479799&float=1&lng=en"></script></div>');
// } else {
//     document.writeln("<div class=\'swt-box\'>");
//     document.writeln("    <div class=\'con\' style=\'width: 500px; height:400px;position: relative\'>");
//     document.writeln("        <div class=\'close\'></div>");
//     document.writeln("        <iframe src=\'\' frameborder=\'0\' class=\'g-swt\'></iframe>");
//     document.writeln("    </div>");
//     document.writeln("</div>");
//     document.writeln("<style>");
//     document.writeln(".swt-box{position:fixed;z-index:99999;display:none;right:0;bottom:0;}");
//     document.writeln(".swt-box .close{position:absolute;right:0;top:0;width:80px;height:54px;z-index:1;cursor:pointer}");
//     document.writeln(".g-swt{display:block;width:100%;height:100%}");
//     document.writeln("</style>");
//     $(function () {
//         showSwt();
//         $(".close").click(function (event) {
//             $(".swt-box").removeAttr('style');
//             showSwt();
//             return false;
//         });
//     })
//     function showSwt() {
//         setTimeout(function () {
//             $(".swt-box").attr('style', 'display:block');
//             $('.g-swt').attr('src', 'https://live.zoosnet.net/LR/Chatpre.aspx?id=LEK86479799&lng=en&p=' + encodeURIComponent(window.location.href));
//         }, 5000)
//     }
// }


$(function () {
    $("#scrollUp").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });
    $("#scrollUp1").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });
});


