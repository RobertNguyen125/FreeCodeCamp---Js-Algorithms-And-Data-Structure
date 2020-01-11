// in gold, each game has a par, the average number of strokes a golfer
// is expecter to make in order to sink the ball in a hole to complete the play
// depending on how far abobe  or below 'par' your strokes are , there
// is a different name

var names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bpgey', 'Go Home!']

function golfscore(par, strokes) {
  if (strokes == 1){
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

console.log(golfscore(4,4));
