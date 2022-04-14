
window.addEventListener("load", (event) => {


    const icon = document.getElementsByClassName('nav-profile-icon-container')[0]
    // console.log(menu)
    const menu = document.getElementsByClassName('nav-profile-icon-menu-container');
    console.log(menu)

    // icon.addEventListener('click', (e) => {
    //      menu[0].style.display = 'block'

    // });

    icon.addEventListener('click', (e) => {
        const currStyle = window.getComputedStyle(menu[0]).getPropertyValue('display')

        if (currStyle === 'none') {
            menu[0].style.display = 'block'
        } else {
            menu[0].style.display = 'none'
        }

    });


    const center = document.getElementsByClassName('centerHolder')[0]

    center.addEventListener('click', () => {
        menu[0].style.display = 'none'
    })


    

})