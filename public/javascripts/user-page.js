window.addEventListener("load", (event) => {
 
  const createBioBtn = document.getElementsByClassName('getStartedButton')[0]
  const editBtn = document.getElementById("editButton");
  const noBio = document.getElementsByClassName("noBio")[0];
  const bioEdit = document.getElementsByClassName("bioEdit")[0];
  const showBio = document.getElementsByClassName("showBio")[0];

  createBioBtn.addEventListener('click', (e) => {
    noBio.classList.add('hideBio')
    bioEdit.classList.remove('hideBio')
  })


  editBtn.addEventListener("click", async (e) => {
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

    if (data.message === "Success") {
      // console.log(data)
      const newBio = document.querySelector("#editBioText");
      newBio.value = user.bio;
    }
    bioEdit.classList.add('hideBio')
    showBio.classList.remove('hideBio')

  });


});
