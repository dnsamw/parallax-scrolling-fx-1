let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains = document.getElementById("mountains");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let rocks = document.getElementById("rocks");

window.addEventListener("scroll", function () {
  let value = window.screenY;
  let x = value + "px";
  console.log(x);
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 0.25 + "px";
});
