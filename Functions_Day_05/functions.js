// Activity 1: Functions Declarations

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(n) {
  if (n % 2 == 0) {
    return "Even number"
  }
  else {
    return "Odd number"
  }

}
console.log(checkEvenOdd(5));

// Task 2: Write a function to calculate the square of the a number and return the result.
let n = 4;
function calculateSquare(n) {
  return n * n;
}
const square = calculateSquare(n);
console.log(`The Square of the ${n} is`, square);


// Activity 2: Functions Expressions

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

let max = function (a, b) {
  return a > b ? "a is maximum number " : "b is a maximum number";
}
console.log(max(8, 15));

// Task $: Write a function expression to concatenate two stings and return the result.

let concat = function (str1, str2) {
  return str1 + str2;
}
console.log(concat("Manoj", " Chand"));

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return and return the result.

const sum = (a, b) => {
  return a + b;
}
console.log("The sum of two numbers is :", sum(12, 14));

// Task 6: Write an arrow function to check if a string contains a special Character and return a boolean value.

const isSpecialCharacter = (string) => {
  const specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (specialCharacter.test(string)) {
    return true;
  } else {
    return false;
  }
}
console.log(isSpecialCharacter("Hello, world!"));
console.log(isSpecialCharacter("Hello world"));


// Activity 4: Functions Parameters and Default Values

// Task 7: Write a function that takes two parameters and return their product.Provide  a default value for the second parameter.

const Product = (a, b = 6) => {
  return a * b;
};
console.log("The product of a and b is:", Product(5));
console.log("The product of a and b is:", Product(5, 132));

// Task 8: Write a function that takes a person's name and age and returns a greeting message.Provide a default value for age.

const person = (name, age = 22) => {
  return `Hello i am ${name}.I am ${age} years old.`
}
console.log(person("Ramesh"));
console.log(person("Saksham", 18));

// Activity 5: Higher-Order Functions

// Task 9:Write a higher-order function that takes a function and a number , and calls the function that many times.

const HOF = (func, value) => {
  for (let i = 1; i <= value; i++) {
    func();
  }
}
const message = () => {
  console.log("This a inner function");
}

console.log(HOF(message, 5));

// Task 10: Write a Higher-Order function that takes a two function and a value, applies the first function to the value , and then applies the second function to the result.



const HOF1 = (func1, func2, value) => {
  let result = func2(func1(value));
  return result;
}

function func1(result) {
  return `The value of func1 is ${result}`;
}

function func2(result) {
  return `This is func2: ${result}`;
}

console.log(HOF1(func1, func2, 10));
