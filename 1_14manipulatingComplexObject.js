// JavaScript Object Notation (JSON): a related  data interchange format used to store data

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }, // NOTE: must be ','
  {
    'artist': 'Rebecca Black',
    'title': 'Friday',
    'release_year': 2010,
    'formats': [
      'online',
      'CD',
      'LP'
    ]
  }
];
//console.log(myMusic);

// Access Nested object
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

myGloveBox = myStorage.car.inside['glove box'];
console.log(myGloveBox);

// Access Nested array
var myPlants = [
  {
    type: 'flower',
    list: [
      'rose',
      'tulipc',
      'dandelion'
    ]
  },
  {
    type:'tree',
    list:[
      'fir',
      'pine',
      'birch'
    ]
  }
]

var secondTree = myPlants[1].list[1];
console.log(secondTree);
