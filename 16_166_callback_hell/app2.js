// const willGetYouADog = new Promise((resolve, reject) => {
//   //resolve()
//   // reject()

//   const rand = Math.random();
//   if (rand > 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// willGetYouADog.then(() => {
//   console.log("YAY! We got a dog!!");
// });
// willGetYouADog.catch(() => {
//   console.log("No dog for you!!");
// });

// console.log(willGetYouADog);

// With a delay

const makeDogPromise = () => {
  const willGetYouADog = new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand > 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });

  return willGetYouADog;
};

makeDogPromise()
  .then(() => {
    console.log("YAY! We got a dog!!");
  })
  .catch(() => {
    console.log("No dog for you!!");
  });
