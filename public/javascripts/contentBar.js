const unlimitedAccessBtn = document.querySelector(".unlimited-access-btn");
const startWritingBtn = document.getElementById("start-writing-btn");

unlimitedAccessBtn.addEventListener("click", (e) => {
  window.location.href =
    "https://medium.com/plans?source=upgrade_membership---nav_full-------------------------------------";
});

startWritingBtn.addEventListener("click", (e) => {
  window.location.href = "/my-stories/new";
});
