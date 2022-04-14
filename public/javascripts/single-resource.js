addEventListener('DOMContentLoaded', e => {
    const linkButton = document.getElementById('copyButton')

    linkButton.addEventListener('click', async (e) => {
        e.stopPropagation();

        await navigator.clipboard.writeText(window.location);

        alert('story copied to clipboard');
    })

    const greys = document.querySelectorAll('.greys')
    const blacks = document.querySelectorAll('.blacks')
    console.log(greys);

    // greys.forEach((grey, i) => {
    //     grey.addEventListener('mouseover', () => {
    //         grey.classList.add('hidden');
    //         blacks[i].classList.remove('hidden');
    //     })

    //     grey.addEventListener('mouseleave', () => {
    //         greys.classList.remove('hidden');
    //         blacks[i].classList.add('hidden');
    //     })
    // })

    // blacks.forEach((black, i) => {
    //     black.addEventListener('mouseover', () => {
    //         black.classList.remove('hidden');
    //         // greys[i].classList.remove('hidden');
    //     })
    // })

    // const body = document.querySelector("body")

    // body.addEventListener('mou')
})