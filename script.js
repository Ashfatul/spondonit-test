$("#client-slider").slick({
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   autoplay: true,
   responsive: [
      {
         breakpoint: 1080,
         settings: {
            slidesToShow: 4,
         },
      },

      {
         breakpoint: 992,
         settings: {
            slidesToShow: 3,
         },
      },

      {
         breakpoint: 768,
         settings: {
            slidesToShow: 2,
            arrows: true,
         },
      },

      {
         breakpoint: 520,
         settings: {
            slidesToShow: 1,
            arrows: false,
         },
      },
   ],
});

$(".dashboard-preview-slider").slick({
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   autoplay: true,
});
