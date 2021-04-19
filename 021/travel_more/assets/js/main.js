let fixedOffset = $("header").offset().top;

$(function () {
  $(window).scroll(function () {
    let fixed = $(".header"),
      scroll = $(window).scrollTop();
  
    if (scroll >= fixedOffset) {
      fixed.addClass("fixed");
      $(".replacer").addClass("show");
    } else {
      fixed.removeClass("fixed");
      $(".replacer").removeClass("show");
    }
  });

  $(".hamburger, #mobile-menu-shadow").on("click", function () {
    $(".hamburger").toggleClass("is-active");
    $("body").toggleClass("open");
  });

  $(".mob-menu__link").on("click", function () {
    $(".hamburger").removeClass("is-active");
    $("body").toggleClass("open");
  });

  $("#to-top, #to-top-mobile").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});
