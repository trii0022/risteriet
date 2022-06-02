document.querySelector("#accept").addEventListener("click", removeCookies);

function removeCookies() {
  document.querySelector("#cookies").classList.remove("alert");
  document.querySelector(".alert").classList.add("hide");
}

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#accept").addEventListener("click", websiteShown);
  document.querySelector("#deny").addEventListener("click", websiteShown);
}

function websiteShown() {
  document.querySelector("#coockies").classList.add("hide");
}
