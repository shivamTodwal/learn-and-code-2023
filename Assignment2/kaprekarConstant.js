let num = "2111";
let iterationCount = 0;

kaprekarRoutine(num);

function isFourDigit(num) {
  return num.length === 4;
}

function addLeadingZero(num) {
  return "0" + num;
}

function convertIntoDescending(num) {
  let digitsArray = num.split("");
  digitsArray.sort();
  digitsArray.reverse();
  return digitsArray.join("");
}
function convertIntoAscending(num) {
  let digitsArray = num.split("");
  digitsArray.sort();
  return digitsArray.join("");
}

function kaprekarRoutine(num) {
  iterationCount++;
  if (!isFourDigit(num)) {
    num = addLeadingZero(num);
  }

  let numInDescending = convertIntoDescending(num);
  let numInAscending = convertIntoAscending(num);
  let difference = numInDescending - numInAscending;

  if (difference === 6174)
    console.log(
      `Kaprekar's constant is reached after ${iterationCount} iterations`
    );
  else kaprekarRoutine(String(difference));
}

module.exports = { isFourDigit, addLeadingZero, kaprekarRoutine, convertIntoAscending, convertIntoDescending }


