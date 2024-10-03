// SITUATION 1

function fetchData(callback) {
    setTimeout(() => {
      console.log("Fetched data");
      callback();
    }, 1000);
  }

  function processData(callback) {
    setTimeout(() => {
      console.log("Processed data");
      callback();
    }, 1000);
  }
  
  function saveData(callback) {
    setTimeout(() => {
      console.log("Saved data");
      callback();
    }, 1000);
  }

//   fetchData(() => {
//     processData(() => {
//       saveData(() => {
//         console.log("All done!");
//       });
//     });
//   });


// SOLUTIONS 

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetched data");
        resolve();
      }, 1000);
    });
  }
  
  function processData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Processed data");
        resolve();
      }, 1000);
    });
  }
  
  function saveData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Saved data");
        resolve();
      }, 1000);
    });
  }
  
//   fetchData()
//     .then(processData)
//     .then(saveData)
//     .then(() => console.log("All done!"))
//     .catch(error => console.error(error));
  


    // Solution 2  using async await 

    async function executeTasks() {
        try {
          await fetchData();
          await processData();
          await saveData();
          console.log("All done!");
        } catch (error) {
          console.error(error);
        }
      }
      
      executeTasks();
      