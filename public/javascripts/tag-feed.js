window.addEventListener('load', (event) => {
    const followButton = document.getElementsByClassName('fullB')[0]

    const tagId = followButton.getAttribute('id')

    if (followButton.innerHTML === 'Following Collection') {
        followButton.style.backgroundColor = 'white'
        followButton.style.color = 'rgba(26, 137, 23, 1)'
        followButton.style.border = 'solid rgba(26, 137, 23, 1) 1px'
    }

    followButton.addEventListener('click', (e) =>{

        if (followButton.innerHTML === 'Follow'){
            followButton.innerHTML = 'Following Collection'
            followButton.style.backgroundColor = 'white'
            followButton.style.color = 'rgba(26, 137, 23, 1)'
            followButton.style.border = 'solid rgba(26, 137, 23, 1) 1px'

            fetch(`/tags/${tagId}/follow`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

        }else{
            followButton.innerHTML = 'Follow'
            followButton.style.border = 'none'
            followButton.style.backgroundColor = 'rgba(26, 137, 23, 1)'
            followButton.style.color = 'white'

            fetch(`/tags/${tagId}/follow`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            
        }
    })
})