window.addEventListener("load", (event) => {
  const nav = document.getElementById("navbar");
  const getStarted = document.getElementsByClassName('getStarted')[0]

  document.addEventListener(
    "scroll",
    function (e) {
      if (window.scrollY > 325) {
        nav.style.backgroundColor = "white";
        getStarted.style.backgroundColor = "rgb(26, 137, 23)"
        getStarted.style.border = "solid rgb(26, 137, 23) 1px"
      } else {
        nav.style.backgroundColor = "#FFC017";
        getStarted.style.backgroundColor = "black"
        getStarted.style.border = 'solid black 1px'
      }
    },
    true
  );

  getStarted.addEventListener('click', e => {
    window.location.href = '/demo'
  })
});
