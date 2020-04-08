const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.3) {
        reject({
          status: 404,
        });
      } else {
        const pages = {
          "/users": [
            { id: 1, username: "Bilbo" },
            { id: 5, username: "Esmerelda" },
          ],
          "/about": "This is the about page",
        };
        const data = pages[url];
        resolve({
          status: 200,
          data,
        });
      }
    }, 1000);
  });
};

fakeRequest("/about")
  .then((res) => {
    console.log(("Status code:", res.status));
    console.log(("Data: ", res.data));
    console.log("Request worked");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("Failed");
  });
