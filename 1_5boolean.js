//true/false testing
function test(myCondition){
  if (myCondition){
    return "It was true";
  }
  return 'It was false';
}

console.log(test(true));
console.log(test(false));

//more true/false testing
function trueOrFalse(wasThatTrue){
  if(wasThatTrue){
    return "Yes, it was true";
  }
  return 'No, it was false';
}

console.log(trueOrFalse(false));
