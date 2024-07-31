// Activity 1: Basic Error Handling with Try-Catch
// Task 1:Write a program that intentionally throws an error and  use a try-catch block to handle the error and log an appropriate message to the console.
// Function that intentionally throws an error
try {
  throw new Error("This is an intentional error.");
} catch (error) {
  console.error("An error occurred: " + error.message);
}


// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero.Use a try-catch block to handle this error.

function divideNumbers(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return numerator / denominator;
  } catch (error) {
    console.error("An error occurred: " + error.message);
  }
}

const result = divideNumbers(10, 10);
console.log(result);

// Activity 2: Finally BLock

// Task 3: Write a script that includes a try-catch block and a finally block.Log message in try ,catch,and finally blocks to observe the execution flow.

try {
  const divisionResult = 10 / 1;
  console.log("Try block executed. ")
} catch (error) {
  console.error("An error executed.");
} finally {
  console.log("Finally block executed.");
}

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class.Throw an instance of this custom error in a function and handle  it using try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message); //Call the constructor of the parent Error class
    this.name = 'CustomError';
  }
}
function throwCustomError(message) {
  throw new CustomError("This is a custom error");
}
try {
  throwCustomError();
} catch (error) {
  if (error instanceof CustomError) {
    console.error("Custom error occurred: " + error.message);

  } else {
    console.log("an unexpected error occurred: " + error.message);
  }
}

// Task 5: Write a function that validates user (e.g., checking if a string is not empty) and throws a custom error if the validation fails.Handle the custom error using a try-catch block.

class CustomValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomValidationError";
  }
}

const validateString = (input) => {
  if (input === "") {
    throw new CustomValidationError("Input cannot be empty");
  }
  return input;
}

try {
  const result = validateString(""); // Change this value to test with different inputs
  console.log(result);
} catch (error) {
  if (error instanceof CustomValidationError) {
    console.log("Validation error: " + error.message);
  } else {
    console.log("Unexpected error: " + error.message);
  }
}

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects.Use .catch() to handle the rejection and log an appropriate message to the console.

const randomPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  console.log(randomNumber)
  if (randomNumber > 0.5) {

    resolve('promise Resolved');
  } else {
    reject('Promise rejected');
  }
}).catch(error => console.log('error:', error));

