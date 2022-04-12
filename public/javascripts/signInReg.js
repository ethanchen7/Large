window.addEventListener("load", (event) => {

  const hidden = document.getElementsByClassName("hidden")[0];

  hidden.classList.remove("hidden");

  const modal = document.getElementsByClassName("popUpButton")[0];

  modal.addEventListener("click", () => {
    document.getElementsByClassName("modal-container")[0].style.display =
      "flex";
    document.getElementsByClassName("modal")[0].style.display = "flex";
  });

  const register = document.getElementsByClassName("createButtono")[0];

  register.addEventListener("click", () => {
    document.getElementsByClassName("registerPage")[0].style.display = "flex";
    document.getElementsByClassName("loginPage")[0].style.display = "none";
  });

  const signIn = document.getElementsByClassName("signInButtono")[0];

  signIn.addEventListener("click", () => {
    document.getElementsByClassName("loginPage")[0].style.display = "flex";
    document.getElementsByClassName("registerPage")[0].style.display = "none";
  });

  const closeButton = document.getElementsByClassName("closeButton")[0];

  closeButton.addEventListener("click", () => {
    document.getElementsByClassName("modal-container")[0].style.display =
      "none";
    document.getElementsByClassName("modal")[0].style.display = "none";
  });

});
