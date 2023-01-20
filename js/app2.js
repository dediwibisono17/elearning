$(document).ready(function () {
  new WOW().init()
})


$('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.05,
        slidesToScroll: 1,
        centerMode: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(".toapp").click(function() {
  $('html, body').animate({
      scrollTop: $(".download").offset().top
  }, 500);
});