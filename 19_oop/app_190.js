function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(hex(255, 100, 25));
console.log(rgb(255, 0, 12));

// Factory function
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

// Making constructors
console.log("Constructors!!");
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  //   console.log(this);
}

// add a function to the prototype
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${this.g}, ${b})`;
};

Color.prototype.hex = function hex() {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(123, 90, 12);
const color2 = new Color(12, 35, 46);
console.log(color1.hex());
console.log(color2.hex());
console.log(color1.hex == color2.hex);

console.log(color1.rgba(0.5));
