var factorial = function fac(num) {
  if (num === 1) {
    return 1;
  }
  return num*fac(num-1);
};

var final = factorial(5);
console.log(final);

//example: multiply
// loop
function multiply(arr,n) {
  var product = 1;
  for (var i =1; i <= n; i++) {
    product *= arr[i];
  }
  return product;
};
console.log(multiply([1,2,3],1));

// recursive
function multiply(arr, n) {
  if (n <= 1) {
    return arr[0];
  } else {
    return multiply(arr, n-1) *arr[n];
  }
}

function sum(arr,n) {
  if (n<=0){
    return arr[0];
  } else {
    return sum(arr, n-1)+arr[n];
  }
}
//console.log(sum([1], 0));
//console.log(sum([2,3,4], 1));
