window.addEventListener("load", (event) => {
 
  const checkBio = document.getElementsByClassName('centerHolderUser')[0].dataset.userbio
  const createBioBtn = document.getElementsByClassName('getStartedButton')[0]
  const submitBtn = document.getElementById("submitButton");
  const editBtn = document.getElementById('editButton')
  const noBio = document.getElementsByClassName("noBio")[0];
  const bioEdit = document.getElementsByClassName("bioEdit")[0];
  const showBio = document.getElementsByClassName("showBio")[0];

  if (checkBio !== 'null') {
    noBio.classList.add('hideBio')
    bioEdit.classList.add('hideBio')
    showBio.classList.remove('hideBio')
  }

  createBioBtn.addEventListener('click', (e) => {
    noBio.classList.add('hideBio')
    bioEdit.classList.remove('hideBio')
  })


  submitBtn.addEventListener("click", async (e) => {
    const userId = editBtn.dataset.userid;
    const bio = document.querySelector("#editBioText").value;
    
    const res = await fetch(`/users/${userId}/about`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bio,
      }),
    });
    
    const data = await res.json();
    
    if (data) {
      const newBio = document.getElementsByClassName("AZ")[0];
      newBio.innerText = data.user.bio
      showBio.classList.remove('hideBio');
      bioEdit.classList.add('hideBio');
    }
    
  });


  editBtn.addEventListener('click', () => {
    bioEdit.classList.remove('hideBio')
    showBio.classList.add('hideBio')
  })


});
