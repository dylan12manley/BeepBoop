var resultsFinal = [];
function stringMaker(input) {
  var resultsArray = [];
  var results = 0;
  for (var i = 0; i < input; i--){
    resultsArray.unshift(i)
  };
  console.log(results);

};
//   results.forEach(function(result) {
  // });
// if (result[i] === 3 ) {
  //   resultsFinal.push("I'm sorry, Dave. I'm afraid I can't do that.")
  //   return results;
  // }
  //  else if (result[i] === 2){
    //     resultsFinal.push("boop");
    // } else if (result[i] === 1){
      //     resultsFinal.push("Beep!");
      // }
      //   else {
        //     resultsFinal.push(result);
        // } return;

//Font End//
$(document).ready(function() {
  $("form#beep").submit(function(event){
    event.preventDefault();
    var input = $("input#numberInput").val();
    stringMaker(input);
    $("#output").text(resultsFinal);
  });
});
