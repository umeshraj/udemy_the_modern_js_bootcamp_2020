const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const changeColor = function (event) {
  console.log(event);
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
  // console.log(this);
  // console.log(this.style.backgroundColor);
};

const container = document.querySelector("#boxes");
for (let color of colors) {
  const box = document.createElement("div");
  box.style.background = color;
  box.classList.add("box");

  box.addEventListener("click", changeColor);
  // box.addEventListener("click", function () {
  //   printColor(box);
  // });
  // box.addEventListener("click", function () {
  //   console.log(box.style.backgroundColor);
  // });
  container.appendChild(box);
}
