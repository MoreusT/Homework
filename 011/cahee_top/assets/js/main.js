$(function () {
    $(window).on("scroll", function () {
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    });

    $(".hamburger, #mobile-menu-shadow").on("click", function () {
        $(".hamburger").toggleClass("is-active")
        $("body").toggleClass("open")
    });

    $(".mobile_menu a").on("click", function () {
        $(".hamburger").removeClass("is-active")
        $("body").toggleClass("open")
    });

    $(".mobile_menu a, .main_menu a").on("click", function (e) {
        e.preventDefault();
        let top = $($(this).attr("href")).offset().top;
        $("html, body").animate({ scrollTop: top }, 400);
    });

    $("#to_top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
    })
});