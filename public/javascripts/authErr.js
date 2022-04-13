window.addEventListener("DOMContentLoaded", () => {
  const logIn = document.getElementById("errStatusLog");
  const create = document.getElementById("errStatusCreate");


  if (logIn.innerText === "true") {
    document.getElementsByClassName("modal-container")[0].style.display = "flex";
    document.getElementsByClassName("modal")[0].style.display = "flex";
    document.getElementsByClassName("registerPage")[0].style.display = "none";
    document.getElementsByClassName("loginPage")[0].style.display = "flex";
  }

  if (create.innerText === "true") {
    document.getElementsByClassName("modal-container")[0].style.display = "flex";
    document.getElementsByClassName("modal")[0].style.display = "flex";
    document.getElementsByClassName("registerPage")[0].style.display = "flex";
    document.getElementsByClassName("loginPage")[0].style.display = "none";
  }

});
