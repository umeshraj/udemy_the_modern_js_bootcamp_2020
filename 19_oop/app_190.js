function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(hex(255, 100, 25));
console.log(rgb(255, 0, 12));

// Factor function
function makeColor(r, g, b) {
  const color = {}; // function makes a new object
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${this.g}, ${b})`;
  };
  color.hex = function hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color; // function returns the object it created
}

firstColor = makeColor(35, 255, 150);
firstColor.rgb();
