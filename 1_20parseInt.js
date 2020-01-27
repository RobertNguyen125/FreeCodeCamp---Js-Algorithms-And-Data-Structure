//parseInt() to convert str to int

function convertToInteger(str) {
    return parseInt(str);
}

console.log(typeof(convertToInteger("56")));

//parseInt() with Radix. radix can be an int between 2 and 36
// parseInt(string, radix);
function convertToInteger(str) {
  return parseInt(str,2);
}

console.log(convertToInteger('10011'));
