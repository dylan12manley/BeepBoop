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
    if (resultsArray[i] % 3 === 0) {
      resultsFinal.push(" I'm sorry, Dave. I'm afraid I can't do that.")
      return;
      console.log(resultsFinal);
    }
    else if (resultsArray[i] === 2 || resultsArray[i] === 12 || (resultsArray[i] >= 20 && i <= 29)){
      resultsFinal.push(" Boop!");
    } else if (resultsArray[i] === 1 || resultsArray[i] > 9 && resultsArray[i] < 20 ){
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
