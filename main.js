const button = document.querySelector(".form__input--js");

button.addEventListener("mouseover", () => {
  button.classList.add("form__input--background");
});

button.addEventListener("mouseleave", () => {
  button.classList.remove("form__input--background");
});
