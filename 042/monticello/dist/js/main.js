window.onscroll = function() {myFunction()};

let header = document.getElementById("header");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

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