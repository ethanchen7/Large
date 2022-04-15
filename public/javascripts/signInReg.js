window.addEventListener("load", (event) => {

  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      document.getElementsByClassName("modal-container")[0].style.display = "flex";
      document.getElementsByClassName("modal")[0].style.display = "flex";
    });
  });

  const createUserButton = document.getElementsByClassName("createButtono")[0];

  createUserButton.addEventListener("click", () => {
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
    window.location.href = '/'
  });
});
