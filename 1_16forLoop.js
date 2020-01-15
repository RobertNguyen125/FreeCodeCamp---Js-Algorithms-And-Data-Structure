// for ([initialisation]; [condition]; [final expression])
// initialisation: executed once bfore the loop starts. define and set up loop variable
// condition: evaluated at the start of every loop iteration and will continue as long as it is true
// fina expression: executed at the end of each loop

//Example:
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

console.log(ourArray);

var myArray = [];
for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}

console.log(myArray);

//Ex1: iterate odd number with a For loop
var myArray = [];
for (var i = 1; i < 9; i+=2) {
  myArray.push(i);
}
console.log(myArray);

//Ex2: count backward with loop
var myArray = [];
for (var i = 9; i > 0; i-=2) {
  myArray.push(i);
}

console.log(myArray);

//Ex3: iterate through an array with For Loop
var arr = [10,9,8,7,6];
// NOTE: the length array is used as the index of the array
for (var i = 0; i <arr.length; i++) {
  console.log(arr[i]);
}
console.log(arr);

var myArr = [ 2,3,4,5,6];
var myTotal = 0;

for (var i = 0; i < myArr.length; i++) {
  myTotal += myArr[i];
}
console.log(myTotal);

//Ex4: Nesting For Loops
// for multi dimensional array
var arr =[
  [1,2], [3,4], [5,6]
];
var myMulti = 1
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    myMulti*=arr[i][j];
  }
};
console.log(myMulti);

// Function to multiply arrays
function multiplyAll(arr){
  var product = 1;
  // var arr =[[]];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j ++) {
      product*=arr[i][j];
    }
  }
  return product;
}

console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
