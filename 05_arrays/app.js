let shoppingList = ["ice", "cheese", "bread"];
console.log(shoppingList);

// modify
shoppingList[1] = "milk";

// add to end
shoppingList.push("tomatoes");
console.log(shoppingList);

// remove last
console.log(shoppingList.pop());
console.log(shoppingList);

// add to start : unshift
shoppingList.unshift("dishes");
console.log(shoppingList);

// remove from start: shift
console.log(shoppingList.shift());
