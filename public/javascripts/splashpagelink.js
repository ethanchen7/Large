addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a.storyTitle, a.trend-storyTitle')

    links.forEach(link => {
        link.addEventListener('click', () => {
            alert('Please sign in to view this story.');
        })
    })
});