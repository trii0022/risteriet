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

document.querySelector("#sortbtn").addEventListener("click", sortShow);

function sortShow() {
  console.log("denne her er sortshow function");
  document.querySelector("#sortcontent").classList.toggle("hide");
}

document.querySelector("#roastbtn").addEventListener("click", roastShow);

function roastShow() {
  document.querySelector("#roastcontent").classList.toggle("hide");
}

document.querySelector("#countrybtn").addEventListener("click", countryShow);

function countryShow() {
  document.querySelector("#countrycontent").classList.toggle("hide");
}

document.querySelector("#blendbtn").addEventListener("click", blendShow);

function blendShow() {
  document.querySelector("#blendcontent").classList.toggle("hide");
}

document.querySelector("#andetbtn").addEventListener("click", andetShow);

function andetShow() {
  document.querySelector("#andetcontent").classList.toggle("hide");
}
