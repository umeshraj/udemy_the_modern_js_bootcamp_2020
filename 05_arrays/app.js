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

//join
console.log(ingredients.join("_"));

// slice
console.log(ingredients.slice(0, 2));

// splice
ingredients.splice(1, 0, "biscuit");
console.log(ingredients);

ingredients.splice(1, 1);
console.log(ingredients);

ingredients.splice(1, 0, "butter", "ghee");
console.log(ingredients);

// sorting
let people = ["mary", "joe", "vince", "abby"];
people.sort();
console.log(people);

let nums = [34, 10, 105, 78];
nums.sort();
console.log(nums);

// const
const foods = ["milk"];
foods.push("chocolate");
console.log(foods);
