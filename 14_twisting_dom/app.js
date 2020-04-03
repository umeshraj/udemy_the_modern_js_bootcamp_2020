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
// todo.classList.add("done");
// todo.classList.remove("done");

// Creating elements
const newh2 = document.createElement("h2");
newh2.innerText = "I like animals";
newh2.classList.add("special");

// appending
const section = document.querySelector("section");
section.appendChild(newh2);

// adding an image
const newImg = document.createElement("img");
newImg.src =
  "https://images.unsplash.com/photo-1559659133-8781d8f3b673?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9";
newImg.style.width = "200px";
document.body.appendChild(newImg);

// adding a youtube link
const newLink = document.createElement("a");
newLink.innerText = "Curb Link. Click Me";
newLink.href = "https://www.youtube.com/watch?v=thZLV6XsrDk";

const firstP = document.querySelector("p");
firstP.appendChild(newLink);

// insert before
const parentUl = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "I AM A NEW LI";
const firstLi = document.querySelector("li.todo");
parentUl.insertBefore(newLi, firstLi);

const lastUl = document.querySelectorAll("li.todo")[2];
parentUl.insertBefore(newLi, lastUl);
// parentUl.appendChild(newLi);

// insertAdjacentElement
const newITag = document.createElement("i");
newITag.innerText = "I am italics";
// const firstP = document.querySelector("p");
firstP.insertAdjacentElement("beforebegin", newITag);

// Append
firstP.append(newITag, newLi);

// Removechild
const ul = document.querySelector("section ul");
const removeMe = ul.querySelector(".special");
ul.removeChild(removeMe);

// remove
const h1 = document.querySelector("h1");
h1.remove();
