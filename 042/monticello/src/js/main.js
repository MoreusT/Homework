$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $("#header").addClass("sticky");
    } else {
      $("#header").removeClass("sticky");
    }
    if($(window).scrollTop() > 200) {
      $("#to-top").fadeIn("100")
    } else {
      $("#to-top").fadeOut("100")
    }
  });
});

$(function () {
  $(".hamburger, #mobile-menu-shadow").on("click", function () {
    $(".hamburger").toggleClass("is-active");
    $("body").toggleClass("open");
  });

  $(".mob-menu__link").on("click", function () {
    $(".hamburger").removeClass("is-active");
    $("body").toggleClass("open");
  });

  $("#to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});

function heightCount(n){
  n = $(".first-screen").height();
  return n;
}
let h = heightCount();

const slider = $(".slider").lightSlider({
      item: 1,
      // auto: true,
      loop: true,
      controls: false,
      vertical: true,
      verticalHeight: h,
      slideMargin: 0,
});

$("#slider_next").on('click', function(){
      slider.goToNextSlide()
});