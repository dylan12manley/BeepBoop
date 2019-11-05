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
    if (resultsArray[i] === 3 || (resultsArray[i] - 3) % 10 === 0 || resultsArray[i] > 299 && resultsArray[i] < 400 || resultsArray[i] > 2999 && resultsArray[i] < 4000 || resultsArray[i] > 29999 && resultsArray[i] < 40000) {
      resultsFinal.push(" I'm sorry, Dave. I'm afraid I can't do that.")
      return;
      console.log(resultsFinal);
    }
    else if (resultsArray[i] === 2 || (resultsArray[i] - 2) % 10 === 0 || (resultsArray[i] >= 20 && i <= 29) || resultsArray[i] > 199 && resultsArray[i] < 300 || resultsArray[i] > 1999 && resultsArray[i] < 3000 || resultsArray[i] > 19999 && resultsArray[i] < 30000){
      resultsFinal.push(" Boop!");
    } else if (resultsArray[i] === 1 || resultsArray[i] > 9 && resultsArray[i] < 20 || (resultsArray[i] - 1) % 10 === 0 || resultsArray[i] > 99 && resultsArray[i] < 200 || resultsArray[i] > 999 && resultsArray[i] < 2000 || resultsArray[i] > 9999 && resultsArray[i] < 20000 || resultsArray[i] > 99999 && resultsArray[i] < 200000 ){
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
