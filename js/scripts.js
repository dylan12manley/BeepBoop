var resultsFinal = [];

function stringMaker(input) {
  var results = input
  results.forEach(function(result) {
    if (result[i] === 3 ) {
      resultsFinal.push("I'm sorry, Dave. I'm afraid I can't do that.")
      console.log(results);
    } if else (result[i] === 2){
        resultsFinal.push("boop");
    } if else (result[i] === 1){
        resultsFinal.push("Beep!");
    }
      else {
        resultsFinal.push(result);
    } return;
  });
  console.log(resultsFinal);
};

//Font End//
$(document).ready(function() {
  $("form#beep").submit(function(event){
    event.preventDefault();
    var input = $("input#numberInput").val();
    stringMaker(input);
    $("#output").text(resultsFinal);
  });
});
