window.addEventListener("load", (event) => {
  const nav = document.getElementById("navbar");

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
});
