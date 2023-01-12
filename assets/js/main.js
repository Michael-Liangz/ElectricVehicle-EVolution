// TODO =============== SHOW MENU ===============
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// * =============== MENU SHOW ===============
// * Validate if constant exits
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// * =============== MENU HIDDEN ===============
// * Validate if constant exits
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// TODO =============== REMOVE MENU MOBILE ===============
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // * When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((listlinkMenu) =>
  listlinkMenu.addEventListener("click", linkAction)
);

// TODO =============== CHANGE BACKGROUND HEADER ===============
function scrollHeader() {
  const header = document.getElementById("header");
  // * When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// TODO =============== POPULAR SWIPER ===============
let swiperPopular = new Swiper(".popular_container", {
  loop: true,
  spaceBetween: 24,
  slidePerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

// TODO =============== MIXITUP FILTER FEATURED ===============

// * Link active featured

// TODO =============== SHOW SCROLL UP ===============

// TODO =============== SCROLL SECTIONS ACTIVE LINK ===============

// TODO =============== SCROLL REVEAL ANIMATION ===============
