$("#client-slider").slick({
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 4,
   slidesToScroll: 1,
   arrows: true,
   autoplay: true,
   responsive: [
      {
         breakpoint: 1120,
         settings: {
            slidesToShow: 3,
         },
      },

      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
         },
      },

      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            arrows: true,
         },
      },

      {
         breakpoint: 576,
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

$("#testimonial-slider").slick({
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   autoplay: true,
});

// Slider next previous

const nextTestimonial = () => {
   $("#testimonial-slider").slick("slickNext");
};

const prevTestimonial = () => {
   $("#testimonial-slider").slick("slickPrev");
};

// Active Reviewer

$(document).on("click", ".reviewer", function () {
   const id = $(this).data("id");
   $("#testimonial-slider").slick("slickGoTo", id);
});

$("#testimonial-slider").on("afterChange", function () {
   var dataId = $(".slick-current").attr("data-slick-index");
   $(".reviewer").removeClass("active");
   $(`.reviewer${dataId}`).addClass("active");
});

// Stack slider

$("#hero-slider").stack_slider({
   autoPlaySpeed: 3000,
   autoPlay: true,
   dots: true,
   arrows: false,
   drag: true,
   direction: "horizontal",
});

// Filter Dashboard Preview

$(document).on("click", ".nav-link.preview", function () {
   const filter = $(this).data("filter");

   $(".nav-link.preview").removeClass("active");
   $(this).addClass("active");
   // $(`[data-filter="${filter}"]`).addClass("active");

   if (filter == "admin") {
      $(".preview-item").hide();
      $('[data-role="admin"].preview-item').fadeIn(1000);
   } else if (filter == "customer") {
      $(".preview-item").hide();
      $('[data-role="customer"].preview-item').fadeIn(1000);
   } else if (filter == "seller") {
      $(".preview-item").hide();
      $('[data-role="seller"].preview-item').fadeIn(1000);
   }
});

$(".adminBtn").click();
$(".preview-item.nav-link.dashboard").click();
