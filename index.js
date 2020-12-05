// top栏的问候
function getTimeGreat() {
    var h = (new Date()).getHours();
    if (h >= 10 && h < 12)
        return "上午好";
    if (h >= 13 && h < 18)
        return "下午好";
    if (h >= 12 && h < 13)
        return "中午好";
    if (h >= 18 && h < 22)
        return "晚上好";
    if (h >= 22 && h <= 24 || h >= 0 && h < 6)
        return "深夜好";
    if (h >= 6 && h < 10)
        return "早上好";
}
//页面指定标签内容模糊查询，感谢“一个人乐的小兔子”
function myfunction() {
    var input, filter, ul, li, a, img; //定义查询的元素内容
    slid = $("#list-cp");//获取产品名称盒子
    slide = $("#slide");
    filter = slide.val().toUpperCase(); //将字符串中每个字符转换成大写
    li = $("#list>li");
    $(li).each(function (i) {
        var a = $(this).find("a");
        if (a.html().toUpperCase().indexOf(filter) > -1) {
            $(this).css("display", ""); //显示这个盒子
            slid.css("display", "");
        } else {
            $(this).css("display", "none");
            // slid.css("display", "none");//查出后隐藏产品名称盒子
        }
    });
}
// 页面的时间
$(function () {
    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var week = myDate.getDay();
    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    console.log(year, mon, date, weeks[week])
    $("#time").html(year + "年" + mon + "月" + date + "日" + weeks[week]);
    $("#now-year").html(year + "年" + mon + "月" + date + "日");
})
window.onload = function () {
    var timer = setInterval(mytime, 1000)
}
function mytime() {
    var a = new Date();
    var f = a.getHours(); //获取当前小时数(0-23)
    var g = a.getMinutes(); //获取当前分钟数(0-59)
    var s = a.getSeconds(); //获取当前秒
    con.innerHTML = (f + "时" + g + "分" + s + "秒");
}
//底部本站运行XX天
function runtime() {
    // 初始时间，日/月/年 时:分:秒
    X = new Date("11/28/2020 00:00:00");
    Y = new Date();
    T = (Y.getTime() - X.getTime());
    M = 24 * 60 * 60 * 1000;
    a = T / M;
    A = Math.floor(a);
    b = (a - A) * 24;
    B = Math.floor(b);
    c = (b - B) * 60;
    C = Math.floor((b - B) * 60);
    D = Math.floor((c - C) * 60);
}
setInterval(runtime, 1000); runtime();

//TOP返回顶部 底部
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.gongyong').fadeIn(500);
        } else {
            $('.gongyong').fadeOut(500);
        }
    });
    $('.top a').click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 0);
    });
});
//如果页面下滑则top隐藏
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {//如果下滑≥300px
            $('.top-bar').css("display", "none"); //则隐藏.top-bar元素
            $('.top-dh').css("top", "0"); //则设置.top-dh元素的top值
        } else { //否则
            $('.top-bar').css("display", "");//否则此元素显示
            $('.top-dh').css("top", "30px");//否则此元素top设置为30px
        }
    });
});
//--------------------------------分界线-----------------------------------
//产品资费列表
//p_name: 产品标题
//p_word: 产品搜索关键字
var list1 = [{
    p_id: 1,
    p_name: "腾讯王卡",
    p_word: "腾讯王卡大王卡天王卡地王卡",
    P_img: "http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEAZ6YorouSiOVWm3IT8k4Dr1L.q7iU89nr07yo6oJn.5P2MSt.vrc7icCvgQcI03j5dGeRdfirxlSvP2z9bu358!/r"
},
{
    p_id: 2,
    p_name: "大王超级会员卡",
    p_word: "大王超级会员卡",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEJon*qfVrzDpMp1V*PKkWgnDv.1KXaVJD.RRqkViUlmt2OCZgjB*qp*TMJew5RIeTY6kRl5HXYi2iqgFN9a3ehs!/r "
},
{
    p_id: 3,
    p_name: "王卡亲情卡",
    p_word: "王卡亲情卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3A4AmuGdwwCi9wLXOJ9TkADW12fCqZkAGkGQZD5lpiMQJ3AWT4jh8WF13V7oV*RhhQW1k.0BT7oU8Si7TrXX*C4!/r "
},
{
    p_id: 4,
    p_name: "腾讯王卡-优教",
    p_word: "腾讯王卡优教",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEOjSMrhCyZ2H5BGVQy89Ja1EIvUGPjv1PHIm8sxUJRtHaGzLvBkDMO1lwBhKgSOz*IYrASyQ2cPNfS4RRknUrvg!/r "
},
{
    p_id: 5,
    p_name: "腾讯王卡5G",
    p_word: "腾讯王卡5G",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEDULJpOvED0Ctl.1RJ3WKSDKTIsOWp5mgOmAydPY1HyrmRlpJ5E6tVFkQtlHRThTyAuGIeuvVBH3XTl9KKFcwuo!/r "
},
// {
//     p_id: 6,
//     p_name: "惠联卡-王卡版",
//     p_word: "惠联卡王卡版",
//     P_img: " "
// },
// {
//     p_id: 7,
//     p_name: "团团卡-王卡版",
//     p_word: "团团卡王卡版",
//     P_img: " "
// },
// {
//     p_id: 8,
//     p_name: "微信商家卡",
//     p_word: "微信商家卡",
//     P_img: " "
// },
// {
//     p_id: 9,
//     p_name: "小蓝王卡",
//     p_word: "小蓝王卡",
//     P_img: " "
// },
{
    p_id: 10,
    p_name: "王卡亲情卡5G版",
    p_word: "王卡亲情卡5G版",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEIpff*Os52xScrTTcvn7*.wuTBp4GHd*ciGQph*QzuszbSO2nWN14M3pxZP7SWC6eGDGmqrGoCTuVhb8lK1iN54!/r "
},
{
    p_id: 11,
    p_name: "超级会员黄金版",
    p_word: "超级会员黄金版超会",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3K8lg5SfEwmDxH7Oph5somo6gyzmcxU4tSTvFC7YECDITDaP6Q376*cFbx1K8uV8lBBaMYwB8MjVY6tZhU24o.U!/r "
},
{
    p_id: 12,
    p_name: "阿里宝卡",
    p_word: "阿里宝卡",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEAmgiSEDV5bv36JwFpaGvrmlb*ezd6qtrmLAlovqTqv1wfsERsNjJNb40Ua22O.jwRWtO1oVW4JZ65jl15hkVb4!/r "
},
{
    p_id: 13,
    p_name: "口碑宝卡",
    p_word: "口碑宝卡",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEFEZk.1MVxo0XGUx6ylVbfPlhAXL43HHmHKTulBUbDjFJdNU7W5Imf0WYK7.1o5qEAPxb3rCyGX6sNJgBlW5vA8!/r "
},
{
    p_id: 14,
    p_name: "菜鸟宝卡",
    p_word: "菜鸟宝卡",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEHz1rrkEOXIC5DOYNFWdCbHrqAJQ8y7nPYSPbYUewGnXB6QJi0VEAq420443p2M0R7ndDZGnFpQxOYzQuxkVf7w!/r "
},
{
    p_id: 15,
    p_name: "阿里亲情卡",
    p_word: "阿里亲情卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEPMjP0amuP*EG.35JLkkLRald6adhEZpmtJuqZQ1L1lGxas4N4cjT3m3n8qmw0pXWEPbW6Y6ATcsqB6xoCimke0!/r "
},
{
    p_id: 16,
    p_name: "钉钉宝卡",
    p_word: "钉钉宝卡",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrENpTuHNDQYHRSpPHrQVhcaFVmfNAnE0ukzBiWI7tUsZPQituZHdjii8vKHp9PU1x0I*Hdpi*f6t*TQrIf8z288k!/r "
},
{
    p_id: 17,
    p_name: "蚂蚁宝卡",
    p_word: "蚂蚁宝卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEHJSzYUUnZYn78g972jiRdFHaHnP4675y10yRI6ginNrSBPsaGzAJvZ5X3hC1U80sOsx92Qvfww2lhOgOgOGOvE!/r "
},
{
    p_id: 18,
    p_name: "阿里宝卡直播版",
    p_word: "阿里宝卡直播版",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEDmfin8y193TBeQ.9I6Me4JFgbt9Vru6Dwhanvd2qZ.Q1xV2KzKWESmEu.7dJT9*oRw3D2.VIdaE87dt3JpyeLw!/r "
},
{
    p_id: 19,
    p_name: "阿里宝卡(新)",
    p_word: "新阿里宝卡新",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEJ1ZFGh*YBY45Xt0e6GbTF1jsPFGH9lS6v5mw*ZHcV669XNsr5EUA8BmkcVyfXvOCGetj.hPs9CFSc49rgP6FK4!/r "
},
{
    p_id: 20,
    p_name: "惠联卡-阿里版",
    p_word: "惠联卡阿里版",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEF56M6ASU4l06lVuEnuZ.p5t1lcrmJ5CRzFQoXvyaLWH5Y9keP*QxAZhfj8VvVV1TzxFScZYzw9fZcvc7slnSJg!/r "
},
{
    p_id: 21,
    p_name: "抖音流量卡",
    p_word: "抖音流量卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEDBANfB4nikvZuTakuBoJc*9gfCRfITSQEKyYl1sVcCsThtOVdbh*PzdwEh64eQGgqOzSkf4k5wEgdHCh03q6k0!/r "
},
{
    p_id: 22,
    p_name: "V粉卡",
    p_word: "V粉卡",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEKsZAIjfjgTPXjEsRc*c*.SUBBH3g.KwZEEsWWLJTus8lQ6myeBYb96txVI0Oj5HTsllC9yny4ibfatJYhyIe9I!/r "
},
{
    p_id: 23,
    p_name: "米粉卡",
    p_word: "米粉卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEK1SghzI3KEmZzQWLOiKIqidYmYpxg0Tei2jI8MMWMWrdOmj5lI9qDndFBM.ahDNs7GIG3YP8MsWjMld9mEJOOY!/r "
},
{
    p_id: 24,
    p_name: "天神卡",
    p_word: "天神卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEBRH1JpRbfbsyIuzB9B86TiAg3I.2DQmHJIRrgMhQox66a33wSdi5GrMRh*DwTGtyTnSbt6ZvhEytiXSQ*aisDU!/r "
},
{
    p_id: 25,
    p_name: "懂我卡畅享版",
    p_word: "懂我卡畅享版",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEG4FaV1OU3*UgGuQJFWSWIMsM*vZFg0lrECz*JdBLMDC*We.eDZEClurdZRT9VnBHx*w*HSqouddWbLgL2h*s40!/r "
},
{
    p_id: 26,
    p_name: "星芒卡",
    p_word: "星芒卡",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEDpvrsXNDr2Da*C9KhIRsTqRvqT*rvPg.F8wgh3NJ1zm*3Ewojz0sNTCJn1P3MiAnUYiMOGl6ycbvAP03uwjN8I!/r "
},
{
    p_id: 27,
    p_name: "导学易学卡",
    p_word: "导学易学卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEOGl7cx3rEsf8116s1xGiDRpa0XVpEtYiqvUVHUKSkn6.TZ9nBhxY91Q7kZIYWnrhd1E7EUxXJPSOYSOXXRm4nI!/r "
},
{
    p_id: 28,
    p_name: "畅爽冰激凌5G",
    p_word: "畅爽冰激凌5G",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3P58fHaRHPjd9TekjgkeJ6PxlC5mUQBUq5uYc.dQnHydp6NJY3zyOWu0ETOWi83NtB0miDZM2Oe8SCYALLcYrLU!/r "
},
{
    p_id: 29,
    p_name: "女王卡",
    p_word: "女王卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEO0V7IgjQSiAcivOzfKOCdz6yIYUkg7Zw9z3*IcJJRZpxU3RFSitsFx2gNY5ejHgNNw24MRv5bZs8gmH2Oh2N9M!/r "
},
{
    p_id: 30,
    p_name: "畅听王卡[听障人士]",
    p_word: "畅听王卡听障人士",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrECMUPA4TZhVvlc.670YOSVfAHhI*nOMDRxPZepdSHriqiZpoqlefo2a9Vi*Lbf8r0n9Dcn*Ch16*lm7ASTFWrcU!/r "
},
{
    p_id: 31,
    p_name: "新滴滴橙卡",
    p_word: "新滴滴橙卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEHFM7F29qH4TKh2N5h70tsBAJE7T4LOZR4iUcYpB0wOZvkN3zVzFSAAGeP2IPzfPrk1oGSY9X9sNV9XfsuhCjfw!/r "
},
{
    p_id: 32,
    p_name: "薇娅女人卡",
    p_word: "薇娅女人卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEPEOIDdnKZ0YWCjl4cm7u0aRHBHafFDgyEgmSgJiwNXk547E7IKoaAbuF5hJ8M5TbFGobWFuaCrs42sVJDFUQEI!/r "
},
{
    p_id: 33,
    p_name: "天地盘卡",
    p_word: "天地盘卡天盘地盘",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEJ1xp0KL63otWPZZl8*bMrIXkdXE9oe4nosFk8atjkeltZit2DiZx*uQTWyzeoNCLCKv0ZV0RkiM6WsP.Q.icj8!/r "
},
{
    p_id: 34,
    p_name: "山水盘卡",
    p_word: "山水盘卡山盘水盘",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEEV.x4sq1euCOcWRT*JXbiQN1auwavuI766b5zO2cte.njtu2yvKNtH9bqgmEPddo.*BUHFYiATqLHzC0.f7qH4!/r "
},
// {
//     p_id: 35,
//     p_name: "天网卡",
//     p_word: "天网卡",
//     P_img: " "
// },
{
    p_id: 36,
    p_name: "大乐卡",
    p_word: "大乐卡乐享",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEHOPXAtQilXTCs2VqnE5DL6TvY*Pk*hecUNzNSF.hFKyMWwnNJzLGuvWyZNnuIX3a*UaiMhpmyry5dl0HFQdL2w!/r "
},
{
    p_id: 37,
    p_name: "滴滴王卡",
    p_word: "滴滴王卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEJVqx5TF*eQpCSLiY4CYNgAnGSA6Y6VRwLvJXp7tgugq1f.4*VCrfAQIFdxBZRHkiTB1PQEn6EWfQqJs7rAM*pQ!/r "
},
{
    p_id: 38,
    p_name: "蜂鸟卡",
    p_word: "蜂鸟卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEFxVIIAXubS9.TlSq8*yvro.VXcOx8i5Pmkh0aAjU9IYdVg2auKtvHcitzaiTOYAJZqUiZlXCEP64KIZMhLZQWw!/r "
},
// {
//     p_id: 39,
//     p_name: "完美卡",
//     p_word: "完美卡",
//     P_img: " "
// },
{
    p_id: 40,
    p_name: "哔哩哔哩卡",
    p_word: "哔哩哔哩卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEOFXCCQgwpWgE5Ps3EwR0Ss6Zl2Mokw98uEVvP7Sf9A9GlAJU9F3n7lDbGDRFsX2onRgq.6WV7.jfAOl8M.ir8A!/r "
},
{
    p_id: 41,
    p_name: "百度云圣卡",
    p_word: "百度云圣卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEGLwAGJlQ2Y7Urkw8Iw8tJOcaKg9CTmiIDAFXtk0vTiL77In4hDO6yHhXUbRSYuntl*lPPw6bUrpfVGr0YuLhFc!/r "
},
{
    p_id: 42,
    p_name: "网易小乐卡",
    p_word: "网易小乐卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEO7tI*siRi..zzx*4zah1FppEp1rgDbebr.6ChVTPFlko7gvjghgpFXUS53qVvs4isOIsaIh*2vPflj.omtfe*E!/r "
},
{
    p_id: 43,
    p_name: "连尚万能卡",
    p_word: "连尚万能卡",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEDLVUscR6mrRW5mPX4oIJUystoNvkSLY8zI0suzs2gw*Xol81fOxFNKgMQIYrkEJT1e3Nc1RvzRR8ClwNKNkNig!/r "
},
{
    p_id: 44,
    p_name: "中铁王卡",
    p_word: "中铁王卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEFQM9hqRMujfeBanTml37JyZJjDM706w*86kOCqqenyQUyX8zvcF802Tqw5RBkeepHqINRV0*VuF9S4AEVoW0I0!/r "
},
{
    p_id: 45,
    p_name: "梦想e卡",
    p_word: "梦想e卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEJhMbxCO2P.Fi3FsRqURyONTgQVW.FgGAAheyDhO.sCNw4JCwWN0DbTarOD6bW6fNaD96Sh7VZh6P5JZoREoE70!/r "
},
{
    p_id: 46,
    p_name: "微博V+卡",
    p_word: "微博V+卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEKCBoXeHa972NiOIZ7qzlsyTP9tIaTqrtq2fWefxchsxRIywi9bf4z*VhAmm4kew6vw4BMsS3HV8c.JZk30giYU!/r "
},
{
    p_id: 47,
    p_name: "歪卡",
    p_word: "大歪卡小歪卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3F.2aek5U1JtP.iicnwQTtGApSzu1sOxC2qcu6l6.cGsSuMvkJqAQcvKvxWBNSRcsK.tCqC0A7USBSx*xlTUxc8!/r "
},
{
    p_id: 48,
    p_name: "软易钻卡",
    p_word: "软易钻卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEDDythw2Oe6EOOh6abazC*53iMN.*GxXyU7ewJLQh2UaabpUgFqP1QDmtdF.cfY4I4BcNAb7hHA1NUEYMW8COAQ!/r "
},
{
    p_id: 49,
    p_name: "福享卡",
    p_word: "福享卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEKOe9NIZ9hZyDHDdTlAiQxxYtVXTTnoBBJYlP4Gs3ec808c68IAD8nv5FB16sc2qfiyPsDVITp5J8xCBsc*kZRk!/r "
},
// {
//     p_id: 50,
//     p_name: "大小怪卡",
//     p_word: "大小怪卡",
//     P_img: " "
// },
{
    p_id: 51,
    p_name: "菁锐卡",
    p_word: "菁锐卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEASN9cVNz5vBnxEFMS6xcXjGmXjnmi32h36I8MY2sKmEByx2SaTw72l1DWm5SB8kYLuAbdLWynBLftcQe5wLeYY!/r "
},
{
    p_id: 52,
    p_name: "网龙神卡",
    p_word: "网龙神卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEA.fXyQ.5wC9*RrSkmQ0RuaWbAY.Pv7naGxjYIi2SCXjE8VwMj8x56vJXK.x2caBZcKMBWBkmRXGkfj98NtTCJU!/r "
},
{
    p_id: 53,
    p_name: "流邦卡",
    p_word: "流邦卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrENLgqQVmOBZ15XE1PhEUnoV8H7sEQ4EnrMIQwRXvAtYLwSwRcA3M48RuPr6YykeIDzRz5T5FUNr*gmD8O9OvTHk!/r "
},
{
    p_id: 54,
    p_name: "国开大学卡",
    p_word: "国开大学卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEJkWxmBlPnWSOWZHEJdLwlPXGPktWK8d6gCa0VzqYleilnhuiie2Jg531J*B5mnkUBJovLoIEQhEzmp1qx*HeDU!/r "
},
{
    p_id: 55,
    p_name: "智农卡",
    p_word: "智农卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEK5c6TiYzP0MBpn.wONsU1fFEa0KDsWLShZpZb4TYnUIXr8Pe0qxwGGnpel0ft6Kl2ZpqSSmNUlEXoNwkbzFER0!/r "
},
{
    p_id: 56 ,
    p_name: "吴晓波学习卡" ,
    p_word: "吴晓波学习卡" ,
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEKduXhS4VawU.q1WyfJ34j93Rziwd3rRDcB00rc9W.cFza4QcYf*lwq1YxP6J8nWyipr3XLr3Rljo*FLYBA8ulg!/r "
},
{
    p_id: 57,
    p_name: "招联牛卡",
    p_word: "招联牛卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEDg7rbZN8eYDkb8UAkueOT8SyZWonI5mgxKq7nlwp8GZbMeb9SqPHEv*a7Mmen7ZO4o37njzLuJzeRv3TW961g8!/r "
},
{
    p_id: 58,
    p_name: "春雨健康卡",
    p_word: "春雨健康卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrECNqVNEtYsVmAYGRtE8nZ6QWIl.0h7un24WZq*tI8xrCop.O07r*uHN8Ar5F*Z7lM94duj0KmcVOSGI5KBVCpdw!/r "
},
{
    p_id: 59,
    p_name: "守望先锋卡",
    p_word: "守望先锋卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3EqrrqJZBCpexvnJ2E8dPmZl21C93b.126ZYiPVcPE4hqZKof*sdrsPIgndvi9AZV4DvTfIObV99CmZmnYhmMQ0!/r "
},
{
    p_id: 60,
    p_name: "亲子卡基础版",
    p_word: "亲子卡基础版",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEDEjtBh1BPo4nbfU192oiv6egoj3XXfsTdpg0IMkQdCioI1C3PrXKr04AYRHdEEF9B63k0eBoq6hUWkc7NC62GM!/r "
},
{
    p_id: 61,
    p_name: "亲子卡（副卡）",
    p_word: "亲子卡副卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3KBBZHsaVYS7SfwNCAWJ5KFg9rElLUdhpR0g6FfzX*qf77pdp3awrzmckR6sWu647K48YbLgelEElknyOSYvYng!/r "
},
{
    p_id: 62,
    p_name: "天网卡Plus",
    p_word: "天网卡Plus",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3EkUI7zXOH9AbjwaH8g2n9ePC6XWoag.ZkCahQZwF4CqgYSV.vSVC3XevHAWVZy.WFSM*SAPHJIlv0AFLaTZdeY!/r "
},
{
    p_id: 63,
    p_name: "腾讯视频卡Plus",
    p_word: "腾讯视频卡Plus",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3Mw9XssLgCGlF96A8yz325Z9Bai9ioNlwIV*yca5vM1PEVRzKb6H59qvycOo4YHOfUW2*BfIPBKKokr*YMv0PLM!/r "
},
{
    p_id: 64,
    p_name: "网剧卡",
    p_word: "网剧卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3E56aeDxAx567MteN1ws85BlG9H0JVRpuJBZNMS9GvNpSY5NqS1C5QfD.RC93ExZV2nFkelae0Ajlm3fIdSLaGA!/r "
},
{
    p_id: 65,
    p_name: "招行招卡",
    p_word: "招行招卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3MO6yQC3p5YRbxJXN69kT0RlLIC1MArJjr1JQaC8BH5jivx*DWGTdBpxogR9n5uZcozFPQDC5BiOApNt3RDj1UQ!/r "
},
// {
//     p_id: 66,
//     p_name: "鹿晗相伴卡",
//     p_word: "鹿晗相伴卡",
//     P_img: " "
// },
{
    p_id: 67,
    p_name: "孝心卡基础版",
    p_word: "孝心卡基础版",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEKUuTZiC1FKfmIK9j99pDge9aeYLKw0ZJ.boxWlZLCzAulVP1WJJaGkkwjp0yIXWmQ*kDOHFA3*6oLmYzE6pczU!/r "
},
{
    p_id: 68,
    p_name: "驿卡",
    p_word: "小驿大驿卡",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEGl.GkUx7933txuTlUW64k47K7DLyIyW6eU2IUFgRz6pLmZWdqXVvo9yhU7UFs6qVzqnvJScYQ33NueeXJyDF0s!/r "
},
{
    p_id: 69,
    p_name: "游戏王卡",
    p_word: "游戏王卡",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEDMlVROHKMgQqgwH44XSTMZO19kuVcDT3U5MUO77W0bBXDdoyqczeCVRo9SdIHNlXoNkBnh66UG1XQaFqzqsMDE!/r "
},
// {
//     p_id: 70,
//     p_name: "游戏王卡日租版",
//     p_word: "游戏王卡日租版",
//     // P_img: " "
// },
{
    p_id: 71,
    p_name: "芝士卡",
    p_word: "芝士卡",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrELeIoqhjkp6IEYtTD8K4Mvm*73nRhMmiVnJd*ln7BBLolNJxG2KK9v*qMrb.Qb83lLQdAxzGMtlUk2XpZa0dO5c!/r "
},
{
    p_id: 72,
    p_name: "陌陌神卡",
    p_word: "陌陌神卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrECqM74vwemU*s3ut9IZ3AsK*LedLYT*aPhI1xwHf68HsDEtdvqWN1gwvfIG2KQ6SDcm*WjtdztRCT0Erd6kqECw!/r "
},
{
    p_id: 73,
    p_name: "视频橙卡",
    p_word: "视频橙卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEHIXdJ5e8GFvGj4AaZixCoAYnmGC5DdwYg7Prw0FHPmtOlUsC4DNaTDGRJXq6bvsKjqa.wPL6VX22h.AwLXTnlY!/r "
},
{
    p_id: 74,
    p_name: "爱奇艺畅看卡",
    p_word: "爱奇艺畅看卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEJNTKKn4knlNJhtV5ojheQt8qg6LrP8eNPTWQWRhqxi6ZuWzUQIgOnL1ob8wQD7F7mrJKF77qicQB5hsMYdM1aI!/r "
},
{
    p_id: 75,
    p_name: "王卡骑手版",
    p_word: "王卡骑手版",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEM4hBKc95aU.6cnnJYZQWSBqbbT6WNxDtZMx3cdFqt2IBSkuUl2OZLd9gfuF24elWIdYE6tsPeHqX6hBamPgPBk!/r "
}

];
//--------------------------------分界线-----------------------------------
//产品标识列表
var list2 = [{
    p_id: 1,
    p_name: "超跑牛卡P1卡",
    p_word: "超跑牛卡P1卡",
    P_img: "http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3J73hiYGTlcXRTAPBAKXQ8i0LvUnlD1nbZ4bpJ63i*ZOMgbNkrOhXNoR7X0qNkjmIvv4qafHSXTu3yKgMWfulus!/r"
},
{
    p_id: 2,
    p_name: "百果园王卡",
    p_word: "百果园王卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3JEv7LxdTrlQfDEf0YgSY4LkM.zNBg9hlQXHWd9.RW.NevRqrfwNd7.NrmTMoBz06YKj79*kOf4e7X8aBD9M4S8!/r "
},
{
    p_id: 3,
    p_name: "视频类会员",
    p_word: "12个月视频类会员24",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3CwNJNFNXMxjiGg.7Qse9C8LZBNPVpqUjq8xAA.msLr*kitlr8zmauykpGzfw1EGrIz163ZZjRHIIoj0r2X8wUQ!/r "
},
{
    p_id: 4,
    p_name: "春节优酷VIP",
    p_word: "春节优酷VIP",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3HfW6dMwOlYo3IMpq5mAvQK.FOP00qO2d3mdhy4upJXFmDsDqT00KLZtMz.dsXWWwzOgCrVTQ.Sif023bpzbeUI!/r "
},
{
    p_id: 5,
    p_name: "抖音春节50元话费",
    p_word: "抖音春节50元话费",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3JazaUKkWI5KdVcPsWwIhD.hagNCX3k6GJbtj.hA8HTbfMnW*jkS8ZFL5d2ziUAzLXsDNwpPjoOCx8sZk5GLjag!/r "
},
{
    p_id: 6,
    p_name: "领50元话费",
    p_word: "领50元话费",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEL7m2csrsBg9o99eDXxof8RGrmiVqSJeR4yz4rduQG1UXiBEEqk9QmANFXFUy75iL6llOoZKkqWVeiIaFvNROAY!/r "
},
{
    p_id: 7,
    p_name: "快手卡限时2400",
    p_word: "快手卡限时2400",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3A4nYEsCti*VTtYjGsilK8PSnjrviJNJCdDi1wNKrP**fhHR0Gbw9AUSCZES7v3643cHGzKd0GktK9zJccJ5usc!/r "
},
{
    p_id: 8,
    p_name: "三国杀权益",
    p_word: "三国杀权益",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrENlnpz2TFjmGYqaCo6KZdk8J0SpVrR5zYSACLT.3*eGd2v8gniOHrxe.9b*bTMazLsSDi4*hwV0egZsF3UGp6M4!/r",
},
{
    p_id: 9,
    p_name: "王卡-不首冲",
    p_word: "王卡不首冲",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEEC6yhUqKefIKHtJMI0E0PVXuCT5FH1OZFC7yQc4aGFj48q0aiQcD0OA2nqm7ofeARCEi0akbDmhxA6d*KcKenI!/r "
},
{
    p_id: 10,
    p_name: "天神-不首冲",
    p_word: "天神不首冲",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3NdX3hI93hNo8KI3IgZrzKZPdyjaGSE*fn8tkBEjocsOH6fLO433IEfD7eblHDyUfxv9UcbkwXZ1qIfHjbwOmTU!/r "
},
{
    p_id: 11,
    p_name: "大王超会",
    p_word: "大王超会",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/TmEUgtj9EK6.7V8ajmQrEFLe7oF*KxlYLJarK9l9Lt38GKggtOknfJhGr3XnpmiwEpVxfUv5CBmc6lwp*Xp.iK73xx.5QO10v46ydafl*5s!/r "
},
{
    p_id: 12,
    p_name: "送豪华绿钻",
    p_word: "送豪华绿钻",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/TmEUgtj9EK6.7V8ajmQrEOiZIUkccCTbb1s4HFHcJCDrhNQiXGGZ4wWVZYXUngwQdryW.DXxbB1Ra5*GjEJGTiiaw7j7qV5ylZCZYhHtM7c!/r "
},
{
    p_id: 13,
    p_name: "QQ音乐推广",
    p_word: "QQ音乐推广",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3Kgf0cKVWXUxRWAFTOWpcmiiM1ILwUy6*Zs19R5O4qljuAU.TBbfkyeawymaMof4XJW9rRShOjplWbESkKsXjPc!/r "
},
{
    p_id: 14,
    p_name: "送酷狗VIP",
    p_word: "送酷狗VIP",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3L*rpXguf9uFEiN.qJbDKD9qRJPGO*1DbCInBOHqRWTss5uR.5BiFt3GbBU*YlTpjZumwbDh4MzZ7xSIZ.uesCs!/r "
},
{
    p_id: 15,
    p_name: "送QQ超会",
    p_word: "送QQ超会",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3H4S*HIUpLDjPe7z75vwYErOS05uYKfQhjNk5S86mQnbJHgGP2AakPmMx6.*ofUu1uFXl5SBca9KuXfRqrNdZDI!/r "
},
{
    p_id: 16,
    p_name: "超级会员黄金版",
    p_word: "超级会员黄金版",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/TmEUgtj9EK6.7V8ajmQrEHgVSo5yjmLQ65ovxWStXV7aCHXUHBgq.vpnhQsAB3UUONhv..dGoI4CY7Ds7a4EmsSeUlZj3WjnoK46jQLNvKM!/r "
},
{
    p_id: 17,
    p_name: "超级会员全家桶",
    p_word: "超级会员全家桶",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3JUukdQvYhuynYW9io*Mosxa.6uiNe.ptu5HXAfVbCygZ0avHKsPRiwyde4GjIjhZvFecTxspjcuhzUQwHYBl0w!/r "
},
{
    p_id: 18,
    p_name: "5G超级会员黄金版",
    p_word: "5G超级会员黄金版",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3KzgyRbStrtDS.TtMfuy*v6Maz0K1BRcuExl662B.p3npJb1HEVtt6w.EnEylrxRxMDzBBTYuUCWKXNd*MxeuUI!/r "
},
{
    p_id: 19,
    p_name: "含100元礼包",
    p_word: "含100元礼包",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3KMsf635V2jtKjIqYw6*Z83WvHtH8NXEAYdvm2eMZxKS8Frea4jPERWqdtRwqOoUVKQxV18rlzaaBP5u82qG*Ms!/r "
},
{
    p_id: 20,
    p_name: "腾讯视频VIP",
    p_word: "腾讯视频VIP",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3MI7VHKuCkKsHVpeiAmNddiVlGSl9xXfNB*1GYdQW9bEAEIisEETmMtHoO7EWzJhGkt8tq2dNN3T615k4H6CsG0!/r "
},
{
    p_id: 21,
    p_name: "分期乐活动",
    p_word: "分期乐活动",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3O03qSQqcnCriOrPoZuL0OIcTvxzpZHoFaNe*utiUzO1pefFU8Y7RoD3gjN4KeA0UOF01ctHsBGLZJYa0lVXC9E!/r "
},
{
    p_id: 22,
    p_name: "首充送微云超级会员",
    p_word: "首充送微云超级会员",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3P5x9iDxyjJKx1Wa3exZ5RFTFX5fBvVwJ55weyVsiGNY8P0K*5wDuop4NdoMPZPotysikDIguKfgTAxH0Zv8fAU!/r "
},
{
    p_id: 23,
    p_name: "锦江专享权益活动",
    p_word: "锦江专享权益活动",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3PATuXh.PLchl7LhcIm2AwP1kHmebqPkgd8Oq3v6UEgwo21mTpNltJuUCGJS0si43D*1yLmyXUKMj10BHMBYUw0!/r "
},
{
    p_id: 24,
    p_name: "领3个月腾讯视频VIP",
    p_word: "领3个月腾讯视频VIP",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3D7Yh1EH.k*wwChsT.TVsWgslPB2FPPNoSkqwSgtfOeyXNznToTuiGUB7vjnZk70hejxkNa3q8QxWuWJURNxzfU!/r "
},
{
    p_id: 25,
    p_name: "尊享权益包（黄金版）",
    p_word: "尊享权益包黄金版",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEF0OKrfs8FW7X9AwZvlVYQrYBJjM5nz3VRJxtgAPGbDlR51GL2w1jfUp9Ki1z6jpHwkHSRjpm7u.E4VxPFK7b2E!/r "
},
{
    p_id: 26,
    p_name: "12个月腾讯视频VIP",
    p_word: "12个月腾讯视频VIP",
    P_img: " https://pic.downk.cc/item/5eaa5dc2c2a9a83be508eeaf.png "
},
{
    p_id: 27,
    p_name: "QQ会员（鲜花）",
    p_word: "QQ会员鲜花",
    P_img: " https://pic.downk.cc/item/5eaa5dc2c2a9a83be508eeb1.png "
},
{
    p_id: 28,
    p_name: "QQ会员3个月",
    p_word: "QQ会员3个月",
    P_img: " https://pic.downk.cc/item/5eaa6f53c2a9a83be5145950.png "
},
{
    p_id: 29,
    p_name: "快手卡享手游加速",
    p_word: "快手卡享手游加速",
    P_img: " https://pic.downk.cc/item/5eabe880c2a9a83be5563d2d.png "
},
{
    p_id: 30,
    p_name: "QQ超级会员6个月",
    p_word: "QQ超级会员6个月",
    P_img: " https://pic.downk.cc/item/5ebcc65fc2a9a83be51205f2.png "
},
{
    p_id: 31,
    p_name: "互联网权益N选一",
    p_word: "互联网权益N选一",
    P_img: " https://pic.downk.cc/item/5ebcc65fc2a9a83be51205f4.png "
},
{
    p_id: 32,
    p_name: "3个月腾讯视频VIP",
    p_word: "3个月腾讯视频VIP",
    P_img: " https://pic.downk.cc/item/5ebcc65fc2a9a83be51205f6.png "
},
{
    p_id: 33,
    p_name: "生日王卡超级版",
    p_word: "生日王卡超级版",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/JBM4Sl1ltgGH1NeP*qvP3Ifb3HdGg2*abVT5Jyf6wCytxpcH4cZFKbdgvBeI6muQo6.QvG6G2EkY4FVi9E5zJ1RFc1J5c2SsRM7EAbboQus!/r "
},
{
    p_id: 34,
    p_name: "分享礼活动",
    p_word: "分享礼活动",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3FYF1qCjC7ANaQiTJxWMG9Zu1h7atHDgClq*1jzM3NRtsEuMVOmvBD8GTHF*67.LtpYH0uoJhnZ53CaK46Cx.Tw!/r "
},
{
    p_id: 35,
    p_name: "腾讯大王福利卡",
    p_word: "腾讯大王福利卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3MR36eFakBjIjIOUPpOmooQyPladOY0*q6X8vebtBSq.gCmsfVTohgwZe.Lnb9uENJf8KIZSYKCywND*VfMJ2zA!/r "
},
{
    p_id: 36,
    p_name: "29元视频卡-骑士版",
    p_word: "29元视频卡骑士版",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEDCHeRd03ihNY*4kLUf5st7KmnVSaA2VAN7v2nGx7qM4It12*zVxPBc8ssklwVqs76N0vBmdkwG1s8ao0G4H8ik!/r "
},
{
    p_id: 37,
    p_name: "29元视频卡",
    p_word: "29元视频卡",
    P_img: " http://r.photo.store.qq.com/psc?/6e243db0-4ca9-421e-9398-31288be495c3/JBM4Sl1ltgGH1NeP*qvP3KJ6g1R1*GixjaUoJpKCwhFOnbljzaUSgsUKDyidYvSqSLfN5zlfl9JLmhEybR8YuPGUn90pioBiN0cyqQN0MNA!/r "
},
{
    p_id: 38,
    p_name: "省点花锦鲤卡",
    p_word: "省点花锦鲤卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/TmEUgtj9EK6.7V8ajmQrEDqmN0I2ssJQOaBEuqzMf8DYKawIIrMIyIlFymIn6XgqcQWNtf2C*Ean0hUcFN9kbGkbPOkvebWdfiSjaj0*438!/r "
},
{
    p_id: 39,
    p_name: "优鲜Plus卡",
    p_word: "优鲜Plus卡",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/TmEUgtj9EK6.7V8ajmQrENq*DJ*OUjYLSgWU0JFkBf0hupjRJ.SVkSUW9DLbvPLgNBNcqCK52HFZe5OGbrLLOq3o.f2TZVeqA8uECe45rX8!/r "
},
{
    // p_id: 40,
    // p_name: "1个月腾讯VIP",
    // p_word: "1个月腾讯VIP",
    // P_img: " "
},
{
    p_id: 41,
    p_name: "首充领爱奇艺会员",
    p_word: "首充领爱奇艺会员",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp2Heblw/TmEUgtj9EK6.7V8ajmQrEBuLM6nhXSdLkP99wT1LVxwOdP08WlFW2khPeDvqeB.wPVKATyiNQDsGLWAUOoR2YGl9IHrbTHAM92xecezT8m0!/r "
},
{
    // p_id: 42,
    // p_name: "首充享美团外卖会员",
    // p_word: "首充享美团外卖会员",
    // P_img: "1 "
},
{
    p_id: 43,
    p_name: "首充领2400快币",
    p_word: "首充领2400快币",
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/JBM4Sl1ltgGH1NeP*qvP3A4nYEsCti*VTtYjGsilK8PSnjrviJNJCdDi1wNKrP**fhHR0Gbw9AUSCZES7v3643cHGzKd0GktK9zJccJ5usc!/r "
},
{
    p_id: 44,
    p_name: "送车轮车主权益",
    p_word: "送车轮车主权益",
    P_img: " http://r.photo.store.qq.com/psc?/V52EBLlE2IOCJp3qS4Qn03S0oG3SFEAS/TmEUgtj9EK6.7V8ajmQrEKwgyXU6I*lHgnQqRJ54sGEm0Mcesl6mraflpT6mRwW7uD*qvS92kPMT66.6CmNH5WAJXKVMrPinDclKaRLOxYc!/r "
},
{
    p_id: 45,
    p_name: "首充享美团外卖会员" ,
    p_word: "首充享美团外卖会员" ,
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/TmEUgtj9EK6.7V8ajmQrEBSGtVjfw35JXWxH.7qcOxDB76w2IaTqM2SFCgpBwBJ0iR2.c1raYFdRY1fbxMcK43IpcBmVgRnLJo2XKtX0Ycc!/r "
},
{
    p_id: 46,
    p_name: "送陀螺算力" ,
    p_word: "送陀螺算力" ,
    P_img: " http://r.photo.store.qq.com/psc?/V124chEp0JmWVy/TmEUgtj9EK6.7V8ajmQrEODmf8xsHA.ax3YgwADMoUvzj1aJ9UP48VlYz7JTZ3Y0EYmFywn8j7UxCpQQEVTUlLTtrfJhYNtO5l94gcGte7s!/r ",
    P_bs: " 1个月腾讯VIP活动标识 ", //标识
    P_tj: " 首充≥50元 ", //条件
}

];

//产品活动表格
var lists = [{
    p_id: 40,
    p_name: " 1个月腾讯视频VIP ",
    p_word: " 1个月腾讯视频VIP ",
    //表格元素
    p_bt: " 首充≥50得1个月腾讯视频VIP活动 ", //产品标题
    P_bs: " 1个月腾讯视频VIP ", //标识
    P_tj: " 首充≥50元 ", //条件
    P_gjz: " 腾讯视频VIP领取 ", //关键字
    P_js: " “王卡助手”微信公众号—发送“腾讯视频VIP领取”—点击图文领取会员 ", //介绍
}
];  