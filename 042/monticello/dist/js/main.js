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

let map;

function initMap(){
  map = L.map('map').setView([40.674022, -73.899126], 15);
  
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  let customIcon = L.icon({
    iconUrl: 'images/map_marker.png',
    iconSize: [80, 80],
  });

  L.marker([40.680699, -73.902611], {icon: customIcon}).addTo(map)
      .bindPopup(`
      <ul class="markerPopup">
          <li>This markup</li>
          <li>Created by</li>
          <li>MoreusT</li>
      </ul>
      `);
}

$("#map_link").on('click', function(){
  $('head').append('<link rel="stylesheet" href="plugins/leaflet/leaflet.css">');
  $("body").append('<script src="plugins/leaflet/leaflet.js"></script>');
    const intID = setInterval(()=>{
        if(typeof L!=="undefined"){
            clearInterval(intID);
            initMap();
        }
    }, 10);
  $("#map_link").remove();
  $("#map_pic").remove();
});