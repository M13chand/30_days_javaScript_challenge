// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and Change its text content.

const changeDom = () => {

  const element = document.getElementById('heading').innerHTML = "Hello World";
}



// Task 2: Select an HTML element by its class and change its background color .

function changeColor() {
  const elements = document.getElementsByClassName('container');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "lightBlue";
  }

}



// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some content and append it to the body.
const newDiv = () => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = " Task 3rd--This is a new div ";
  document.body.appendChild(newDiv);
  alert("Div created at the bottom of the body.")
}


// Task 4: Create a li element and add it to existing ul list.
// both in one
// Task 6:Remove the last element of the specific HTML element.

function addListItem() {
  const ul = document.getElementById('ul');
  const newLi = document.createElement("li");
  newLi.innerHTML = "This is a new list item";
  ul.appendChild(newLi);
}
function removeListLastItem() {
  const ul = document.getElementById('ul');
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }
}

// Activity 3: Removing Elements

// Task 5:Select an HTML element and remove it from the DOM.
function removeListItem() {
  const removeElement = document.getElementById('rm');
  removeElement.parentNode.removeChild(removeElement);

}

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes(e.g, src of an image tag).

function changeAttribute() {
  const image = document.getElementById('myImage');
  image.src = "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
}

// Task 8:Add and Remove a CSS class to from an HTML element.
function addClass() {
  const element = document.getElementById('myElement');
  element.classList.add("color");
}

function removeClass() {
  const element = document.getElementById('myElement');
  element.classList.remove("color");
}

// Activity 5: Event Handling.
// Task 9:Add a click event listener to a button that changes the text content of a paragraph.


const paragraph = document.getElementById('myParagraph');
paragraph.addEventListener('click', () => {
  paragraph.textContent = "This is Changed text content";
});





// Task 10:Add a mouseover event listener to  a  element that changes its border color.

const element = document.getElementById('mouseOver');
element.addEventListener('mouseover', () => {
  element.style.borderColor = "green";
});