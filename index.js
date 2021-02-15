var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").on("click", function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
});



function nextSequence() {

  var randomNumber = Math.floor(4 * Math.random());

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#"  + randomChosenColour).fadeIn(1000).fadeOut(1000).fadeIn(1000);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  playSound(randomChosenColour);

}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
