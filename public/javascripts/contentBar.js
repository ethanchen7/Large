const unlimitedAccessBtn = document.querySelector(".unlimited-access-btn");
const startWritingBtn = document.getElementById("start-writing-btn");
const recommendedTopicsTags = document.querySelector(
  ".recommend-topics-tags"
).children;

unlimitedAccessBtn.addEventListener("click", (e) => {
  window.location.href = '/thanks';
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


const followButtons = document.getElementsByClassName('follow-btn')

followButtons[0].addEventListener('click', async(e) =>{
  let btn = followButtons[0]
  const followUserId = followButtons[0].getAttribute('id').split('-')[0]

  const currentColor = window.getComputedStyle(btn).backgroundColor

  console.log(currentColor)


  if (currentColor === 'rgb(255, 255, 255)'){
    fetch(`/users/${followUserId}/follow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  
    followButtons[0].innerHTML = 'Following'
    followButtons[0].style.backgroundColor= 'black'
    followButtons[0].style.color = 'white'
  }else{
    fetch(`/users/${followUserId}/follow`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    followButtons[0].innerHTML = 'Follow'
    followButtons[0].style.backgroundColor = 'white'
    followButtons[0].style.color = 'black'
  }
})

followButtons[1].addEventListener('click', async (e) => {
  let btn = followButtons[1]
  const followUserId = followButtons[1].getAttribute('id').split('-')[0]

  const currentColor = window.getComputedStyle(btn).backgroundColor

  console.log(currentColor)


  if (currentColor === 'rgb(255, 255, 255)') {
    fetch(`/users/${followUserId}/follow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    followButtons[1].innerHTML = 'Following'
    followButtons[1].style.backgroundColor = 'black'
    followButtons[1].style.color = 'white'
  } else {
    fetch(`/users/${followUserId}/follow`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    followButtons[1].innerHTML = 'Follow'
    followButtons[1].style.backgroundColor = 'white'
    followButtons[1].style.color = 'black'
  }
})

followButtons[2].addEventListener('click', async (e) => {
  let btn = followButtons[2]
  const followUserId = followButtons[0].getAttribute('id').split('-')[0]

  const currentColor = window.getComputedStyle(btn).backgroundColor

  console.log(currentColor)


  if (currentColor === 'rgb(255, 255, 255)') {
    fetch(`/users/${followUserId}/follow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    followButtons[2].innerHTML = 'Following'
    followButtons[2].style.backgroundColor = 'black'
    followButtons[2].style.color = 'white'
  } else {
    fetch(`/users/${followUserId}/follow`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    followButtons[2].innerHTML = 'Follow'
    followButtons[2].style.backgroundColor = 'white'
    followButtons[2].style.color = 'black'
  }
})

