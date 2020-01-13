// object is similar to array, but instead of uisng indexes to access and modify data
// we use properties

// ex1:
var myDog = {
  'name': 'Dog',
  'legs': 4,
  'tail': 'None',
  'breed': 'Vietnamese',
  'like': ['Bone', 'Catch']
}

console.log(myDog);

// access object properties: we can use (.) or []
var testObj ={
  'hat': 'ballcap',
  'shirt': 'jersey',
  'shoes': 'cleats'
}
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);

//
var testObj = {
  'an entree': 'hamburger',
  'my side': 'veggies',
  'the drink': 'water'
}

var entreeValue =  testObj['an entree']; // NOTE: using the quote because we are using the name of the variable
var drinkValue = testObj['the drink'];

console.log(entreeValue);
console.log(drinkValue);

// access object properties with variable
var dogs ={
  Fido:'Butt', Hunter:'Doberman', Snoopie:'Beagle'
}

var myDog = 'Hunter';
console.log(dogs[myDog]); // NOTE: no need for the quotation because we directly use the variable inside the object

var someOjb = {
  propName:'John'
};

function propPrefix(str){
  var s = 'prop';
  return s + str
};

var someProp = propPrefix('Name'); // NOTE: someProp holds the value of propName
console.log(someOjb[someProp]);

// update object properties
var myDog = {
  'name': 'Coder',
  'legs': 4,
  'tails': 1,
  'friends': ['freeCodeCamp Camper']
}

myDog['name']= 'Happy Coder';
console.log(myDog['name']);
myDog.name = 'Happy Happy Coder';
console.log(myDog.name);

// adding property to object
myDog['bark'] = 'go go';
console.log(myDog);

//delete property

delete myDog['tails'];
console.log(myDog);
