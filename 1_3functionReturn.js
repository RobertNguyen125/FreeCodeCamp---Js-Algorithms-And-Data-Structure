function plusThree(num){
  return num + 3;
}

console.log(plusThree(5));

// undefined value returned from a function
// not all function need return statement, without the statement
// the code inside function will be processed but the returned value is undefined

var sum=0;
function addSum(num){
  sum = sum+num;
}

console.log(addSum(3)); // NOTE: the result is undefined

var sum = 0;
function addThree() {
  sum = sum + 3;
}

var sum = 0;
function addFive(){
  sum = sum + 5;
}

addThree();
addFive();

// Assignment with a returned value
var processed = 0;
function   processArg(num){
  return (num+3)/5;
}
processed = processArg(7);
console.log(processed);
