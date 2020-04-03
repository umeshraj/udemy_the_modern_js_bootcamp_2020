// Text element
// const h1 = document.querySelector("h1");
// console.log(h1.innerText);

// Inner html
// const allLis = document.querySelectorAll("li");

// using old school for loop
// for (let i = 0; i < allLis.length; i++) {
//   //   console.log(allLis[i].innerText);
//   allLis[i].innerText = "We are the best!";
// }

// new for loop
// for (let li of allLis) {
//   li.innerHTML = "We are <b>COOL</b>";
// }

// const colors = ["red", "green", "yellow", "orange", "blue", "purple"];
// allLis.forEach((li, i) => {
//   const color = colors[i];
//   li.style.color = color;
// });

// TODO list
const todo = document.querySelector("#todos .todo");
// todo.style.color = "gray";
// todo.style.textDecoration = "line-through";
// todo.style.opacity = "50%";

// todo.setAttribute("class", "done");
todo.classList.add("done");
// todo.classList.remove("done");
