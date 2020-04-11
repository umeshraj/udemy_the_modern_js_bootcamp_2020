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

// NEW CODE WITH PROMISE
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currentLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        // console.log("Done! CANNOT MOVE THAT FAR");
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${amount + currentLeft}px)`;
        //   if (callback) {
        //     callback();
        //   }
        resolve();
      }
    }, delay);
  });
};

async function animateRight(el, amt) {
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
}

animateRight(btn, 100).catch((err) => {
  console.log("All done!");
  animateRight(btn, -100);
});

// // arrow function with implicity return
// moveX(btn, 300, 1000)
//   .then(() => moveX(btn, 300, 1000))
//   .then(() => moveX(btn, 300, 1000))
//   .then(() => moveX(btn, 300, 1000))
//   .catch(({ bodyBoundary, elRight, amount }) => {
//     console.log(`Body is ${bodyBoundary}px`);
//     console.log(`Element is at ${elRight}px,${amount}px is too large`);
//   });

// full arrow function
// moveX(btn, 300, 1000)
//   .then(() => {
//     return moveX(btn, 300, 1000);
//   })
//   .then(() => {
//     console.log("Done with both");
//   })
//   .then(() => {
//     console.log("Done with both");
//   })
//   .catch(() => {
//     console.log("Cannot move");
//   });

// OLD CODE
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   setTimeout(() => {
//     const bodyBoundary = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;
//     const currentLeft = element.getBoundingClientRect().left;
//     if (elRight + amount > bodyBoundary) {
//       // console.log("Done! CANNOT MOVE THAT FAR");
//       onFailure();
//     } else {
//       element.style.transform = `translateX(${amount + currentLeft}px)`;
//       //   if (callback) {
//       //     callback();
//       //   }
//       onSuccess();
//     }
//   }, delay);
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000);
//       });
//     });
//   });
// });

// moveX(
//   btn,
//   100,
//   1000,
//   () => {
//     //success
//     moveX(
//       btn,
//       400,
//       1000,
//       () => {
//         //success
//         moveX(
//           btn,
//           700,
//           1000,
//           () => {
//             //success
//             console.log("Really?!");
//           },
//           () => {
//             //fail
//             alert("Cannot move further");
//           }
//         );
//       },
//       () => {
//         //fail
//         alert("Cannot move further");
//       }
//     );
//   },
//   () => {
//     //failure
//     alert("Cannot move further");
//   }
// );
