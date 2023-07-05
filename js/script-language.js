const button = document.querySelector(".nav__button");
const list = document.querySelector(".nav__list-language");

button.addEventListener("click", () => list.classList.toggle("open"));