// const btn = document.querySelector("#clicker");
// btn.onclick = function() {
//   console.log("You clicked the clicker");
// };

// btn.ondblclick = function() {
//   console.log("You double clicked");
// };

const btn = document.querySelector("#clicker");
btn.addEventListener("click", function () {
  alert("Clicked");
});

// adding second
btn.addEventListener("click", function () {
  console.log("Clicked");
});

btn.addEventListener("mouseover", function () {
  btn.innerText = "Stop Touching me";
});

btn.addEventListener("mouseout", function () {
  btn.innerText = "Click me";
});

window.addEventListener("scroll", function () {
  console.log("Stop scrollin");
});
