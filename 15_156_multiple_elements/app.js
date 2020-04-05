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

// keyboard event on body
document.addEventListener("keypress", function (event) {
  // console.log(event);
  console.log("KEY PRESS");
});

// input keypress
const input = document.querySelector("#username");

// key down
input.addEventListener("keydown", function (event) {
  console.log("KEY DOWN!");
});

// key up
input.addEventListener("keyup", function (event) {
  console.log("KEY UP!");
});

// shopping list
const addItemInput = document.querySelector("#addItem");
const itemsUL = document.querySelector("#items");

addItemInput.addEventListener("keypress", function (event) {
  console.log(event.key);
  if (event.key === "Enter") {
    // don't do anythin for empty string
    if (!this.value) {
      return;
    }
    // add to lis
    // const food = addItemInput.value;
    const food = this.value;
    const newLI = document.createElement("li");
    newLI.innerText = food;
    itemsUL.appendChild(newLI);
    // clear input
    this.value = "";
  }
});
