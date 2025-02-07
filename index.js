for (let i = 0; i < document.querySelectorAll(".drum").length; i++)


document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keypress", function(){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
          case"a":
          var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
          case"s":
          var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
          case"d":
          var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
          case"j":
          var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
          case"k":
          var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
          case"l":
          var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            console.log(buttonInnerHTML)
            break;
    };
  };

    function buttonAnimation(curentKey){
      var activeButton = document.querySelector("." + curentKey);

      if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
          activeButton.classList.remove("pressed");
        }, 100);
      }
    }