window.addEventListener("DOMContentLoaded", () => {
  const account = document.querySelector(".account-link__title");
  const accountImg = document.querySelector(".header__right-img");
  const accountMenu = document.querySelector(".account-link__menu");
  const accountHeader = document.querySelectorAll(".header__account");

  account.addEventListener("click", showAccountMenu);
  accountImg.addEventListener("click", hideAccountMenu);

  function showAccountMenu() {
    accountMenu.classList.remove("hide");
    accountMenu.classList.add("show");
  }
  function hideAccountMenu() {
    accountMenu.classList.remove("show");
    accountMenu.classList.add("hide");
  }
});
