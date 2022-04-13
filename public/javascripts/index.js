window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

    const nav = document.getElementById('navbar')

    console.log(window.scrollY)
    if(window.scrollY){
        nav.style.backgroundColor = 'white'
    }

})