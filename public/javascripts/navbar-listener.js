window.addEventListener("load", (event) => {
  const nav = document.getElementById("navbar");
  const getStarted = document.getElementsByClassName('getStarted')[0]

  document.addEventListener(
    "scroll",
    function (e) {
      if (window.scrollY > 325) {
        nav.style.backgroundColor = "white";
      } else {
        nav.style.backgroundColor = "#FFC017";
      }
    },
    true
  );

  getStarted.addEventListener('click', e => {
    window.location.href = '/demo'
  })
});
