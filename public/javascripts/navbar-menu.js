window.addEventListener("load", (event) => {
  const icon = document.getElementsByClassName("nav-profile-icon-container")[0];
  const menu = document.getElementsByClassName(
    "nav-profile-icon-menu-container"
  );

  icon.addEventListener("click", (e) => {
    const currStyle = window
      .getComputedStyle(menu[0])
      .getPropertyValue("display");

    if (currStyle === "none") {
      menu[0].style.display = "block";
    } else {
      menu[0].style.display = "none";
    }
  });

  const centerFeed = document.getElementsByClassName("centerHolder")[0];
  const contentBarFeed = document.querySelectorAll(".content-bar");

  centerFeed.addEventListener("click", () => {
    menu[0].style.display = "none";
  });

  contentBarFeed.forEach((el) => {
    el.addEventListener("click", () => {
      menu[0].style.display = "none";
    });
  });

  const centerUser = document.getElementsByClassName("centerHolderUser")[0];

  if (centerUser) {
    centerUser.addEventListener("click", () => {
      menu[0].style.display = "none";
    });
  }
});
