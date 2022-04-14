window.addEventListener("load", async (event) => {
  
  const checkforBio = document.querySelector('.centerHolderUser').dataset.userbio
  const createBio = document.getElementsByClassName("getStartedButton")[0];
  const nobio = document.getElementsByClassName("noBio")[0];
  const bioEdit = document.getElementsByClassName("bioEdit")[0];
  const showBio = document.getElementsByClassName('showBio')[0]

  if (checkforBio) {
    showBio.classList.remove("hideBio");
    nobio.classList.add("hideBio");
    bioEdit.classList.add("hideBio");
  } else {
  
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
    const newBio = bio.value;
    
    showBio.classList.remove("hideBio");
    bioEdit.classList.add("hideBio");
    
    const res = await fetch(`/users/${userId}/about`, {
      method: "PUT",
      body: JSON.stringify({newBio}),
      headers: {'Content-Type': 'application/json'}
    });
    
    const data = await res.json();
    
    bio.value = data.newBio
    

  });

  // const editExistingBio = document.getElementsByClassName('editButtonGreen')[0]

  // editExistingBio.addEventListener('click', () => {
  //   const userId = editButton.dataset.userid;
  //   console.log(userId)
  //   const newBio = bio.value;
    
  //   const res = await fetch(`/users/${userId}/about`, {
  //     method: "PUT",
  //     body: JSON.stringify({newBio}),
  //     headers: {'Content-Type': 'application/json'}
  //   });
    
  //   const data = await res.json();
    
  //   bio.value = data.newBio
  // })
  }

});
