window.addEventListener("load", (event) => {
  const clapIcon = document.querySelectorAll(".clapIcon");
  const clapErr = document.getElementsByClassName("clapErr")[0];

  clapIcon.forEach((ele) => {
    ele.addEventListener("mousover", () => {
      const currStyle = window
        .getComputedStyle(clapErr)
        .getPropertyValue("display");
      if (currStyle === "none") {
        clapErr.style.display = "block";
      } else {
        clapErr.style.display = "none";
      }
    });
  });

  const createBio = document.getElementsByClassName("getStartedButton")[0];
  const nobio = document.getElementsByClassName("noBio")[0];
  const bioEdit = document.getElementsByClassName("bioEdit")[0];

  createBio.addEventListener("click", () => {
    const currStyle = window
      .getComputedStyle(nobio)
      .getPropertyValue("display");

    if (currStyle === "flex") {
      nobio.classList.add("hideBio");
      bioEdit.classList.remove("hideBio");
    }
  });

  const editButton = document.getElementsByClassName("editButton")[0];
  const bio = document.querySelector("#editBioText");

  editButton.addEventListener("click", async () => {
    const userId = editButton.dataset.userid;
    console.log(userId)
    const newBio = bio.value;
    

    const res = await fetch(`/users/${userId}/about`, {
      method: "PUT",
      body: JSON.stringify({newBio}),
      headers: {'Content-Type': 'application/json'}
    });

    const data = await res.json();
    
    bio.value = data.newBio

  });


});
