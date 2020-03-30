const annoyer = {
  phrases: ["yolo", "totally", "no way", "omg"],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  //   start() {
  //     console.log(this.pickPhrase());

  //     setInterval(function() {
  //       //   console.log("test");
  //       console.log(this);
  //       console.log(this.pickPhrase());
  //     }, 3000);
  //   }
  start() {
    console.log(this.pickPhrase);

    setInterval(() => {
      //   console.log(this);
      console.log(this.pickPhrase);
    }, 3000);
  }
};

annoyer.start();
