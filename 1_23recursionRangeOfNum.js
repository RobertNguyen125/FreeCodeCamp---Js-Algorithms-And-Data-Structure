function rangeOfNumbers(startNum, endNum) {
  if ( endNum < startNum){
    return [];
    } if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers =   rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
}

console.log(rangeOfNumbers(10,4));
