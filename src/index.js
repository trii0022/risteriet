let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  console.log("click mobile menu");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

let hamburgerdesk = document.querySelector(".hamburgerdesktop");

hamburgerdesk.addEventListener("click", mobileMenu);

function mobileMenu() {
  console.log("click mobile menu");
  hamburgerdesk.classList.toggle("active");
  navMenu.classList.toggle("active");
}
