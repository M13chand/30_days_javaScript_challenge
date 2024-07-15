// Activity 1: Arithmetic Operations

//Task 1: Write a program to add two numbers and log the result to the console.
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 6));

//Task 2: Write a program to subtract two numbers and log the result to the console.

const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(10, 5));

//Task 3: Write a program to multiply two numbers and log the result to the console.

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(10, 10));

//Task 4: Write a program to divide two numbers and log the result to the console.
const divide = (a, b) => {
  return a / b;
};
console.log(divide(30, 6));

//Task 5: Write a program to find the remainder when one number is divided by another and log result to the console.

const findRemainder = (a, b) => {
  return a % b;
};
console.log(findRemainder(45, 10));

// Activity 2:Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let addNumber = 3;
addNumber += 23;
console.log(addNumber);

// Task 7: Use the -= operator to subtract a number to a variable and log the result to the console.

let subtractNumber = 20;
subtractNumber -= 23;
console.log(subtractNumber); //-3

// Activity 3:Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let a = 50;
let b = 40;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (a < b) {
  console.log(`${a} is less than ${b}`);
} else {
  console.log(`${a} and ${b} are equal`);
}

//Task 9:Write a program to compare two numbers using >= and <= and log the result to the console

let c = 23;
let d = 2;
if (c >= d) {
  console.log(`c:${c} is greater than or equal to d:${d}`);
} else {
  console.log(`c:${c} is less than d:${d}`);
}

if (c <= d) {
  console.log(`d:${d} is greater than or equal to c:${c}`);
} else {
  console.log(`d:${d} is less than  c:${c}`);
}

// Task 10:Write a program to compare two numbers using == and ==== and log the result to the console.

let e = "3";
let f = 3;

if (e == f) {
  console.log("e and f are equal using == operator");
} else {
  console.log("e and f are not equal using == operator");
}
if (e === f) {
  console.log("e and f are equal using === operator");
} else {
  console.log("e and f are not equal using ===operator");
}

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let age = 76;
if (age > 6 && age < 12) {
  console.log("I am Child ageGrouped");
} else if (age > 13 && age < 19) {
  console.log("I am Teenager ageGrouped");
} else if (age > 20 && age < 35) {
  console.log("I am Young Adult ageGrouped");
} else if (age > 36 && age < 55) {
  console.log("I am Middle-aged Adult ageGrouped");
} else if (age > 56 && age < 75) {
  console.log("I am Older Adult ageGrouped ");
} else {
  console.log("I am Senior ageGrouped");
}
("OR");
// Using ternary operator
let age1 = 8;
const ageGroup =
  age1 > 6 && age1 < 12
    ? "I am Child ageGrouped"
    : age1 > 13 && age1 < 19
      ? "I am Teenager ageGrouped"
      : age1 > 20 && age1 < 50
        ? "I am Adult ageGrouped"
        : "I am Senior ageGrouped";
console.log(ageGroup);

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

let n1 = 5;
let n2 = 13;
if (n1 == 5 || n2 == 6) {
  console.log("Either n2 is 5 or n2 is 6 (or both)");
} else {
  console.log("Neither n1 is 5 nor n2 is 6");
}

// Task 13: Write a program that uses the! operator to negate a condition and log the result to the console.

let result = "pass";

if (!(result === "pass")) {
  console.log("The result is Failed");
} else {
  console.log("The result is Passed");
}

// Activity 5: Ternary Operators

// task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let number = -3;
const numberIsPosOrNeg =
  number >= 0 ? "This is a positive number " : "This is a negative number ";
console.log(numberIsPosOrNeg);

// Feature Request:

// Arithmetic Operations Script:Write a script that performs a basic arithmetic operations (addition,subtraction,multiplication,division,remainder) on two numbers and logs the results.

let num1 = 2;
let num2 = 3;
let operation = "division";

switch (operation) {

  case "addition":
    console.log(`The ${operation} is`, num1 + num2);
    break;

  case "subtraction":
    console.log(`The ${operation} is`, num1 - num2);
    break;

  case "multiplication":
    console.log(`The ${operation} is`, num1 * num2);
    break;

  case "division":
    console.log(`The ${operation} is`, num1 / num2);
    break;

  case "remainder":
    console.log(`The ${operation} is`, num1 % num2);
    break;

  default:
    console.log("Invalid Operation");
}


// Comparison and logical Operators Script:Create a script that compares two number using different comparison operators and combines conditions using logical operators, logging the results.
























// Ternary Operator Script : Write a script that uses the ternary operator to determine if aa number is positive or negative and logs the results.

let num = 33;
let myResult = (num >= 0) ? "This a Positive Number" : "This is a Negative Number";
console.log(myResult);