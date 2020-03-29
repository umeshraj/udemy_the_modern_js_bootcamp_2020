// Shorthand

const getStats = arr => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { min, max };
};

const res = getStats([1, 2, 3]);
console.log(res);

// Computed properties
const role = "host";
const person = "Umesh";
const team = {
  role: person
};
console.log(team);

const team2 = {
  [role]: person
};
console.log(team2);

function addProperty(obj, key, val) {
  return { ...obj, [key]: val };
}
const team3 = addProperty(team, "director", "Mani");
console.log(team3);
