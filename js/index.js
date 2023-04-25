//Burger Menu
const burgerMenuButton = document.querySelector("#burger-menu-button");
const navigationMenu = document.querySelector("#navigation-menu");

burgerMenuButton.addEventListener("click", () => {
  burgerMenuButton.classList.toggle("open");
  navigationMenu.classList.toggle("open");
});

//Modal Window
const modalButtons = document.querySelectorAll("#modal-button");
const modalWindow = document.querySelector("#modal-window");
const closeButton = document.querySelector("#close-button");
const submitForms = document.querySelectorAll("#submit");

submitForms.forEach(function (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
  });
});

modalButtons.forEach(function (button) {
  button.addEventListener("click", () => {
    modalWindow.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  modalWindow.style.display = "none";
});
