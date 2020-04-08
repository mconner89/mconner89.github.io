/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function called search that accepts two parameters
function search(animals, string) {
    // for loop that loops through the 1st input of the funtion
    // start: 0
    // stop: # of elements in arr input
    for(var i = 0; i < animals.length; i++) {
        // if statement that checks if the value of the name key of the ith element
        // of the animals array is equal to the string input
        if (animals[i]['name'] == string) {
            // if true, returns the ith value of the animals array
            return(animals[i]);
        }
    }
    // if no matches were found, returns null
    return(null);
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function called replace that accepts three parameters: the animals array,
// the name of an animal, and a replacement object
function replace(animals, name, replacement) {
    // for loop that loops through the animals array
    // start: 0
    // stop: # of elements in animals array
    for (var i = 0; i < animals.length; i++) {
        // if statement that checks if the value of name key of the ith element 
        // of the animals array is equal to the name input
        if (animals[i]['name'] == name) {
            // if true, replaces the ith element of the animals array with the 
            // object input
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function named remove that accepts two inputs: the animals array
// and a name
function remove(animals, name) {
    // for loop that loops through the animals array
    // start: 0
    // stop: # of elements in animals array
    for (var i = 0; i < animals.length; i++) {
        // if statement that checks if the value of name key of the ith element 
        // of the animals array is equal to the name input
        if (animals[i]['name'] === name) {
            // if true, removes the ith element of the animals array
            animals[i] = '';
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function called add that accepts two inputs: the animals array and an animal 
// object
function add(animals, animal) {
    // creates an empty list array
    var list = [];
    // for loop that loops through the animals array
    // start: 0
    // stop: # of elements in the animals array
    for(var i = 0; i < animals.length; i++) {
        // adds each animals name to the name array
        list.push(animals[i]['name']);
    }
    // check that animal has a name property that is not empty, that each animal
    // has a species property that is not empty, and that the name of the animal
    // passed in through the animal input is not included in the list array that
    // contains all animals names
    if ((animal.name != '') && (animal.species != '') && (list.includes(animal['name']) === false)) {
        // if true, push the animal object from the animal input onto the end of
        // the animals array
        animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
