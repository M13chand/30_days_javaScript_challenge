// Activity 1:Basic Regular Expression
// Task 1: Write a regular expression to match a simple pattern (e.g. match all occurrences of the word "JavaScript" in a string ).Log the matches.

const string = "JavaScript is a popular programming language. JavaScript is also used for web development.";
const pattern = /JavaScript/g;
const matches = string.match(pattern);
console.log(matches);

// Task 2: Write a regular expression to match all digits in a string .Log the matches.
const str = "Hello how are 223 you 495"
const digitPatterns = /\d/g;
console.log(str.match(digitPatterns));

// Activity 2:Character classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter.Log the matches.

const words = "Hello World, JavaScript is Awesome."
const wordPattern = /[A-Z][a-zA-Z]+/g;
console.log(words.match(wordPattern));

// Task 4: Write a regular expression to match all sequences of one or more digits in a string.Log the matches.

const str1 = "Your string with sequences of digits like 123, 5467, and 89.";
const regex = /\d+/g;
console.log(str1.match(regex))


// activity 3: Grouping and Capturing.

// Task 5: Write a regular expression to capture the area code, central office code , and line number from a US phone number format(e.g.(123)456-7890).Log the captures.

const phoneNumber = "(123)456-7890";
const regex1 = /\((\d{3})\)(\d{3})-(\d{4})/;
const matches1 = phoneNumber.match(regex1);

if (matches1) {
  const areaCode = matches1[1];
  const centralOfficeCode = matches1[2];
  const lineNumber = matches1[3];

  console.log(`Area Code: ${areaCode}`);           // Logs: Area Code: 123
  console.log(`Central Office Code: ${centralOfficeCode}`); // Logs: Central Office Code: 456
  console.log(`Line Number: ${lineNumber}`);       // Logs: Line Number: 7890
} else {
  console.log("No matches found");
}


// Task 6: Write a regular expression to capture the username and domain from an email address.Log the captures.

const email = "john.doe@example.com";
const regex2 = /([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/;
const matches2 = email.match(regex2);

if (matches2) {
  const username = matches2[1];
  const domain = matches2[2];

  console.log(`Username: ${username}`);  // Logs: Username: john.doe
  console.log(`Domain: ${domain}`);      // Logs: Domain: example.com
} else {
  console.log("No matches found");
}

// Activity 4:Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string .Log the matches.

const text = "word at the beginning of a sentence";
const regex4 = /^\b\w+\b/;
const matches4 = text.match(regex4);

if (matches4) {
  console.log(`Matched word: ${matches4[0]}`); // Logs: Matched word: word
} else {
  console.log("No matches found");
}


// Task 8: Write a regular expression to match a word only if it is at the end of a string .Log the matches.


const text1 = "This is an example sentence with the";
const regex5 = /\b\w+\b$/;
const matches5 = text1.match(regex5);

if (matches5) {
  console.log(`Matched word: ${matches5[0]}`); // Logs: Matched word: end
} else {
  console.log("No matches found");
}


// Activity 5:Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter,one lowercase letter,one digit,and one special character).Log whether the password is valid.


const password = "P@ssw0rd";
const regex6 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/;
const isValid = regex6.test(password);

if (isValid) {
  console.log("The password is valid."); // Logs if the password meets all criteria
} else {
  console.log("The password is not valid."); // Logs if the password does not meet all criteria
}

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const url = "https://www.example.com/path?query=123#fragment";
const regex7 = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;
const isValid1 = regex7.test(url);

if (isValid1) {
  console.log("The URL is valid."); // Logs if the URL meets all criteria
} else {
  console.log("The URL is not valid."); // Logs if the URL does not meet all criteria
}
