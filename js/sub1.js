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

// 캐릭터 슬라이드
setInterval(fnSlide2, 5000);
function fnSlide2() {
  $("img[alt='character']:first-child").animate({ "margin-left": "-230px" }, 1200, function () {
    $("img[alt='character']:first-child").css({ "margin-left": "0px" });
    $("img[alt='character']:first-child").insertAfter("img[alt='character']:last-child");
  });
};

// 캐릭터 슬라이드 클릭시
$(function(){
  $("#sec3L").click(function(){
    $(".sec3div2").stop().animate({"left":"+=230px"});
    let left=$(".sec3div2").css("left");
    if(left<="0px"){
      $("#sec3L").attr("disabled", true).css({"opacity":"0.3"});
    }else{
      $("#sec3L").attr("disabled", false).css({"opacity":"1"});
    }
  });
  $("#sec3R").click(function(){
    $(".sec3div2").stop().animate({"left":"-=230px"});
    let left=$(".sec3div2").css("left");
    if(left>="-1610px"){
      $("#sec3R").attr("disabled", true).css({"opacity":"0.3"});
    }else{
      $("#sec3R").attr("disabled", false).css({"opacity":"1"});
    }
  });
});

$(function(){
  $("img[alt='character']").click(function(){
    var i=$("img[alt='character']").index(this);
    $(".cha").eq(i).css({"display":"block"});
  });
  $("img[alt='Xicon']").click(function(){
    $(".cha").css({"display":"none"});
  });
});