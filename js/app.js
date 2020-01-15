//* Fixed logo
$(function ($) {
  $(window).scroll(function fix_logo() {
    $('#fixed-logo').css(
      $(window).scrollTop() > 100
        ? { 'position': 'fixed', 'top': '0px', 'left': '0%' }
        : { 'position': 'relative', 'top': 'auto' }
    );
    return fix_logo;
  }());
});
//* scroll down script
$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500, "linear");
  });
});
// * Navigation script
$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
      $(this)
        .find("a")
        .html("<i class='fas fa-bars'></i>");
    } else {
      $(".item").addClass("active");
      $(this)
        .find("a")
        .html("<i class='fas fa-times'></i>");
    }
  });
});
// * Products slider
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: ["<i class='arw-left'></i>", "<i class='arw-right'></i>"],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

