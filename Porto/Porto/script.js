var hamburger = document.getElementById("hamburger");
var ham = document.querySelectorAll(".ham");
var box = document.getElementById("navbar");
var btn = document.querySelectorAll(".button");
hamburger.onclick = function () {
  ham.forEach((el) => {
    el.classList.toggle("open");
  });
  box.classList.toggle("show");
};
btn.forEach((el) => {
  el.onclick = function () {
    ham.forEach((el) => {
      el.classList.remove("open");
    });
    box.classList.remove("show");
  };
});
