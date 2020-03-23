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

// concat
let array1 = ["a", "b", "c"];
let array2 = [1, 2, 3];
let array3 = array1.concat(array2);
console.log(array3);

// multiple concat
let array4 = [].concat(array1, array2);
console.log(array4);

// includes
let ingredients = ["sugar", "salt", "pepper"];
console.log(array1.includes("sugar"));

// indexof
console.log(ingredients.indexOf("salt"));

// reverse
console.log(ingredients.reverse());

//joing
console.log(ingredients.join("_"));
