(function ($) {
  'use strict';

  //  Search Form Open
  $('#searchOpen').on('click', function () {
    $('.search-wrapper').addClass('open');
  });
  $('#searchClose').on('click', function () {
    $('.search-wrapper').removeClass('open');
  });

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4500,
    arrows : false,
    infinite: true,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 999999,
        settings: 'unslick'
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          verticalSwiping: true,
        }
      }
    ]
  });

  $(window).on('resize orientationchange', function() {
    $('.slider').slick('setPosition');
  });

  // venobox initialize
  $('.venobox').venobox();

})(jQuery);