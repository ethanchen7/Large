const publishBtn = document.querySelector(".publish-button");
const formSubmitBtn = document.querySelector(".submit-btn");

publishBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formSubmitBtn.click();
});
