const btn = document.querySelector("#clicker");
btn.onclick = function() {
  console.log("You clicked the clicker");
};

btn.ondblclick = function() {
  console.log("You double clicked");
};
