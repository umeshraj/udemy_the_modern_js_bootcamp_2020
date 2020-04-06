const form = document.querySelector("#signup-form");

const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggies");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // alert("Submitted the form");
  console.log("cc", creditCardInput.value);
  console.log("terms", termsCheckbox.checked);
  console.log("veggieselect", veggieSelect.value);
});
