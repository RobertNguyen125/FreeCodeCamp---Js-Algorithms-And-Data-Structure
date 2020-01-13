//1: return boolean values from function
function isLess(a,b){
  return a<b;
}

console.log(isLess(10,15));

//2: use return to stop pattern
function abTest(a,b){
  if (a<0||b<0){
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));
