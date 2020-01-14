var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};


// function updateRecords(id, prop, value){
//   // prop isnt 'tracks and value isnt empty, update the value for that record album's properties
//   if (prop != 'tracks' && value!= '') {
//     collection[id][prop] = value;
//   // if prop is tracks but the album doesnt have tracks property, create an empty array
// } if (prop == 'tracks' && collection[id][prop] == undefined) {
//       collection[id][prop] = [];
//   // if prop is tracks and value isnt empty, push value onto the end of ablbum's existing tracks array
// } if (prop == 'tracks' && value !== '') {
//       //collection[id][tracks].push(value);
//       collection[id][prop].push(value);
//   } if (value == '') {
//     delete collection[id][prop];
//   }
//   console.log(collection);
//   return collection

// };

// cleaner version of the code
function updateRecords(id, prop, value) {
  if (prop != 'tracks' && value != '') {
    collection[id][prop] = value;
  } if (prop == 'tracks' && collection[id][prop] == undefined) {
    collection[id][prop] =[];
  } if (prop == 'tracks' && value != '') {
    collection[id][prop].push(value);
  } if (value == ''){
    delete collection[id][prop];
  }
  return collection;
}




updateRecords(5439, 'artist', 'ABBA');
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(2468, "tracks", "Free");
updateRecords(2548, "tracks", "");
updateRecords(1245, "album", "Riptide");

console.log(collection);

// NOTE: if the keys is number, must use bracket instead of '.'
