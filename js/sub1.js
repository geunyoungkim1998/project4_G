$(function(){
    $('header>ul>li').on("click",function(){
        $(this).siblings('.hiddenmenu').slideToggle();
    });
});