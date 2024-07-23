// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const button = document.getElementById('changeTextButton');
const paragraph = document.getElementById('textParagraph');
button.addEventListener('click', () => {
  paragraph.textContent = 'The text has been changed!';
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const button1 = document.getElementById('toogleImageButton');
const image = document.getElementById('toggleImage');
button1.addEventListener('dblclick', () => {
  image.style.display = image.style.display === 'none' ? 'block' : 'none';
});

// Activity 2:Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.

const mouseOver = document.getElementById('hover');
mouseOver.addEventListener('mouseover', () => {
  mouseOver.style.backgroundColor = "red";
});


// Task 4:  Add a mouseout event listener to an element that resets its background color.
mouseOver.addEventListener('mouseout', () => {
  mouseOver.style.backgroundColor = "white";
});


// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the pressed key code to the console.

const input = document.querySelector('input');
const log = document.getElementById('log');
input.addEventListener('keydown', (e) => {
  log.textContent += `${e.code}  `
});


// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

const input1 = document.querySelector('#input1');
const keyUp = document.getElementById('keyup');

input1.addEventListener('keyup', (e) => {
  keyUp.textContent += `${e.target.value}`
})

// Activity 4:Form Events
// Task 7: Add a submit event listener to a form that prevents the default submissions and log that from data to the console.

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();  //prevent from default submission
  const username = document.getElementById('username').value;
  console.log(username);
  const password = document.getElementById('password').value;
  console.log(password);
  const email = document.getElementById("email").value;
  console.log(email);
})

// Task 8: Add a change event listener to a select dropdown that displays the selected values in a paragraph.
const hobbies = document.getElementById('hobbies');
const ph = document.getElementById('ph');
hobbies.addEventListener("change", () => {
  ph.innerHTML = `${hobbies.value}`
})


// Activity 5:Event Delegation
// Task 9: Add a click event listener to the list that logs the text content of the clicked list item using event delegation.
const eventDelegation = document.getElementById('myList').addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(`The clicked list item is:`, event.target.textContent);
  }
})

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
