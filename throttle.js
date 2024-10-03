const readline = require('readline');

// Throttle function
function throttle(func, limit) {
  let lastFunc;
  let lastRan;

  return function (...args) {
    const context = this;

    if (!lastRan) {
      func.apply(context, args); // Execute immediately
      lastRan = Date.now(); // Update the last ran time
    } else {
      clearTimeout(lastFunc); // Clear the timeout if it's already set
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args); // Execute the function after the limit
          lastRan = Date.now(); // Update the last ran time
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Function to execute after throttling
function logInput(input) {
  console.log(`Input logged: ${input}`);
}

// Create a throttled version of the logInput function
const throttledLogInput = throttle(logInput, 1000); // Throttle to 1 second

// Setup for capturing user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Handle user input with throttling

console.log('Type something (you will see it logged once every second):');
rl.on('line', (input) => {
  throttledLogInput(input);
});
