window.addEventListener('load', (event) => {
    let recommendedButton = document.getElementById('recommended')
    let followingButton = document.getElementById('following')
    let recommendedStories = document.getElementById('recommendedStories')
    let followingStories = document.getElementById('followingStories')
    let parentDiv = document.getElementById('contentDisplayed')
    recommendedButton.style.borderBottom = 'solid black 0.25px'

    parentDiv.removeChild(followingStories)

    async function getRecommended(){
        parentDiv.prepend(recommendedStories)
        parentDiv.removeChild(followingStories)
        followingButton.style.borderBottom = 'none'
        followingButton.style.color = 'rgba(117, 117, 117, 1)'
        recommendedButton.style.color = 'rgb(58, 58, 58)'
        recommendedButton.style.borderBottom = 'solid black 0.25px'
        recommendedStories.style.visibility = 'visible'
        followingStories.style.visibility = 'hidden'
    }

    recommendedButton.addEventListener('click' , getRecommended)



    async function getFollowingStories(){
        parentDiv.prepend(followingStories)
        parentDiv.removeChild(recommendedStories)
        followingStories.style.visibility = 'visible'
        recommendedStories.style.visibility = 'hidden'
        followingButton.style.color = 'rgb(58, 58, 58)'
        followingButton.style.borderBottom = 'solid black 0.25px'
        recommendedButton.style.borderBottom = 'none'
        recommendedButton.style.color = 'rgba(117, 117, 117, 1)'
    }

    followingButton.addEventListener('click', getFollowingStories)
});