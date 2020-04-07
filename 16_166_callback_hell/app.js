const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const moveX = (element, amount, delay, callback) => {
  const bodyBoundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const currentLeft = element.getBoundingClientRect().left;
  if (elRight + amount > bodyBoundary) {
    console.log("Done! CANNOT MOVE THAT FAR");
  } else {
    setTimeout(() => {
      element.style.transform = `translateX(${amount + currentLeft}px)`;
      if (callback) {
        callback();
      }
    }, delay);
  }
};

moveX(btn, 100, 1000, () => {
  moveX(btn, 100, 1000, () => {
    moveX(btn, 100, 1000, () => {
      moveX(btn, 100, 1000, () => {
        moveX(btn, 100, 1000);
      });
    });
  });
});
