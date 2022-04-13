window.addEventListener("load", (event) => {


    const icon = document.getElementsByClassName('nav-profile-icon-container')[0]
    const menu = document.getElementById('nav-profile-icon-menu-container');

    icon.addEventListener('click', () => {


        if (menu.style.display === '') {
            menu.style.display = 'flex'
        } else if (menu.style.display === 'flex'){
            menu.style.display = 'none'
        } else if (menu.style.display === 'none'){
            menu.style.display = 'flex'
        }

    })


})