//remove the first item in array then add the new item to the end of the array
function nextInLine(arr,item){
  var removed = arr.shift();
  arr.push(item);
  return removed;
}

var testArr = [1,2,3,4,5];

console.log('Before', JSON.stringify(testArr));
console.log(nextInLine([2], 1));
console.log('After', JSON.stringify(testArr));
