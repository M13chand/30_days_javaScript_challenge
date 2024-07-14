// Activity 1: Arithmetic Operations

//Task 1: Write a program to add two numbers and log the result to the console.
const add = (a, b) => {
  return a + b;
}
console.log(add(5, 6));

//Task 2: Write a program to subtract two numbers and log the result to the console.

const subtract = (a, b) => {
  return a - b;
}
console.log(subtract(10, 5));


//Task 3: Write a program to multiply two numbers and log the result to the console.

const multiply = (a, b) => {
  return a * b;
}
console.log(multiply(10, 10));

//Task 4: Write a program to divide two numbers and log the result to the console.
const divide = (a, b) => {
  return a / b;
}
console.log(divide(30, 6));

//Task 5: Write a program to find the remainder when one number is divided by another and log result to the console.

const findRemainder = (a, b) => {
  return a % b;
}
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
}
else if (a < b) {
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
  console.log(`c:${c} is less than d:${d}`)
}

if (c <= d) {
  console.log(`d:${d} is greater than or equal to c:${c}`);
} else {
  console.log(`d:${d} is less than  c:${c}`)
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
  console.log("e and f are not equal using ===operator")
}

