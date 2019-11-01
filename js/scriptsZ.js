//Backend//
// var threes = (3, 13, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 43, 53, 63, 73, 83, 93);
// var twos = (2, 12, 20, 21 , 22, 24, 25 , 26, 27, 28, 29, 42, 52, 62, 72, 83, 92);
// var ones = (1, 10, 11, 14, 15, 16, 17, 18, 19, 41, 51, 61, 71, 81, 91, 100);

var resultsFinal = [];
var results = [0, 1, 2, 3, 4]
console.log(results);

function stringMaker(input) {
  console.log(input);
// for (input[i])  (i = 0; i < input.length ; i++)
  results.forEach(function(result) {
    if (result[i] === 3 ) {
      resultsFinal.push("I'm sorry, Dave. I'm afraid I can't do that.")
      console.log(results);
    // } if else (result[i] === 2){
    //     resultsFinal.push("boop");
    // } if else (result[i] === 1){
    //     resultsFinal.push("Beep!");
    }
      else {
        resultsFinal.push(result);
    }
  break;


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
