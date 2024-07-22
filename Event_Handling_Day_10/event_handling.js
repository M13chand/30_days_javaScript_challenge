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
