class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  greet() {
    return `Hello from color ${this.name}`;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  rgba(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${this.innerRGB()}, ${a})`;
  }
}

const c1 = new Color(255, 172, 186, "tomato");
console.log(c1.greet());
console.log(c1.rgb());
console.log(c1.hex());

const c2 = new Color(255, 255, 255, "white");
console.log(c2.hex());

// confirm same functions
console.log(c1.hex === c2.hex);

// change document color
document.body.style.backgroundColor = c1.rgba(0.4);
