// Activity 1: Object Creation and Access.

// Task 1: Create an object representing a book with properties like title,author and year, and log the object to the console.

const book = {
  title: "Computer Networks",
  author: "Sharad Kumar Verma",
  year: 2010,
};

console.log(book);

// Task 2: Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const book1 = {
  title: "Computer Networks",
  author: "Sharad Kumar Verma",
  year: 2010,
  getDetails: function (title, author) {
    return `The book ${title} is written by ${author} `;
  },
};
console.log(book1.getDetails(book1.title, book1.author));

// Task 4: Add  a method to the book object that takes parameter(year ) and updates the book's year property, then log the updated object.

const book2 = {
  title: "Computer Networks",
  author: "Sharad Kumar Verma",
  year: 2010,

  changeYear: (Year) => {
    book2.year = Year;
  },
};
book2.changeYear(2012);
console.log(book2);

// Activity 3:Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books(an array of book object), and log the library object to the console.


const Library = {
  name: "keshar Library",
  books: [
    {
      title: "Computer Networks",
      author: "Sharad Kumar Verma",
      year: 2010,
    },
    {
      title: "Data Structures and Algorithms",
      author: "Ravi Shankar",
      year: 2015,
    },
    {
      title: "Operating Systems",
      author: "John Doe",
      year: 2005,
    },
    {
      title: "Web Development",
      author: "Ramesh kumar",
      year: 2020,
    },
  ],
};
console.log(Library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("The name of library is:", Library.name);
Library.books.map((book) => {
  console.log(book.title);
});

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

const books = {
  title: "Computer Networks",
  author: "Sharad Kumar Verma",
  year: 2010,

  getTitleAndYear: function () {
    return `${this.title} was published in ${this.year}`;
  },
};
console.log(books.getTitleAndYear());

// Log the result of calling the new method
console.log(books.getTitleAndYear());

// Activity 5:Object Iteration

// Task 8: Use a for..in loop to iterate over the properties of the book object and log each property and its value.

for (const property in book2) {
  if (Object.hasOwnProperty.call(book2, property)) {
    const value = book2[property];
    console.log(`${property}:${value}`);
  }
}

// Task 9:Use Object.keys and Object.values methods to log all the keys and values of the book object.

Object.keys(book2).forEach((key) => console.log(key));
Object.values(book2).forEach((value) => console.log(value));
