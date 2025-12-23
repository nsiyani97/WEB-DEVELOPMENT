// 🔹 A. Non-Blocking Example (Console Proof)
console.log("Start");

setTimeout(() => {
  console.log("Async task finished");
}, 2000);

console.log("End");

// 🔹 B. Callback Example

function fakeApiCallback(callback) {
  setTimeout(() => {
    callback("Data loaded using CALLBACK");
  }, 2000);
}

function loadWithCallback() {
  document.getElementById("status").innerText = "Loading (Callback)...";

  fakeApiCallback(function (message) {
    document.getElementById("status").innerText = message;
  });
}

// 🔹 C. Promise Example

function fakeApiPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded using PROMISE");
    }, 2000);
  });
}

function loadWithPromise() {
  document.getElementById("status").innerText = "Loading (Promise)...";

  fakeApiPromise()
    .then((message) => {
      document.getElementById("status").innerText = message;
    })
    .catch((error) => {
      document.getElementById("status").innerText = error;
    });
}

// 🔹 D. Async / Await Example

async function loadWithAsyncAwait() {
  document.getElementById("status").innerText = "Loading (Async/Await)...";

  const message = await fakeApiPromise();

  document.getElementById("status").innerText = message;
}
