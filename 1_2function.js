// 1: reusableFunction
function reusableFunction(){
  console.log('Hi World');
}
// call the function
reusableFunction();

//2:  function with multiple variables
function functionWithArgs(a,b){
  console.log(a+b);
}
// call the function
functionWithArgs(2,4);

// 3: Global and local scope
// a:
var myGlobal;
myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal=5
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//b:
var someVar ='Hat';
function myFun(){
  var someVar = 'Head';
  return someVar;
}

//call the function
console.log(myFun()); // NOTE: the result is "Head" because someVar was declared inside Function

// c:
var outerWear = 'T-Shirt';

function myOutfit(){
  var myOutfit = 'sweater';
  return myOutfit;
  return outerWear;
}

console.log(myOutfit()); // NOTE: the result is sweater
