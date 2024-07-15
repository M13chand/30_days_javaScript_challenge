
// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive ,negative ,or zero, and log the result to the console.

let number = 0;

if (number > 0) {
  console.log("Number is positive");
}
else if (number < 0) {
  console.log("Number is negative");
}
else {
  console.log("Number is Zero");
}
// Task 2:Write a program to check if a person is eligible to vote (age>=18) and log the result to the console.

let age = 18;
if (age >= 18) {
  console.log("Person is eligible to vote");

} else {
  console.log("Person is not eligible to vote");
}

// Activity 2: Nested If-Else Statements 

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 145, num2 = 123, num3 = 105;


if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is the largest number among three numbers`);

}
else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is the largest number among three numbers`);
} else {
  console.log(`${num3} is the largest number among three numbers`);
}


// Activity 3: Switch Case
// task 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 5;
switch (day) {

  case 1:
    console.log("Sunday");
    break;
  case 2:

    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Invalid day");
}


// Task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

let score = 50;

switch (true) {
  case (score >= 90 && score <= 99):
    console.log("Your grade is A");
    break;

  case (score >= 80 && score <= 89):
    console.log("your grade is B");
    break;

  case (score >= 70 && score <= 79):
    console.log("Your grade is C");
    break;

  case (score >= 60 && score <= 69):
    console.log("Your grade is D");
    break;

  case (score >= 50 && score <= 59):
    console.log("Your grade is F");
    break;

  default:
    console.log("Your grade is Invalid ")
}


// Activity 4: Conditional (Ternary ) Operator

// Task 6: