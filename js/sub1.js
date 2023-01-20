// 헤더 슬라이드 다운/업 헤더 호버 시 글씨 색 바꾸기
$(document).on('mouseenter','.topmenu',function(){
    $(this).children(".hiddenmenu").stop().slideDown(400).css({"display":"block"});
}).on('mouseleave','.topmenu',function(){
    $(this).children(".hiddenmenu").stop().slideUp(400).css({"display":"none"});
});

setInterval(fnSlide, 3000);
function fnSlide() {
  $("img[alt='slide']:first-child").animate({ "margin-left": "-168px" }, 1200, function () {
    $("img[alt='slide']:first-child").css({ "margin-left": "-8px" });
    $("img[alt='slide']:first-child").insertAfter("img[alt='slide']:last-child");
  });
};

setInterval(fnSlide2, 5000);
function fnSlide2() {
  $("img[alt='character']:first-child").animate({ "margin-left": "-200px" }, 1200, function () {
    $("img[alt='character']:first-child").css({ "margin-left": "-20px" });
    $("img[alt='character']:first-child").insertAfter("img[alt='character']:last-child");
  });
};