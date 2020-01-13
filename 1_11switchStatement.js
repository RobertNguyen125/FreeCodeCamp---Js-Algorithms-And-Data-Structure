
// 1: basic of case statement and swithc()
function caseInSwitch(val){
  var answer = '';
// the variable in switch() will be switched
  switch(val){
    case  1:
      return 'alpha';
      break;
    case  2:
      return 'beta';
      break;
    case  3:
      return 'gamma';
      break;
    case  4:
      return 'delta';
  }
  return answer;
}

console.log(caseInSwitch(1));

//default statement: lie the else
function switchOfStuff(val) {
  var answer = ''
  switch(val) {
    case 'a':
      return 'apple';
      break;
    case 'b':
      return 'bird';
      break;
    case 'c':
      return 'cat';
      break;
    default:
      return 'stuff';
      break;
  }
  return answer
}

console.log(switchOfStuff('w'));

//3 multiple identical options in switch statement

function sequentialSizes(val) {
  var answer = '';
  switch(val){
    case 1:
    case 2:
    case 3:
      return 'Low';
      break;
    case 4:
    case 5:
    case 6:
      return 'Medium';
      break;
    case 7:
    case 8:
    case 9:
      return 'High';
      break;
  }
  return answer;
}
console.log(sequentialSizes(1));

//4: replacing if else chains with switch
function chainToSwitch(val) {
  var answer = '';
  switch(val){
    case 'bob':
      return 'Marley';
      break;
    case 42:
      return 'The Answer';
      break;
    case 1:
      return 'There is no #1';
      break;
    case 99:
      return 'Missed me by this much';
      break;
    case 7:
      return 'Ate Nine';
      break;

  }
  return answer;
}
