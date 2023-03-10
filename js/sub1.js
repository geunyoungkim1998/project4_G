// 헤더 슬라이드 다운/업 헤더 호버 시 글씨 색 바꾸기
$(document).on('mouseenter','.topmenu',function(){
    $(this).children(".hiddenmenu").stop().slideDown(400).css({"display":"block"});
}).on('mouseleave','.topmenu',function(){
    $(this).children(".hiddenmenu").stop().slideUp(400).css({"display":"none"});
});

// 동영상 밑 슬라이드
setInterval(fnSlide, 3000);
function fnSlide() {
  $("img[alt='slide']:first-child").animate({ "margin-left": "-168px" }, 1200, function () {
    $("img[alt='slide']:first-child").css({ "margin-left": "-8px" });
    $("img[alt='slide']:first-child").insertAfter("img[alt='slide']:last-child");
  });
};
$("#sec2slide img").click(function(){
  var imgIndex=$("#sec2slide img").index(this);
  var arr=["https://www.youtube.com/embed/bVbyn7c1X6E","https://www.youtube.com/embed/G16-w-hMKTU","https://www.youtube.com/embed/h7XSEqWGxGI","https://www.youtube.com/embed/5ybulMdPLKY","https://www.youtube.com/embed/A35X4h590Ek","https://www.youtube.com/embed/15ESUxxJvZs","https://www.youtube.com/embed/eligdVVedDU"];
  $("#slideIframe").attr("src", arr[imgIndex]);
});

// 캐릭터 슬라이드
setInterval(fnSlide2, 5000);
function fnSlide2() {
  $("img[alt='character']:first-child").animate({ "margin-left": "-230px" }, 1200, function () {
    $("img[alt='character']:first-child").css({ "margin-left": "0px" });
    $("img[alt='character']:first-child").insertAfter("img[alt='character']:last-child");
    $(".cha:first-child").insertAfter(".cha:last-child");
  });
};

// 캐릭터 클릭 시 설명
$(function(){
  $("img[alt='character']").click(function(){
    var i=$("img[alt='character']").index(this);
    $(".cha").eq(i).css({"display":"block"});
  });
  $("img[alt='Xicon']").click(function(){
    $(".cha").css({"display":"none"});
  });
});
