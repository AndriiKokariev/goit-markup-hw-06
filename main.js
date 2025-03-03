const backdrop = document.querySelector(".backdrop");
const modalCloseBtn = document.querySelector(".close-btn");
const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
const mobMenu = document.querySelector(".mob-menu");

const handleCloseModal = () => {
  backdrop.classList.remove("is-open");
};
const handleCloseMenu = () => {
  mobMenu.classList.remove("is-open");
};
const handleOpenMenu = () => {
  mobMenu.classList.add("is-open");
};

modalCloseBtn.addEventListener("click", handleCloseModal);
menuCloseBtn.addEventListener("click", handleCloseMenu);
menuOpenBtn.addEventListener("click", handleOpenMenu);
