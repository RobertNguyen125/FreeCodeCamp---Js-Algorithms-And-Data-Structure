var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
// lookup to match the name first then the property inside objects
function lookUpProfile(name,prop) {
  for (var i = 0; i < contacts.length; i++){
    if (contacts[i]['firstName'] == name) {
      if (contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      } return 'No such property';
    }
  } return 'No such contact';
}



console.log(lookUpProfile('Akira', 'likes'));
