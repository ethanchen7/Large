const publishBtn = document.getElementById("publish-btn");
const publishModal = document.querySelector(".publish-modal");
const formSubmitBtn = document.querySelector(".submit-btn");
const storyCreateDiv = document.querySelector(".story-create");
const closeModalBtn = document.querySelector(".publish-modal-close");
const publishNowBtn = document.querySelector(".publish-now-btn");
const tagInput = document.getElementById("tag-input-id");
const ogTagInput = document.getElementById("original-tag-input-id");
const titleInput = document.getElementById("title");
const articleInput = document.getElementById("article");
const titlePreviewInput = document.getElementById("title-preview");
const articlePreviewInput = document.getElementById("article-preview");

let titleFilled = false;
let articleFilled = false;

if (titleInput.value != "") titleFilled = true;
if (articleInput.value != "") articleFilled = true;

if (titleFilled && articleFilled) {
  publishBtn.classList.remove("disabled");
} else {
  publishBtn.classList.add("disabled");
}

titleInput.addEventListener("keyup", (e) => {
  titleFilled = true;
  if (titleFilled && articleFilled) {
    publishBtn.classList.remove("disabled");
  }
});

articleInput.addEventListener("keyup", (e) => {
  articleFilled = true;
  if (titleFilled && articleFilled) {
    publishBtn.classList.remove("disabled");
  }
});

publishBtn.addEventListener("click", (e) => {
  e.preventDefault();
  titlePreviewInput.value = titleInput.value.slice(0, 10);
  articlePreviewInput.value = articleInput.value.slice(0, 20);
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
  const tagValue = tagInput.value;
  ogTagInput.value = tagValue;

  formSubmitBtn.click();
});
