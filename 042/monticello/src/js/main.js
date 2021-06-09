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

$(".fs-slider").lightSlider({
      item: 1,
      auto: true,
      pause: 5000,
      loop: true,
      controls: false,
      vertical: true,
      verticalHeight: heightCount(),
      slideMargin: 0
});

$("#scroll_down").on('click', function(){
  $("html, body").animate({ scrollTop: heightCount()}, 400);
});

const lnSlider = $(".ln-slider").lightSlider({
  item: 3,
  auto: true,
  pause: 5000,
  loop: true,
  controls: false,
  slideMargin: 28
});

$("#ln-slider_prev").on('click', function () {
  lnSlider.goToPrevSlide()
});
$("#ln-slider_next").on('click', function () {
  lnSlider.goToNextSlide()
});

lightGallery(lightgallery, {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});