document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".navbar-hamburger").classList.toggle("show");
});

document.querySelector(".container").addEventListener("click", () => {
  document.querySelector(".navbar-hamburger").classList.remove("show");
});
