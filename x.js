console.log("hello");

document.querySelector(".ham").addEventListener("click", () => {
  document.querySelector(".left").style.left = 0;
});

document.querySelector(".back").addEventListener("click", () => {
  document.querySelector(".left").style.left = "-100%";
});
