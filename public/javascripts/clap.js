'use strict';

const clapDiv = document.querySelector('#clap')
const clapButton = document.querySelector('#clapButton')
const clapCount = document.querySelector('#clap-count')

clapButton.addEventListener('click', async(e) => {
    const storyId = clapDiv.dataset.storyid
    const res = await fetch(`/stories/${storyId}/clap/new`, {
        method: 'POST',
    })
    if (res.ok) {
        const data = await res.json()
        clapCount.innerText = data.updatedClapCount
    }

})