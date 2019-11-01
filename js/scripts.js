//Backend Functions//
var resultsArray = [];
var resultsFinal = [];

function stringMaker(input) {
  console.log(input);

  for (var i = input; i > 0; i--) {
    resultsArray.unshift(i)
  };
  resultsArray.unshift(0)
  resultsArray.forEach(resultMod);

  function resultMod(i){
    if (resultsArray[i] === 3 || resultsArray[i] === 13 || resultsArray[i] === 23 || resultsArray[i] > 29 && resultsArray[i] < 40 || resultsArray[i] === 43|| resultsArray[i] === 53 || resultsArray[i] === 63 || resultsArray[i] === 73|| resultsArray[i] === 83 || resultsArray[i] === 93 || resultsArray === 103 || resultsArray[i] > 299 && resultsArray[i] < 400) {
      resultsFinal.push(" I'm sorry, Dave. I'm afraid I can't do that.")
      return;
      console.log(resultsFinal);
    }
    else if (resultsArray[i] === 2 || resultsArray[i] === 12 || (resultsArray[i] >= 20 && i <= 29) || resultsArray[i] === 42 || resultsArray[i] === 52 || resultsArray[i] === 62 || resultsArray[i] === 72 || resultsArray[i] === 82 || resultsArray[i] === 92 || resultsArray[i] > 199 && resultsArray[i] < 300 ){
      resultsFinal.push(" Boop!");
    } else if (resultsArray[i] === 1 || resultsArray[i] > 9 && resultsArray[i] < 20 || resultsArray[i] === 41 || resultsArray[i] === 51 || resultsArray[i] === 61 || resultsArray[i] === 71 || resultsArray[i] === 81 || resultsArray[i] === 91 || resultsArray[i] > 99 && resultsArray[i] < 200 ){
      resultsFinal.push(" Beep!");
    }
    else {
      resultsFinal.push(" " + i);
    } return;
  };
};
console.log(resultsArray);



//Font End//
$(document).ready(function() {
  $("form#beep").submit(function(event){
    $("button").click(function(){
      location.reload(true);
      });
    var input = $("input#numberInput").val();
    stringMaker(input);
    $("#output").text(resultsFinal);
    event.preventDefault();
  });
});
