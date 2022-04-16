const unlimitedAccessBtn = document.querySelector(".unlimited-access-btn");
const storyUserProfileIcon = document.querySelector('.story-user-profile-icon')
const followButton = document.querySelector('#story-user-follow-btn')
const emailBtn = document.querySelector('#story-user-email-btn')

unlimitedAccessBtn.addEventListener("click", (e) => {
  window.location.href = '/thanks';
});

storyUserProfileIcon.addEventListener('click', e=> {
    const userId = storyUserProfileIcon.dataset.userid
    window.location.href = `/users/${userId}`
})

followButton.addEventListener('click', async(e) =>{
  const followUserId = followButton.dataset.userid

  const currentColor = window.getComputedStyle(followButton).backgroundColor

  if (currentColor === 'rgb(2, 148, 2)'){
    fetch(`/users/${followUserId}/follow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  
    followButton.innerHTML = 'Following'
    followButton.style.backgroundColor= 'black'
    followButton.style.color = 'white'
  }else{
    fetch(`/users/${followUserId}/follow`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    followButton.innerHTML = 'Follow'
    followButton.style.backgroundColor = 'rgb(2, 148, 2)'
    followButton.style.color = 'white'
  }
})

emailBtn.addEventListener('click', e=> {
    window.location.href= "/thanks"
})