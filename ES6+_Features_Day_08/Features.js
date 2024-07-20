// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let personName = 'Jhon';
let personAge = 23;
console.log(`Hello my name is ${personName} and I am ${personAge} years old.`);

//Task 2: Create a multi-line string using template literals and log it to the console.
let MultilineStirng = `Hello this is a multi-line String.
Which contains multiple line string.`;
console.log(MultilineStirng);

// Activity 2: Destructing

// Task 3: Use array destructing to extract the first and second elements of an array of numbers and log them to the console.
let numbers = [1, 2, 3, 4, 5, 6];
let [first, second] = numbers;
console.log("First number of an array is :", first);
console.log(
  "Second numbers of an array is :", second);


// Task 4:  Use object destructuring to extract the title and author of a book object and log them to the console.

let book = {
  title: '30 days javaScript Challenge',
  author: 'Chai Aur Code (Hitesh Choudhary) '
}

let { title, author } = book;
console.log("Title of the book is :", title);
console.log("Book of the  author name is :", author);

// Activity 3 :Spread and Rest Operators

// Task 5: Usr the spread operator to create a new array that include all elements of an existing array plus additional elements, and log the new  array to the console.

let existingArray = [23, 45, 4];
let additionalArray = [34, 3, 6, 7];
let newArray = [...existingArray, ...additionalArray];
console.log(newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
  return args.reduce(
    (accumulator, currentValue) => accumulator + currentValue)
}
console.log(sum(1, 2, 3, 4, 5));

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1.Log the result of calling this function with and without the second parameter.
const productOfTwoNumbers = (a, b = 1) => {
  return a * b;
}
console.log(productOfTwoNumbers(3));
console.log(productOfTwoNumbers(4, 98));

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties and log the object to the console.

let student = {
  fName: 'Ramesh',
  lName: 'Kumar',
  getFullName: function () {
    return this.fName + '' + this.lName;
  }
}
console.log("The whole object is:", student);

// Task 9: Create an object with computed property names based on variables and log  the object to the console.
let fullName = "name";
let address = "address";

let person = {
  [fullName]: 'Manoj Chand',
  [address]: 'Kathmandu,Nepal'
}
console.log(person);