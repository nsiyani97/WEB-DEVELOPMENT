// addEventListener is Higher order function which able to take function as an inputs.
// which takes responseToKey function as a input.

// responseToKey is Callback function which is passed in as an inputs; is callback function.

document.addEventListener("keypress", responseToKey);

function responseToKey(event) {
  console.log("Key pressed." + event.key);
}

function anotherAddEventListener(typeOfEvent, callback) {
  // Detect Event Code...
  var eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationOfKerypress: 2,
  };
  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}

anotherAddEventListener("keypress", function (event) {
  console.log(event);
});

document.addEventListener("keypress", function (event) {
  console.log(event);
});

debugger;
