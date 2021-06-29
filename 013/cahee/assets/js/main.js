$(function () {
  $(window).on("scroll", function () {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 80) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
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

  $(".menu__link, .mob-menu__link").on("click", function (e) {
    e.preventDefault();
    let top = $($(this).attr("href")).offset().top;
    $("html, body").animate({ scrollTop: top }, 400);
  });

  $("#to-top, #to-top-mobile").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  $("#urnumber").mask("+38 (099) 999-99-99?9");

  $("#subscribe_btn").on("submit", function(e) {
    e.preventDefault();
    $(".sub_popup").addClass("sub_popup_open");
  });

  $("#sub_btn").on("click", function(){
    $(".sub_popup").removeClass("sub_popup_open");
  });

  $("#contact_form").on("submit", function(e){
    e.preventDefault();
  })
});
