

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

    const editStoryBtns = document.querySelectorAll('#story-edit-btn')
    const deleteStoryBtns = document.querySelectorAll('#story-delete-btn')

    for (let i = 0; i < editStoryBtns.length; i++) {
        editStoryBtns[i].addEventListener('click', e => {
            const storyId = editStoryBtns[i].dataset.index.split('-').at(-1)
            location.href=`/stories/${storyId}/edit`
        })
    }

    for (let i = 0; i < deleteStoryBtns.length; i++) {
        deleteStoryBtns[i].addEventListener('click', e => {
            e.stopPropagation()
            const storyId = deleteStoryBtns[i].dataset.index.split('-').at(-1)

            const deleteModal = document.getElementById('id01')
            const closeBtn = document.querySelector('.closebtn')
            const cancelBtn = document.querySelector('.cancelbtn')
            const sideBar = document.querySelector('.sidebar')
            const contentBar = document.querySelector('.content-bar')
            const deleteBtn = document.querySelector('.deletebtn')

            deleteModal.style.display='block';

            closeBtn.addEventListener('click', e => {
                deleteModal.style.display='none';
            })

            cancelBtn.addEventListener('click', e => {
                e.stopPropagation()
                deleteModal.style.display='none';
            })
            sideBar.addEventListener('click', e => {
                e.stopPropagation()
                deleteModal.style.display='none';
            })
            contentBar.addEventListener('click', e => {
                e.stopPropagation()
                deleteModal.style.display='none';
            })
            deleteBtn.addEventListener('click', async(e) => {
                e.stopPropagation()
                const res = await fetch(`/stories/${storyId}`, {
                    method: 'DELETE',
                })
                if (res.ok) {
                    const data = await res.json();
                    deleteModal.style.display='none';
                } 
                window.location.href="/"
            })
            cancelBtn.addEventListener('mouseover', e => {
                cancelBtn.style.borderColor = '#000000'
            })
            cancelBtn.addEventListener('mouseleave', e => {
                cancelBtn.style.borderColor = 'rgba(117, 117, 117, 1)'
            })
            deleteBtn.addEventListener('mouseover', e => {
                deleteBtn.style.backgroundColor = 'rgb(150, 22, 22)'
            })
            deleteBtn.addEventListener('mouseleave', e => {
                deleteBtn.style.backgroundColor = 'rgb(201, 74, 74)';
            })
        })
    }
});