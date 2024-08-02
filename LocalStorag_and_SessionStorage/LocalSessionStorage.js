// Activity 1: Understanding LocalStorage

// Task 1: Write a script to save a string to localStorage and retrieve it.Log the retrieved value.

// Create a LocalStorage instance
const localStorage = new LocalStorage('./scratch');

// Function to save a string to localStorage
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
  console.log(`Saved "${value}" to localStorage with key "${key}"`);
}

// Function to retrieve a string from localStorage
function retrieveFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  console.log(`Retrieved value from localStorage with key "${key}": "${value}"`);
  return value;
}

// Example usage
const key = "myKey";
const value = "Hello, World!";

// Save the string to localStorage
saveToLocalStorage(key, value);

// Retrieve the string from localStorage
retrieveFromLocalStorage(key);
