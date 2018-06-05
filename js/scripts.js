$(document).ready(function(){
  $("form#factorial").submit(function(event){
    event.preventDefault();
    calculateFactorial();
  });

  $("form#palindrome").submit(function(event){
    event.preventDefault();
    calculatePalindrome();
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
    $("#resultFactorial").text(original + "! is " + result);
    $("#userNumber").val("");
  }

  function calculatePalindrome() {
    var phrase = $("#userEntry").val();
    var newPhrase = phrase.split("").join("");
    var reversedPhrase = phrase.split("").reverse().join("");
    var updatedPhrase = newPhrase.replace(/[" "]/gi, '');
    var newReversedPhrase = reversedPhrase.replace(/[" "]/gi, '');

    if(updatedPhrase === newReversedPhrase) {
      $("#resultPalindrome").text(updatedPhrase + " " + newReversedPhrase + ". This is a palindrome!");
    } else {
      $("#resultPalindrome").text(updatedPhrase + " " + newReversedPhrase + ". Not a palindrome!");
    }

  }



});
