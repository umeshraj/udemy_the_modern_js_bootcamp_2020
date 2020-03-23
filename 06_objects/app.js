const fitbitData = {
  totalSteps: 100,
  totalMiles: 12,
  avgCalorieBurn: 401,
  workout: "5 of 7",
  45: "good",
  "76 game": "fine",
  red: "#ff0000"
};

console.log(fitbitData.totalSteps);
console.log(fitbitData[45]);

// access with []
console.log(fitbitData["76 game"]);
console.log(fitbitData["red"]);

// adding properties
fitbitData["umesh"] = 4.0;
fitbitData.colt = 5.0;
console.log(fitbitData);
