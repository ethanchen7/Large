
window.addEventListener("load", (event) => {


    const icon = document.getElementsByClassName('nav-profile-icon-container')[0]
    // console.log(menu)
    const menu = document.getElementsByClassName('nav-profile-icon-menu-container');
    console.log(menu)
    icon.addEventListener('click', () => {
         menu[0].style.display = 'block'

    });

    const center = document.getElementsByClassName('centerHolder')[0]

    center.addEventListener('click', () => {
        menu[0].style.display = 'none'
    })


})