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

// live change trackers
const formData = {};
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener("input", (e) => {
    // console.dir(e.target.name);
    formData[e.target.name] = e.target.value;
  });
}
// creditCardInput.addEventListener("input", (e) => {
//   console.log("CC changed");
//   formData["cc"] = e.target.value;
//   console.log(formData);
// });

// veggieSelect.addEventListener("input", (e) => {
//   console.log("Veggie changed");
//   formData["veggie"] = e.target.value;
//   console.log(formData);
// });

// termsCheckbox.addEventListener("input", (e) => {
//   console.log("Checkbox changed");
//   formData["terms"] = e.target.checked;
//   console.log(formData);
// });
