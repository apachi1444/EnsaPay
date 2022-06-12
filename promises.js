// callbacks are used to continue the execution of the function
// after the finish of an asynchronous function

setTimeout(() => {
  console.log("we are calling this function after 1000ms");
}, 1000);

// the promise is an object resend by an asynchronoous function
// and he represents the state of the operation

const { promiseStatus } = require("promise-status-async");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(promiseStatus(promise));
    if (2 == 1) {
      resolve("result");
    } else reject("errro");
  }, 500);
})
  .finally(() => {
    console.log("this is the finally method");
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

// this function will return automatically a promise
// async ensures that the function returns a promise
// await word suspends the function execution until the promise
// settles and then resumes it with the promise result
async function f() {
  let promise = new Promise((resolve, reject) =>
    setTimeout(() => resolve(100), 1000)
  );
  let result = await promise;
  console.log(result);
}

f();

// this is for the error handler
async function g() {
  try {
    let resposne = await fetch("sqdlkfj");
  } catch (error) {
    console.log(error);
  }
}
// g();

// tasks
async function loadJson(url) {
  const result = await fetch(url);
  if (result.status === 200) {
    let json = await result.json();
    return json;
  }

  throw new Error(result.status);
}
// loadJson(url).catch();

async function taskThree() {
  const aa = await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}

async function resPonse() {
  taskThree()
    .then((value) => console.log(value))
    .catch((err) => console.log(err));
}

resPonse();
