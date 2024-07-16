//Activity 1:For Loop

// Task 1:Write a program to print number from 1 to 10  using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i < 11; i++) {
  let multiplicationTable = `5*${i}=${5 * i}`;
  console.log(multiplicationTable);
}

// Activity 2: While loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("The sum is :", sum);

// Task 4: Write a program to print numbers from 1 to 10 using while loop.

let l = 0;
while (l < 10) {
  l++;
  console.log(l);
}

// Activity 3: Do... while loop.

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let k = 1;
do {
  for (k = 1; k <= 5; k++)
    console.log(k);
} while (k <= 5);

//Task 6: Write a program to calculate the factorial of a number using a do.. while loop.

console.log("factorial")
let n = 6;
let j = 1;
let factorial = 1;
do {
  factorial *= j;
  j++;
}
while (j <= n);
console.log(factorial);

// Activity 4:Nested loop.

// Task 7: Write a program to print a pattern using nested for loops

for (let i = 1; i <= 5; i++) {
  let line = '';
  for (let j = 1; j <= i; j++) {
    line += '* ';
  }
  console.log(line);
}
// *
// * *
// * * *
// * * * *
// * * * * *

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10 , but skip the number 5 using the continue statement.
let m = 10;
for (let m = 1; m <= 10; m++) {
  if (m == 5)
    continue;
  console.log(m);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using break statement.

let p = 10;
for (p = 1; p <= 10; p++) {
  if (p == 7)
    break;
  console.log(p);

}

//Feature Request
// 1.Number Printing Script:Write a script that prints numbers from 1 to 10 using for loop and a while loop.

// For Loop
for (let x = 1; x <= 10; x++) {
  console.log(x);
}

// While Loop
let y = 1;
while (y <= 10) {
  console.log(y);
  y++;
}

// 2.Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.

let table = 10;
for (table = 1; table <= 10; table++) {
  multiplicationTable = 5 * table;
  console.log(multiplicationTable);
}

// Pattern Printing Script: Write a script that prints a pattern of stars using a nested loop.

