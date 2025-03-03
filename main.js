const backdrop = document.querySelector(".backdrop");
const modalCloseBtn = document.querySelector(".close-btn");
const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
const mobMenu = document.querySelector(".mob-menu");
const orderBtn = document.querySelector(".hero-button");
const form = document.querySelector(".footer-form");

const handleCloseModal = () => {
  backdrop.classList.remove("is-open");
};
const handleOpenModal = () => {
  backdrop.classList.add("is-open");
};
const handleCloseMenu = () => {
  mobMenu.classList.remove("is-open");
};
const handleOpenMenu = () => {
  mobMenu.classList.add("is-open");
};

modalCloseBtn.addEventListener("click", handleCloseModal);
orderBtn.addEventListener("click", handleOpenModal);
menuCloseBtn.addEventListener("click", handleCloseMenu);
menuOpenBtn.addEventListener("click", handleOpenMenu);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
});
