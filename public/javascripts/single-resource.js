addEventListener('DOMContentLoaded', e => {
    const linkButton = document.getElementById('copyButton')

    linkButton.addEventListener('click', async (e) => {
        e.stopPropagation();

        await navigator.clipboard.writeText(window.location);

        alert('story copied to clipboard');
    })

})