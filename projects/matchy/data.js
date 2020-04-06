/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// initialize variable named animl to an empty object
var animal ={};

// use dot notation to give animal a property named species 
animal.species = 'hyena';

// use bracket notation to give animal a property called name
animal['name'] = 'Joseph';

// give animal a property called noises with an empty array value
animal.noises = [];

// print your animal to the console
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create an empty array named noises
var noises = [];

// fill the first element of noises using bracket notation
noises[0] = 'hahaha';

// use a function (.push here) to add a noise to the end of noises
noises.push('grrr');

// use a function (.unshift here) to add an element to the beginning of noises
noises.unshift('chirp?');

// soft code an element onto the end of noises using bracket notation
noises[noises.length] = ('bark, maybe?');

// log the length, last element and entire noises array
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assign the noises property on animal to the noises array using bracket notation
animal['noises'] = noises;

// add another noise to the noises property on animal
noises.push('maybe they purr?');

// log the animal object
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create empty animals array
var animals = [];

// push animal into animals
animals.push(animal);

// log animals
console.log(animals);

// create duck and assign it the appropriate data
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

// push duck to animals
animals.push(duck);

// log animals
console.log(animals);

// create two more animal objects with the appropriate properties
var cat = {
    species: 'cat',
    name: 'Brenda',
    noises: ['meow', 'purr', 'hiss', 'yowl']
};
var walrus = {
    species: 'walrus',
    name: 'Dexter',
    noises: ['snort', 'grunt', 'bellow', 'snore']
};

// add the new animal objects to the animals object
animals.push(cat);
animals.push(walrus);

// log animals and the length of animals
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create friends variable with appropriate data structure
var friends = [];   // Array was chosen because we are making a list and arays 
                    // can hold multiple string values

// function called get random that takes the animals array as a parameter
function getRandom(param) {
    // returns a random index value of the animals array
    return(Math.floor(Math.random() * param.length));
}

// takes a random index value from the animals array and pushes its name value into the friends array
friends.push(animals[getRandom(animals)]['name']);

// logs the friends array
console.log(friends);

// adds the friends list as a property to the animal object in the animals array
animal['friends'] = friends;

// logs the animal object in the animal array
console.log(animal);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}