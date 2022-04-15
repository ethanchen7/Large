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
      
      if(newBio.innerText !== '') {
        showBio.classList.remove('hideBio');
        bioEdit.classList.add('hideBio');
      } else {
        noBio.classList.remove('hideBio')
        bioEdit.classList.add('hideBio')
        showBio.classList.add('hideBio')
      }
    }
    
  });


  editBtn.addEventListener('click', () => {
    bioEdit.classList.remove('hideBio')
    showBio.classList.add('hideBio')
  })


  const homeBtn = document.getElementById('homeButton')
  const listBtn = document.getElementById('listsButton')
  const aboutBtn = document.getElementById('aboutButton')


  homeBtn.addEventListener('click', () => {
    homeBtn.style.borderBottom = 'solid black 0.25px';
    listBtn.style.borderBottom = 'none'
    aboutBtn.style.borderBottom = 'none'
  })

  listBtn.addEventListener('click', () => {
    listBtn.style.borderBottom = 'solid black 0.25px'
    homeBtn.style.borderBottom = 'none'
    aboutBtn.style.borderBottom = 'none'
  })

  aboutBtn.addEventListener('click', () => {
    aboutBtn.style.borderBottom = 'solid black 0.25px';
    listBtn.style.borderBottom = 'none'
    homeBtn.style.borderBottom = 'none'
  })



});
