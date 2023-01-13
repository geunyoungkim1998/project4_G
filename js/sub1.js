// 헤더 슬라이드 다운/업 헤더 호버 시 글씨 색 바꾸기
$(document).on('mouseenter','.topmenu',function(){
    $(this).children(".hiddenmenu").stop().slideDown(400).css({"display":"block"});
}).on('mouseleave','.topmenu',function(){
    $(this).children(".hiddenmenu").stop().slideUp(400).css({"display":"none"});
});
$(function(){
    $(".hiddenmenu").children("li").hover(function(){
        $(this).parent(".hiddenmenu").siblings("a").css({"color":"#5cc8d8"});
    },function(){
        $(".topmenu").children("a").css({"color":"white"});
    });
});