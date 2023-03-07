$(document).ready(function () {
    new WOW().init()
})

$('.wraps').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    fade: true,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
        }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$(".toapp").click(function () {
    $('html, body').animate({
        scrollTop: $(".download").offset().top
    }, 500);
});

$('ul.menu').find('a').click(function () {
    var $href = $(this).attr('href');
    // alert($href)
    var $anchor = $($href).offset();
    $('body,html').animate({ scrollTop: $anchor.top - 40 }, 200);
    // return false;
});

$(document).ready(function () {
    $('ul.menu li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});