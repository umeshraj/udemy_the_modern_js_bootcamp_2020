const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" },
        ],
        "/about": "This is the about page",
      };
      const data = pages[url];
      if (data) {
        resolve({
          status: 200,
          data,
        });
      } else {
        reject({
          status: 404,
        });
      }
    }, 1000);
  });
};

fakeRequest("/about")
  .then((res) => {
    console.log("Request worked");
    console.log(("Status code:", res.status));
    console.log(("Data: ", res.data));
  })
  .catch((res) => {
    console.log(res.status);
    console.log("Failed");
  });

fakeRequest("/users")
  .then((res) => {
    console.log("Request worked");
    console.log(("Status code:", res.status));
    console.log(("Data: ", res.data));
  })
  .catch((res) => {
    console.log(res.status);
    console.log("Failed");
  });

fakeRequest("/hacked")
  .then((res) => {
    console.log("Request worked");
    console.log(("Status code:", res.status));
    console.log(("Data: ", res.data));
  })
  .catch((res) => {
    console.log("Request failed");
    console.log(res.status);
  });
