// Activity 1:Variable Declaration

// declare a variable using var, assign it a number, and log the value to the console.

var a = 10;
console.log(a);

// declare a variable using let, assign it a string, and log the value to the console.
let name = "Manoj Chand"
console.log(name);

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const isStudent = true;
console.log(isStudent);

// Activity 3 :Data Types

// Task 4:Create variables of different data types (number,string,boolean,object,array ) and log each variable's type using the typeof operator.

// Number
let age = 23;
console.log(typeof (age));

// String
let country = "Nepal";
console.log(typeof (country));

// Boolean
let isBoolean = true;
console.log(typeof (isBoolean));

// Object
const person = {
  name: "Manoj",
  gender: "Male",
  address: "Kathmandu"
}
console.log(typeof (person));

// Array
const array = [1, 2, 3, 4, 5];
console.log(typeof (array));

// Activity 4: Reassigning variables 
// Task 5:Declare a variable using let, assign it an initial value, assign a new value, and log both values to the console. 
let variable = 0;
console.log("Initial value: ", variable);
variable = 12;
console.log("New assigned value:", variable);

// Activity 5:Understanding const 
//Task 6: Try reassigning a variable declared with const and observe the error

const myNumber = 10;
myNumber = 23;
console.log(myNumber);

// The error is " assignment to constant variable"  because constant variables can't be reassigned.


// Feature Request

//1. Variable Types Console Log : Write a script that declares variables of different data types and logs both the values and type of each variable to the console.

// Primitives Data Types
//Number
let n = 3;
console.log(n);
console.log(typeof (n));


// String
let s = "Hello"
console.log(s);
console.log(typeof (s));

// Boolean
let b = false;
console.log(b);
console.log(typeof (b));

// null
const nullValue = null;
console.log(nullValue);
console.log(typeof (nullValue));

//undefined 
let undefinedValue;
console.log(undefinedValue);
console.log(typeof (undefinedValue));

// Objects
let address = {
  street: "123 Main St",
  city: "New York",
  state: "NY"
}
console.log(address);
console.log(typeof (address));

// Arrays

const students = ["Ramesh", "Hari", "Sagar", "Rakesh"];
console.log(students);
console.log(typeof (students));

// 2.Reassignment Demo: Create a  script that demonstrate the difference in behavior between let and const when it comes to reassignment.

// For let 
let price = 100;
console.log("Price before reassignment: ", price);
price = 200;
console.log("Price after reassignment: ", price);

// For const
const pi = 3.1415;
console.log("pi value before reassignment: ", pi);
pi = 4;
console.log("pi value after reassignment:", pi);
