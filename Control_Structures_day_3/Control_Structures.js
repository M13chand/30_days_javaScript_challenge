
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

// Task 6:Write a program that uses the ternary operator to check if a number is odd or even and log the result to the console.

let a = 30;
let numberOddEven = (a % 2 == 0) ? "The number is Even" : "The number is odd";
console.log(numberOddEven);

// Activity 5:Combining Conditions

// Task 7: Write a program to check if a year is  leap year using multiple conditions (divisible by 4 ,but not 100 unless also divisible by 400) and log the result to the console.

let year = 2020;

let leapYear = (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) ? `The ${year} is leap year` : `The ${year} is not leap year`;

console.log(leapYear);


// Feature Request:
// 1. Number check script:Write a script that checks if a number is positive,negative, or zero using if-else statements and logs the result.

let scriptNumber = "infinity";
if (scriptNumber > 0) {
  console.log("The number is positive number ");

} else if (scriptNumber < 0) {
  console.log("The number is negative number");
} else if (scriptNumber == 0) {
  console.log("The number is zero");
} else {
  console.log("The given number is not a valid number ");
}


// 2.Voting Eligibility Script:Create a to check if a person is eligible to vote based o their age and log the result.

let votingAge = 17;

if (votingAge >= 18) {
  console.log("You are eligible to vote.");
} else if (votingAge < 18) {
  console.log("You are not eligible to vote.");
} else {
  console.log("The provided number is not a valid age.");
}

// 3.Day of the week Script:Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
let dayOfWeek = 4;
switch (dayOfWeek) {
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
    console.log("The day of the week is not valid");

}

// 4. Grade Assignment Script: Create a script that uses a switch case to assign grade based on a score and logs the grade.

let mark = 40;
switch (true) {
  case 90 <= mark && 100 >= mark:
    console.log("Your grade is A+");
    break;

  case 80 <= mark && 89 >= mark:
    console.log("Your grade is A");
    break;
  case 70 <= mark && 79 >= mark:
    console.log("Your grade is B+");
    break;

  case 60 <= mark && 69 >= mark:
    console.log("Your grade is B");
    break;

  case 50 <= mark && 59 >= mark:
    console.log("Your grade is C+");
    break;

  case 40 <= mark && 49 >= mark:
    console.log("Your grade is C");
    break;

  case 30 <= mark && 39 >= mark:
    console.log("Your grade is D+");
    break;

  case 20 <= mark && 29 >= mark:
    console.log("Your grade is D");
    break;

  case 0 <= mark && 19 >= mark:
    console.log("Your grade is E");

  default:
    console.log("Invalid Mark");
}


//5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

let yearToCheck = 2020;
if ((yearToCheck % 4 == 0) && (yearToCheck % 100 != 0) || (yearToCheck % 400 == 0)) {
  console.log("This year is a leap year");
} else {
  console.log("This year is not a leap year");
}

