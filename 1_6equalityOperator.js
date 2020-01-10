function testEqual(val){
  if(val==12){
    return  'Equal';
  }
  return 'Not Equal';
}

console.log(testEqual(10));
console.log(testEqual('12'));

// strict equality ===, '12'!= 12

// Compare different value

function compare(a,b){
  if(a===b){
    return 'Equal';
  }
  return 'Not equal';
}

console.log(compare(2,'2'));

// strict inequality !==

function testStrictNotEqual(val){
  if (val!==17){
    return 'Not equal';
  }
  return 'Equal';
}

console.log(testStrictNotEqual('17')); // NOTE: this is not equal
