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

// TODO =============== POPULAR SWIPER ===============

// TODO =============== MIXITUP FILTER FEATURED ===============

// * Link active featured

// TODO =============== SHOW SCROLL UP ===============

// TODO =============== SCROLL SECTIONS ACTIVE LINK ===============

// TODO =============== SCROLL REVEAL ANIMATION ===============
