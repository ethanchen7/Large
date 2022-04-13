const unlimitedAccessBtn = document.querySelector(".unlimited-access-btn");
const startWritingBtn = document.getElementById("start-writing-btn");
const recommendedTopicsTags = document.querySelector(
  ".recommend-topics-tags"
).children;

unlimitedAccessBtn.addEventListener("click", (e) => {
  window.location.href =
    "https://medium.com/plans?source=upgrade_membership---nav_full-------------------------------------";
});

startWritingBtn.addEventListener("click", (e) => {
  window.location.href = "/my-stories/new";
});

for (let i = 0; i < recommendedTopicsTags.length; i++) {
  let tag = recommendedTopicsTags[i];
  let tagId = parseInt(tag.id.split("-").at(-1), 10);
  tag.addEventListener("click", (e) => {
    window.location.href = `/tags/${tagId}`;
  });
}
