// AOS script
AOS.init({
  duration: 1200,
  delay: 400,
});

// Swiper-js script
var swiper = new Swiper('.carousel', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
    },
    // when window width is <= 999px
    699: {
      slidesPerView: 2,
    },
    // when window width is <= 999px
    1199: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});

$(document).ready(() => {
  // counter up Animation
  $('.counter-wrap .number').counterUp({
    delay: 10,
    time: 2000,
  });

  $(window).on('scroll load', () => {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar-s').addClass('sticky');
    } else {
      $('.navbar-s').removeClass('sticky');
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(() => {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto');
  });

  $('.navbar .menu li a').click(() => {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth');
  });

  // toggle menu/navbar script
  $('.menu-btn').click(() => {
    $('.navbar-s .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // typing text animation script
  var typed = new Typed('.typing', {
    strings: [
      'UI/UX Designing',
      'Web Development',
      'Android App Development',
      'iOs App Development',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

// scroll spy
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-s ul li a');

window.onscroll = () => {
  section.forEach((sec) => {
    var top = window.scrollY;
    var id = sec.getAttribute('id');
    var height = sec.offsetHeight;
    var offset = sec.offsetTop;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('.navbar-s ul li a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};
