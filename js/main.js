const btn_open_nav = document.querySelector('.open-navigation');
const btn_close_nav = document.querySelector('.close-navigation');
const nav = document.querySelector('.header__navigation');
const nav_items = document.querySelectorAll('.header-navigation__item');


// Nav
function open_navigation() {
  nav.classList.add('navigation--visible');
}

function close_navigation() {
  nav.classList.remove('navigation--visible');
}

btn_open_nav.addEventListener('click', open_navigation);

btn_close_nav.addEventListener('click', close_navigation);

nav_items.forEach(item => item.addEventListener('click', close_navigation));


// Carousel
new Splide('.splide', {
  perPage: 3,
  gap: '1em',
  rewind: true,
  autoPlay: true,
  arrows: 'slider',
  breakpoints: {
    768: {
      perPage: 1,
    }
  }
}).mount();


// AOS
AOS.init();