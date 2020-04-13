// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  // takes our input array and feeds it into the reduce method
  // reduce method accepts two parameters, flat and current
  // current is the starting value, flat is the next value in line
  // our starting value is set to an empty array
  // the current value is then concatenated onto the flat value
  // the final flat value is returned
  return arr.reduce((flat, current) => flat.concat(current), []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// function named loop that accepts four parameters: a value, a test function,
// an update function, and a body funtion
function loop(start, test, update, body) {
  // for loop that starts on the start input, then runs the test function input
  // on value. Loop continues as long as test(value) returns true. If true, the
  // body function input is executed on value. Finally, value is updated to the 
  // result of running the update funcion input on value.
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// Inputs: array, predicate function
// Outputs: true if every element of array returns true; false otherwise
// Constraints: must enter an array for first parameter, function for second
// Edge cases: N/A
function every(array, predicate) {
  // for of loop that loops through each element of the array input
  for (let element of array) {
    // if statement that tests if executing the predicate function input on each
    // element of the array input returns false
    if (!predicate(element)) return false;}
  // if nothing returns false, return true
  return true;
  }


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// function dominantDirection that computes the dominant writing direction in a 
// string of text
function dominantDirection(texts) {
  // console.log(textScripts(texts));
  // takes items and groupNames
  // uses a for of loop that iterates over item of items
  // looks through array and identifies a specific index
  // if it exists, pushes it into array
  let countArr = countBy(texts, function(text){
    // we want to return a name for our function
    let characterInfo = characterScript(text.charCodeAt());
    // console.log(text);
    // console.log(characterInfo);
    // want a name of 'rtl' or 'rtl' and how often it occurs
    if(characterInfo) {
      return characterInfo.direction;
    }
  });
  // sort my countArr by the occurence of direction count
  countArr.sort(function(a, b){
    return b.count - a.count;
  });
    // console.log(countArr);
    return countArr[0].name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
