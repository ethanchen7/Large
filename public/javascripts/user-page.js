window.addEventListener("load", (event) => {
  const clapIcon = document.querySelectorAll(".clapIcon");
  const clapErr = document.getElementsByClassName("clapErr")[0];

  clapIcon.forEach((ele) => {
    ele.addEventListener("mouseover", () => {
      const currStyle = window
        .getComputedStyle(clapErr)
        .getPropertyValue("display");
      if (currStyle === "none") {
        clapErr.style.display = "block";
      } else {
        clapErr.style.display = "none";
      }
    });
  });


  const homeButton = document.getElementById('homeButton')
  const userCenter = document.getElementsByClassName('user-center-content')[0]
  const userAbout = document.getElementsByClassName('user-page-about')[0]

  homeButton.addEventListener('click', () => {
      userCenter.style.display = 'block'
      userAbout.style.display = 'none'
  })




  // clapIcon.addEventListener('mouseover', () => {
  //     const currStyle = window.getComputedStyle(clapErr).getPropertyValue('display')

  //     if (currStyle === 'none') {
  //         clapErr.style.display = 'block'
  //     } else {
  //         clapErr.style.display = 'none'
  //     }

  // })

  // clapIcon.addEventListener('mouseout', () => {
  //     clapErr.style.display = 'none'
  // })

  // const screen = document.getElementsByClassName('centerHolderUser')[0]

  // screen.addEventListener('mouseover', () => {
  //     clapErr.style.display = 'none'
  // })

  // icon.addEventListener('click', (e) => {
  //     const currStyle = window.getComputedStyle(menu[0]).getPropertyValue('display')

  //     if (currStyle === 'none') {
  //         menu[0].style.display = 'block'
  //     } else {
  //         menu[0].style.display = 'none'
  //     }

  // });
});
