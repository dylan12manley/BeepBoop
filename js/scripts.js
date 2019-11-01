//Backend//
// var threes = (3, 13, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 43, 53, 63, 73, 83, 93);
// var twos = (2, 12, 20, 21 , 22, 24, 25 , 26, 27, 28, 29, 42, 52, 62, 72, 83, 92);
// var ones = (1, 10, 11, 14, 15, 16, 17, 18, 19, 41, 51, 61, 71, 81, 91, 100);


function stringMaker(input) {
  var results = [];
  console.log(results);
  console.log(input);
  for (var i = 0; i < (input.length) ; i++) {
    if (input[i] === 3 ) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that.")
      console.log(results);
    } else {
        reslts.push(results);
    }
    console.log(results);
  break;


  }
};

//Font End//
$(document).ready(function() {
  $("form#beep").submit(function(event){
    event.preventDefault();
    var input = $("input#numberInput").val();
    stringMaker(input);
    $("#output").text(outputFinal);
  });
});
