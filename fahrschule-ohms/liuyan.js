document.writeln("<div class=\'contact-main container mt60 mb60\' id=\'liuyan\'>");
document.writeln("        <div class=\'contact-title mt60\'>");
document.writeln("            <strong>Drop us a message for any query</strong>");
document.writeln("        </div>");
document.writeln("        <div class=\'contact-form \'>");
document.writeln("            <form class=\'send\' id=\'Inquiry\' name=\'Inquiry\' method=\'post\' action=\'https://q.kssbchina.com/information/\' onsubmit=\'return doSubmits()\'>");
document.writeln("                <div class=\'input-panel\'>");
document.writeln("                <div class=\'me one\'>");
document.writeln("                    <input id=\'productname\' name=\'productname\' class=\'txt icon-text-pro\' placeholder=\'Product Name\' type=\'text\'>");
document.writeln("                </div>");
document.writeln("                <div class=\'me two\'>");
document.writeln("                    <input id=\'name\' name=\'name\' class=\'txt icon-text-user\' placeholder=\'Your Name\' type=\'text\'>");
document.writeln("                </div>");
document.writeln("                <div class=\'me three\'>");
document.writeln("                    <input id=\'email\' name=\'email\' class=\'txt icon-text-email\' placeholder=\'Your email(*)\' type=\'text\'>");
document.writeln("                </div>");
document.writeln("                <div class=\'me four\'>");
document.writeln("                    <input id=\'telephone\' name=\'telephone\' class=\'txt icon-text-tel\' placeholder=\'Your Phone or Whatsapp\' type=\'text\'>");
document.writeln("                </div>");
document.writeln("                </div>");
document.writeln("                <div class=\'me five\'>");
document.writeln("                    <textarea id=\'message\' class=\'textarea icon-text-message\' name=\'message\' placeholder=\'Equipment name, model, related issues(*)\'></textarea>");
document.writeln("                </div>");
document.writeln("                <input id=\'site_feedback\' type=\'hidden\' name=\'site_feedback\'>");
document.writeln("                <input id=\'from_way\' type=\'hidden\' name=\'from_way\'>");
document.writeln("                <input id=\'refer\' type=\'hidden\' name=\'refer\'>");
document.writeln("                <div class=\'clearfix\'> </div>");
document.writeln("                <div class=\'PorConSixXX\'><p><input type=\'checkbox\' class=\'choose_input\'><label></label></p>I accept the Data Protection Declaration</div>");
document.writeln("                <input id=\'button_sub\' class=\'btn-primary\' type=\'submit\' value=\'Send Now!\'>");
document.writeln("            </form>");
document.writeln("        </div>");
document.writeln("    </div>");







function doSubmits() {


    var stremail = document.getElementById("email");
    if (stremail.value == "") {
        stremail.style.backgroundColor = "#bbc0c6";
        alert('Please write down your correct Emai!');
        return false;
    }

    else {
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        isok = reg.test(stremail.value);
        if (!isok) {
            alert("The format of the e-mail is incorrect, please re-enter the e-mail！");
            return false;
        }
    }

    var strmessage = document.getElementById("message");
    if(strmessage.value==''){
        strmessage.style.backgroundColor = "#bbc0c6";
        alert("Please write down your  message!");
        return false;
    }

    if(strmessage.value.indexOf("http") != -1 || strmessage.value.indexOf("website") != -1 || strmessage.value.indexOf("misspelled") != -1 || strmessage.value.indexOf("www.") != -1 || strmessage.value.length >300){
        strmessage.style.backgroundColor = "#bbc0c6";
        alert("Please enter the correct content!");
        return false;
    }








    // 1.客户端浏览器时间
    var myDate = new Date();
    var datenow = myDate.toLocaleDateString() + "-" + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    //2. 随即字符串
    var str = ''; var length = 10;
    for (; str.length < length; str += Math.random().toString(36).substr(2));
    str = str.substr(0, length);

    //3.移动版
    var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
    var browser = navigator.userAgent.toLowerCase();
    var isMobile = "pc";
    for (var i = 0; i < mobileAgent.length; i++) {
        if (browser.indexOf(mobileAgent[i]) != -1) {
            isMobile = "m";
            break;
        }
    }

    window.document.Inquiry.site_feedback.value = str;
    window.document.Inquiry.from_way.value = "|" + isMobile + "|";
    window.document.Inquiry.refer.value = window.location.href + "?data=" + datenow + "&rnd=" + str + "&sys=" + isMobile;
    window.document.Inquiry.action = window.document.Inquiry.action + "?data=" + datenow + "&rnd=" + str + "&sys=" + isMobile;
    document.getElementById("button_sub").disabled = true;
    window.document.Inquiry.submit();

}