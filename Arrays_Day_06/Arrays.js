// Activity 1: Array Creation and Access

// Task 1: Create an array of number from 1 to 5 and log the array to the console.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Task 2: Access the first and last elements of the array and log them to the console.

const num = [54, 34, 25, 75, 7, 4, 35];
console.log(num[0]);
console.log(num[num.length - 1]);

// Activity 2 : Array Methods (Basic)

// Task 3: Use the push method to add a new numbers to the end of the array and log the updated array.
const array = [1, 2, 3];
array.push(5);
console.log(array);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.

let array1 = [3, 6, 7, 4];
array1.pop();
console.log(array1);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

const array2 = [1, 3, 4, 5, 6, 7];
array2.shift();
console.log(array2);

// Task 6: Use the unshift method to remove the first element from the array and log the updated array.
console.log("array3");
const array3 = [2, 4, 5, 6, 7];
array3.unshift(1);
console.log(array3);

// Activity 3: Array Methods(intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log  the new array.

const singleArray = [2, 3, 4, 5];
const doubledUpdatedArray = singleArray.map((n) => n + n);
console.log(doubledUpdatedArray);

// Task 8: Use the filter method to create a new array with only even numbers and log  the new array.

const evenNumbers = [2, 4, 1, 3, 7, 10, 12];
const evenNumbersUpdated = evenNumbers.filter((n) => n % 2 === 0);
console.log(evenNumbersUpdated);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log  the result.

const array4 = [5, 4, 6, 3, 5, 3];
const sumOfArray4 = array4.reduce((pervious, current) => {
  return pervious + current;
});
console.log(sumOfArray4);

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console. 

const array5 = [24, 34, 5, 4, 6, 78, 45];
for (let i = 0; i < array5.length; i++) {
  console.log(array5[i]);
}


// Task 11: Use a forEach method to iterate over array and log each element to the console.

const array6 = [4, 3, 5, 7];

array6.forEach((n) => {
  console.log(n)
});

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array(matrix) and log the entire array to the console.
const multiDimArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(multiDimArray);

// Task 13: Access and log a specific element from the two-dimensional array.
const rowIndex = 2;
const colIndex = 2;

const specificElement = multiDimArray[rowIndex][colIndex];
console.log(specificElement);




// const allElement = multiDimArray.map((elem) => {
//   const Element = elem.map((e) => {
//     console.log(e);
//   }
//   );
// })


