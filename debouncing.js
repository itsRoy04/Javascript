const readline = require('readline');

// Debounce function (same as before)
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // Clears the previous timer if any
    timer = setTimeout(() => {
      func.apply(this, args);  // Executes the function after the delay
    }, delay);
  };
}

// Function to execute after debounce
function searchQuery(query) {
  console.log(`Searching for: ${query}`);
}

// Debounced version of the search function
const debouncedSearch = debounce(searchQuery, 300);

// Setup for capturing user input in Node.js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Handle user input with debouncing
rl.on('line', (input) => {
  debouncedSearch(input);
});
