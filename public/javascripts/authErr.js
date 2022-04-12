window.addEventListener("DOMContentLoaded", () => {
  const logIn = document.getElementById("errStatusLog");
  const create = document.getElementById("errStatusCreate");


  if (logIn.hidden === true) {
    document.getElementsByClassName("modal-container")[0].style.display = "flex";
    document.getElementsByClassName("modal")[0].style.display = "flex";
    logIn.classList.remove('hidden');
  }

  if (create.hidden === true) {
    document.getElementsByClassName("modal-container")[0].style.display = "flex";
    document.getElementsByClassName("modal")[0].style.display = "flex";

    
    create.classList.add('hidden');
  }

});
