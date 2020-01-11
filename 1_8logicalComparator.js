// &&: and

function testLogicalAnd(val){
  if (val <= 50 && val >=25){
    return 'Yes';
  }
  return 'No';
}

console.log(testLogicalAnd(20));

// ||: or

function testLogicalOr(val){
  if (val < 10 || val > 50){ // NOTE: this will be inclusive of 10 and 50
    return 'Outside';
  }
  return 'Inside';
}

console.log(testLogicalOr(10));
