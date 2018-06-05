$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    calculateFactorial();
  });

  function calculateFactorial() {
    var number = parseInt($("#userNumber").val());
    var original = number;
    var startVal = (number-1);

    if (number === 0) {
      number = 1;
    } else if (number > 0) {
      for (startVal; startVal>=1; startVal--) {
        number *= startVal;
      }
    } else {
      startVal = number + 1;
      for (startVal; startVal<=-1; startVal++) {
        number *= -startVal;
      }
    }
    addResult(number, original);
  }

  function addResult(result, original) {
    $("#result").text(original + "! is " + result);
    $("#userNumber").val("");
  }
});
