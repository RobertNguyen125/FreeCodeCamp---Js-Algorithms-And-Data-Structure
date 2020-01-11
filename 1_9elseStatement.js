// else statement
function testElse(val){
  var result = '';
  if (val > 5){
    result =  'Bigger than 5';
  }
  else{
    result = 'Smaller than 5';
  }
  return result;
}
console.log(testElse(4));

//else if statement
function testElfeIf(val){
  var result = '';
  if (val >10){
    return result = 'Bigger or Equal 10';
  }
  else if (val < 5) {
    return result = 'Smaller than 5';
  }
  else {
    return result = 'Between 5 and 10';
  }
}

console.log(testElfeIf(7));
