//object/properties can be thought as key/value

function phoneticLookup(val){
  var result = ''
  // var result = lookup[val]
  var lookup = {
      'alpha': 'Adams',
      'bravo': 'Boston',
      'charlie': 'Chicago',
      'delta': 'Denver',
      'echo': 'Easy',
      'foxtrot': 'Frank'
  };
  return lookup[val];

  return result;
}

console.log(phoneticLookup('charlie'));

// testing objects for properties
// use .hasOwnProperty(propname) method to determine whether that object
// has the given property name. the method can only return True/false

var myObj = {
  gift:'pony',
  pet:'kitten',
  bed:'sleigh'
};

function checkObj(checkProp){
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return 'Not Found';
  }
}

console.log(checkObj('gift'));
