const publishBtn = document.querySelector(".publish-button");
const publishModal = document.querySelector(".publish-modal");
const formSubmitBtn = document.querySelector(".submit-btn");
const storyCreateDiv = document.querySelector(".story-create");
const closeModalBtn = document.querySelector(".publish-modal-close");
const publishNowBtn = document.querySelector(".publish-now-btn");

publishBtn.addEventListener("click", (e) => {
  e.preventDefault();
  publishModal.classList.remove("hidden");
  publishModal.classList.add("overlay");
  storyCreateDiv.classList.add("hidden");
});

closeModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  publishModal.classList.add("hidden");
  publishModal.classList.remove("overlay");
  storyCreateDiv.classList.remove("hidden");
});

publishNowBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formSubmitBtn.click();
});
