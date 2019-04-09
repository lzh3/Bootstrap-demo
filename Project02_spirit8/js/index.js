/**
 * Created by Asus on 2018/12/7.
 */

$(window).bind("scroll",function(){
    var windowH=$(window).height()-250;
    var scrollH=$(window).scrollTop();
    if(scrollH>windowH){
        $("#nav_head").addClass("on");
    }else{
        $("#nav_head").removeClass("on");
    }
});

//轮播图 Team 部分
$("#team_pic").owlCarousel({
    items:4,
    itemsDesktop:[1199,4],
    itemsDesktopSmall:[979,3],
    itemsTablet:[768,2],
    itemsMobile:[479,1],
    autoPlay:5000,
    stopOnHover:true,//鼠标悬停停止自动播放
    scrollPerPage:true,//每页滚动
    pagination:true,
});
//轮播图brand部分
$("#brand").owlCarousel({
    items:5,
    itemsDesktop:[1199,2],
    itemsDesktopSmall:[979,2],
    itemsTablet:[768,2],
    itemsMobile:[479,2],
    autoPlay:4000,
    stopOnHover:true,//鼠标悬停停止自动播放
    scrollPerPage:true,//每页滚动
    pagination:true,
});
//轮播文字
$("#context").owlCarousel({
    items:1,
    itemsDesktop:[1199,1],
    itemsDesktopSmall:[979,1],
    itemsTablet:[768,1],
    itemsMobile:[479,1],
    autoPlay:3000,
    stopOnHover:true,//鼠标悬停停止自动播放
    scrollPerPage:true,//每页滚动
    pagination:true
});
//滚动监听
$("body").scrollspy({
    target:"#nav_head",
    offset:80,
});

// isotope
var $cont=$("#pDemo");
$cont.isotope({
    filter:"*",
    animationOptions:{
        duration:750,
        easing:"linear",
    },
});
$("#part_Demo .navBox .select span").on("click",function(){
    $(this).addClass("bColor").siblings().removeClass("bColor");
    var $act=$(this).attr("data-filter");
    $cont.isotope({
        filter:$act,
        animationOptions:{
            duration:750,
            easing:"linear",
        },
        layoutMode : "masonry"  //'fitRows'
    });
    return false;
});
$("#part_Demo .navBox .select span").on("selectstart",function(){return false;})

//改变detail的宽度
var $h=$("#part_Demo .row>div").width();
window.onresize=function(){
    $h=$("#part_Demo .row>div").width();
    $("#part_Demo .detail").width($h);
}
$("#part_Demo .detail").width($h);




