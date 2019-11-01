var resultsFinal = [];
var input = [0,1,2,3,4]

function stringMaker(input) {
  var results = result
    if (result[i] === 3 ) {
      resultsFinal.push("I'm sorry, Dave. I'm afraid I can't do that.")
      return results;
    }
     else if (result[i] === 2){
        resultsFinal.push("boop");
    } else if (result[i] === 1){
        resultsFinal.push("Beep!");
    }
      else {
        resultsFinal.push(result);
    } return;
    results.forEach(function(result) {
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
