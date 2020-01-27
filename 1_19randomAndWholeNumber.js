// Math.random(): generate a random decimal number between 0 (inclusive) and 1 (exclusive)

function randomFraction() {
  return Math.random();
}
console.log(randomFraction());

// Math.floor(): to round the number down to its nearest whole number

function randomWholeNumber(){
  return Math.floor(Math.random() *10);
}
console.log(randomWholeNumber());

// generate random number falls between a range of 2 specific numbers
// need to define min and max
// Math.floor(Math.random() * (max - min + 1)) + min
// create function randomRange() take myMin and myMax and return a
// random number that is >= myMin && <= myMax

function randomRange(myMin, myMax) {
  // NOTE: Math.random() is to create random numbers
  // (myMax - myMin + 1) so we can include myMax
  return Math.floor(Math.random() * (myMax - myMin + 1)) +myMin;
}
console.log(randomRange(5,15));
