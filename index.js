// number of drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  // create click event listener for all drum buttons
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // get the button values and store it into a variable e.g. w a s d
    var buttonInnerHTML = this.innerHTML;
    // insert the key into the functions
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}
// create keypress event listener for all drum buttons and get the key with event
document.addEventListener("keypress", function(event) {
  // insert the key into the functions
  makeSound(event.key);
  buttonAnimation(event.key);

});


function makeSound(key) {
  // check the key and play the corresponding sound
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default:
      console.log(key);

  }
}

// play a button animation when the button is pressed
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
