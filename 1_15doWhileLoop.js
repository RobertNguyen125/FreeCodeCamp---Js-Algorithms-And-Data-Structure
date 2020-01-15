// do ... while loop because it will execute the do before the while

var ourArray =[];
var i = 5;
while (i<5) {
  ourArray.push(i);
}
console.log(ourArray); // NOTE: the result is empty  because i =5

var ourArray =[];
var i =5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log(ourArray) // NOTE: the result is only 5 because do{} is executed first
