$(document).ready(function () {
  AOS.init();
})


$(".toapp").click(function () {
  $('html, body').animate({
    scrollTop: $(".download").offset().top
  }, 500);
});