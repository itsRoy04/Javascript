const myPromise = new Promise((resolve, reject) => {
    let success = true;  // Simulate an asynchronous operation
    if (success) {
      resolve("Operation Successful");
    } else {
      reject("Operation Failed");
    }
  });
  
  myPromise
    .then(result => {
      console.log(result);  // This runs if the promise is fulfilled
    })
    .catch(error => {
      console.log(error);  // This runs if the promise is rejected
    });
  