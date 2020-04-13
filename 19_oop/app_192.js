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
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  rgba(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
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
