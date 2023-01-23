window.addEventListener("load", () => {
  var scrollPercent = Math.floor(window.scrollY) / 120;
  var setOpacity = 1 - scrollPercent;
  const header = document.querySelector("header");
  header.style.opacity = setOpacity;
});

window.addEventListener("scroll", () => {
  var scrollPercent = Math.floor(window.scrollY) / 120;
  var setOpacity = 1 - scrollPercent;
  const header = document.querySelector("header");
  // console.log(scrollPercent);
  header.style.opacity = setOpacity;
  if (window.scrollY > 120) {
    header.style.zIndex = -1;
  } 
  if (window.scrollY < 120) {
    header.style.display = 1;
  }
});
