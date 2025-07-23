$(function () {
  $(".main_sec01_slide").slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    speed: 1000,
    dots: true,
    appendDots: $(".main_sec01 .page"),
    customPaging: function (slider, i) {
      return '<button type="button">' + (i + 1) + "</button>";
    },
  });

  $(".main_sec01 .arrows .prev").on("click", function () {
    $(".main_sec01_slide").slick("slickPrev");
  });

  $(".main_sec01 .arrows .next").on("click", function () {
    $(".main_sec01_slide").slick("slickNext");
  });



  // 모바일 메뉴버튼
  $('.mbtn').on('click', function (e) {
    e.preventDefault();
    $('.gnb').toggleClass('on');
  });
  $('#header .gnb>ul>li>a').on('click', function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
  });
});




$(function () {
  $('.main_sec02 .tab_menu li button').on('click',
    function () {
      let idx = $(this).parent().index();
      console.log(idx);


      $('.main_sec02 .tab_menu li button').removeClass('on');
      $(this).addClass('on');

      $('.main_sec02 .tab_content .itm').removeClass('on');
      $('.main_sec02 .tab_content .itm').eq(idx).addClass('on');
    });




  const main_sec02_slide01 = new Swiper('.main_sec02_slide01', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.main_sec02 .itm01 .arrows .next',
      prevEl: '.main_sec02 .itm01 .arrows .prev',
    },
    observer: true,
    observeParents: true,

    breakpoints: {
      0: { // 0~767px
        slidesPerView: 1.5,
        spaceBetween: 8,
      },
      769: { // 768px 이상
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }

  });

  const main_sec02_slide02 = new Swiper('.main_sec02_slide02', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.main_sec02 .itm02 .arrows .next',
      prevEl: '.main_sec02 .itm02 .arrows .prev',
    },
    observer: true,
    observeParents: true,

    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 8,
      },
      769: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }

  });

  const main_sec02_slide03 = new Swiper('.main_sec02_slide03', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.main_sec02 .itm03 .arrows .next',
      prevEl: '.main_sec02 .itm03 .arrows .prev',
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 8,
      },
      769: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }

  });



  const main_sec04_slide = new Swiper('.main_sec04_slide', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      769: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }

  });

  $('.main_sec04 .prev').on('click', function () {
    main_sec04_slide.slidePrev();
  });

  $('.main_sec04 .next').on('click', function () {
    main_sec04_slide.slideNext();
  });

  let sw = true;
  $('.main_sec04 .play').on('click', function () {
    if (sw) {
      main_sec04_slide.autoplay.start();
      $(this).addClass('on');
    } else {
      main_sec04_slide.autoplay.pause();
      $(this).removeClass('on');
    }

    sw = !sw;
  });

});


$(function () {
  const MIS = new Swiper('.main_sec05_slide', {
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.main_sec05 .page',
      clickable: true,
    },
    navigation: {
      nextEl: '.main_sec05 .next',
      prevEl: '.main_sec05 .prev',
    },
  });


});



//
// $(function () {
//   $(window).on('scroll', function () {
//     let sct = $(window).scrollTop();

//     if (sct > 0) {
//       $('#header').addClass('on');
//     } else {
//       $('#header').removeClass('on');
//     }
//   });
// });


$(function () {
  const lenis = new Lenis({
    autoRaf: true,
    duration: 2,
  });
});


$(function () {
  AOS.init();
});
