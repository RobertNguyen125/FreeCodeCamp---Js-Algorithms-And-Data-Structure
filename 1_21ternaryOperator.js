// condition ? statement-if-true : statement-if-false;
// function findGreater(a,b){
//   if (a >b) {
//     return "a is greater";
//   } else {
//     return 'b is greater'
//   }
// }

function findGreater(a, b) {
  return a>b ? a + 'is greater' : b + ' is greater';
}
console.log(findGreater(4,6));

function checkEqual(a, b) {
  return a == b? 'Equal' : 'Not Equal';
}
console.log(checkEqual(1, 2));

//multiple ternary operators
function findGreaterOrEqual (a,b) {
  if (a === b){
    return 'a and b are equal';
  } else if (a > b) {
    return 'a is greater';
  } else {
    return 'b is greater';
  }
}

function findGreaterOrEqual(a,b) {
  return (a === b)? 'a and b are equal' :
  (a > b) ? 'a is greater':
  'b is greater';
}

function checkSign(num) {
  return (num > 0)? 'positive':
  (num < 0)? 'negative':
  'zero';
}

console.log(checkSign(-10));
