
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(numbers){
    // creates empty string variable to hold the #s
    var tri = '';  
    // start: 1
    // stop: numbers
    for(var i = 1; i <= numbers; i++) {
      // takes tri variable and adds a # to it for every loop
      tri += '#';
      // logs tri variable every loop
      console.log(tri);
  }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function named fizzBuzz that accepts two inputs
function fizzBuzz(start, end) {
  // start: start input
  // stop: end input
  for(var i = start; i <= end; i++) {
    // checks if i is divisible by 3 and 5
    if ((i % 3 === 0) && (i % 5 === 0)) {
      // if true, prints => fizzbuzz
      console.log('fizzbuzz');
    // checks if i is divisible by 3
    } else if(i % 3 === 0) {
      // if true, prints => fizz
      console.log('fizz');
    // checks if i is divisible by 5
    } else if(i % 5 === 0) {
      // if true, prints => buzz
      console.log('buzz');
    // if no other statements are true, prints => i
    } else {
      console.log(i);
    }
  } 
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  var hashes = '';
  // loop that prints horizontal size
  for(var i = 1; i <= number; i++) {
    // loop that prints vertically
    for(var ii = 1; ii <= number; ii++) {
      // checks if we're on an even or odd space
      if ((ii + i) % 2 === 0) {
        // if odd, place a ' ' in the row
        hashes += ' ';
      } else {
        // if even, place a '#' in the row
        hashes += '#';
      }
    }
    // place a line break after each loop
    hashes += '\n';
  }  
  // prints chessboard
  console.log(hashes);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
