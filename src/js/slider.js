//Слайдер
$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
