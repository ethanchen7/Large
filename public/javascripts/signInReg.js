window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")


    const register = document.getElementsByClassName('createButtono')[0]

    register.addEventListener('click', () => {
        document.getElementsByClassName('registerPage')[0].style.display = 'flex'
        document.getElementsByClassName('loginPage')[0].style.display = 'none'
    });

    const signIn = document.getElementsByClassName('signInButtono')[0]

    signIn.addEventListener('click', () => {
        document.getElementsByClassName('loginPage')[0].style.display = 'flex'
        document.getElementsByClassName('registerPage')[0].style.display = 'none'
    })

    const closeButton = document.getElementsByClassName('closeX')[0]

    closeButton.addEventListener('click', () => {
        document.getElementsByClassName('logOrRegisterPopUp')[0].style.display = 'none'
    })
})
