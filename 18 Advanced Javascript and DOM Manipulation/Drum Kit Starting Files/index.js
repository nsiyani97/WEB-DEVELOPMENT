// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    // this.style.color = "white";

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    // switch (buttonInnerHTML) {
    //   case "w":
    //     var tom4 = new Audio("sounds/tom-4.mp3");
    //     tom4.play();
    //     break;
    //   case "a":
    //     var tom3 = new Audio("sounds/tom-3.mp3");
    //     tom3.play();
    //     break;
    //   case "s":
    //     var tom2 = new Audio("sounds/tom-2.mp3");
    //     tom2.play();
    //     break;
    //   case "d":
    //     var tom1 = new Audio("sounds/tom-1.mp3");
    //     tom1.play();
    //     break;
    //   case "j":
    //     var snare = new Audio("sounds/snare.mp3");
    //     snare.play();
    //     break;
    //   case "k":
    //     var crash = new Audio("sounds/crash.mp3");
    //     crash.play();
    //     break;
    //   case "l":
    //     var kickBass = new Audio("sounds/kick-bass.mp3");
    //     kickBass.play();
    //     break;

    //   default:
    //     break;
    // }
  });
}

// Detecting Keyboard Press

document.addEventListener("keypress", function (event) {
  console.log(event);

  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      break;
  }
}

// Adding Animation and Adding Class

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// ------------------------------------------------------------
// HOW THIS DRUM KIT CODE WORKS
// ------------------------------------------------------------

// 1. Selecting all drum buttons:
//    var numberOfDrumButtons = document.querySelectorAll(".drum").length
//    - Counts how many elements have the class "drum".
//    - Used to loop through each drum button and attach event listeners.

// 2. Adding click event listeners to each drum:
//    document.querySelectorAll(".drum")[i].addEventListener("click", function () {})
//    - Executes when a drum button is clicked.
//    - 'this' refers to the button that triggered the event.

// 3. Playing a basic sound on click:
//    var audio = new Audio("sounds/tom-1.mp3");
//    audio.play();
//    - Creates a new Audio object and immediately plays it.
//    - This is a simple example sound; real sound logic happens in makeSound().

// 4. Changing the button text color on click:
//    this.style.color = "white";
//    - Gives visual feedback when the button is clicked.

// 5. Getting the inner HTML of the clicked button:
//    var buttonInnerHTML = this.innerHTML;
//    - Each drum button contains a letter (w, a, s, d, j, k, l).
//    - This letter is used to decide which sound to play.

// 6. Calling makeSound() after a click:
//    makeSound(buttonInnerHTML);
//    - Sends the clicked button's letter to the makeSound() function.
//    - Plays the correct sound based on the letter.

// 7. Calling buttonAnimation() after a click:
//    buttonAnimation(buttonInnerHTML);
//    - Adds a temporary CSS class "pressed" to animate the button.
//    - Makes the button visually react when pressed.

// 8. Detecting keyboard key presses:
//    document.addEventListener("keypress", function(event) { ... })
//    - Listens for keyboard interactions anywhere on the page.
//    - event.key identifies the pressed key.
//    - Both sound and animation functions are triggered for keys too.

// 9. Using a switch statement to play different sounds:
//    switch (buttonInnerHTML) { ... }
//    - Each case matches a key (w, a, s, d, j, k, l).
//    - Creates a new Audio object for the matching drum sound.
//    - Plays the sound immediately.

// 10. makeSound(key) function:
//    - Contains a switch statement that checks which key was pressed.
//    - For each key (w, a, s, d, j, k, l), a specific sound file is loaded.
//    - new Audio("sounds/...") plays the correct drum sound immediately.
//    - This function handles sound for BOTH clicks and keypresses.

// 11. buttonAnimation(currentKey) function:
//    var activeButton = document.querySelector("." + currentKey);
//    activeButton.classList.add("pressed");
//    setTimeout(...)
//    - Finds the button with a matching class (e.g., ".w", ".a").
//    - Adds "pressed" class to apply CSS animation styling.
//    - After 100ms, removes the class to reset the button.
//    - Gives user visual feedback for both clicking and typing.

// 12. Why this structure is organized and efficient:
//    - makeSound() prevents repeating long switch statements.
//    - Works with both mouse clicks and keyboard input.
//    - Animation logic is separated into its own function.
//    - Code stays clean, readable, and simple to update.

// 13. Optional improvements you can add later:
//     - Replace "keypress" with "keydown" (keypress is deprecated).
//     - Add error handling if the key doesn't match any drum.
//     - Add volume controls or sound effects.
//     - Use a data object instead of a switch for cleaner sound mapping.
//     - Add a reusable playSound(filename) helper to remove repetition.
//
// ------------------------------------------------------------
