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
let mixerFeatured = mixitup(".featured_content", {
  selectors: {
    target: ".featured_card",
  },
  animation: {
    duration: 300,
  },
});

// * Link active featured
const linkFeatured = document.querySelectorAll(".featured_item");

function activeFeatured() {
  linkFeatured.forEach((carCategory) =>
    carCategory.classList.remove("active-featured")
  );
  this.classList.add("active-featured");
}
linkFeatured.forEach((carCategory) =>
  carCategory.addEventListener("click", activeFeatured)
);

// TODO =============== SHOW SCROLL UP ===============
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // * When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-thumb
  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// TODO =============== SCROLL SECTIONS ACTIVE LINK ===============
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// TODO =============== SCROLL REVEAL ANIMATION ===============
