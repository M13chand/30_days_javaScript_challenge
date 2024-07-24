// Activity 1:Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved successfully');
  }, 2000)
})
myPromise.then((message) => {
  console.log(message);
})

// Task 2:Create a promise that reject with an error message after a 2-second timeout and handle the error using .catch().

const myPromiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise rejected ');
  }, 2000);
})
myPromiseReject.catch((error) => {
  console.log('This is an error: ' + error);
});


// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server.Chain the promises to log message in a specific order.

function fetchData(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

fetchData('Fetching data from server 1', 3000)
  .then((message) => {
    console.log(message);
    return fetchData('Fetching data from server 2', 3000);
  })
  .then((message) => {
    console.log(message);
    return fetchData('Fetching data from server 3', 3000);
  })
  .then((message) => {
    console.log(message);
    return fetchData('All data fetched', 3000);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log('Error:', error);
  });


// Activity 3: Using Async/Await

// Task 4: Write an async function that waits  for a promises to resolve and then logs the resolved value.

async function handlePromiseResolve() {
  const response = await new Promise((resolve, reject) => {
    resolve('Async-Await Promise resolved successfully');
  })
  console.log(response);
}
handlePromiseResolve();



// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function handlePromiseReject() {
  try {
    const response = await new Promise((resolve, reject) => {
      reject('Async-Await Promise rejected');
    })

  } catch (error) {
    console.log('The Error is:', error)
  }
}
handlePromiseReject();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promise.

let getData = fetch('https://dummyjson.com/users')
  .then((response) => {
    console.log('The status code is :', response.status);
    console.log('Message :', response.ok);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using Async-await.

let getDataAsync = async () => {
  try {
    let response = await fetch('https://dummyjson.com/users');
    let data = await response.json();
    console.log(data);

  } catch (error) {
    console.log('Error:', error);
  }
}
getDataAsync();

// Activity 5: Fetching Data from an API
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First Promise");
    resolve(10);
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second Promise");
    resolve(20);
  }, 2000);

});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Third Promise");
    resolve(30);
  }, 3000);

});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Fourth Promise");
    resolve(40);
  }, 4000);
});

Promise.all([promise1, promise2, promise3, promise4]).then((result) => {
  console.log("Result:", result);
}).catch(error => console.log(error));


// Task 9: Use Promise.race() to log the value of the first promise that resolves among multiple promises.


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First P1");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second P2");

  }, 2000);

});
const Promises = [p1, p2];
Promise.race(Promises).then((result) => {
  console.log("The first promise Resolved is:", result)
}).catch(err => console.log("Error:", err))