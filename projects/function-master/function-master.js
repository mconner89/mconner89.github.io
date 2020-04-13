//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// should take an object and return all of its values in an array
function objectValues(object) {
    // creates empty array
    const resultArr = [];
    // for loop that loops over object parameter
    for(let key in object) {
        // pushed current values to an array
        resultArr.push(object[key]);
    }
    // returned array
    return resultArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object and return all its keys in a string each separated with a space
function keysToString(object) {
    // initialized empty string variable
    let resolved = '';
    // for loop that loops through object input
    for(let key in object) {
        // added the values of key onto resolved
        resolved += key;
        // added a space after each key
        resolved += ' ';
    }
    // returns string with last empty space character removed
    return resolved.slice(0, resolved.length - 1);
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object and return all its string values in a string each separated with a space
function valuesToString(object) {
    // initializes newStr variable to an empty string
    let newStr = '';
    // for loop that loops through object
    for(let key in object){
        // tests if each property value is a string
        if(typeof object[key] === 'string'){
            // added the string onto newStr
            newStr += object[key];
            // added a space after each key
            newStr += ' ';
        }
    }
    // returns newStr with last empty space character removed
    return newStr.slice(0, newStr.length - 1);
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {
    // tests that collection input is an array
    if(Array.isArray(collection)) {
        // returns array if true
        return('array');
    }
    // returns object otherwise
    return('object');
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    // create firstLet variable that is the first character of string capitalized
    let firstLet = string[0].toUpperCase();
    // creates rest variable that is the rest of string
    let rest = string.slice(1);
    // combines firstLet and rest
    let newWord = firstLet + rest;
    // returns new word
    return newWord;
}


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {
    // create empty array
    let result = [];
    // create variable that is an array of string split at the space character
    let arr = string.split(' ');
    // for loop that loops through array
    for(let i = 0; i < arr.length; i++) {
        // create variable that is first character of i element of arr capitalized
        let current = arr[i][0].toUpperCase();
        // add rest of element to capitalized first character
        current += arr[i].slice(1);
        // pushes complete word into result array
        result.push(current);
    }
    // returns result array as a string joined by space character
    return result.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Return name property of object input
function welcomeMessage(object) {
    // Pull out the name of the object
    let name = object.name;
    // Pull out the first letter of the name and Capitalize it
    let letter = name.slice(0,1).toUpperCase();
    // Make a new Uppercased name
    let upper = letter + name.slice(1);
    return `Welcome ${upper}!`;
}


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // given input object, return the name and species in a string
    let name = object.name.slice(0, 1).toUpperCase() + object.name.slice(1);
    let species = object.species.slice(0, 1).toUpperCase() + object.species.slice(1);
    return(`${name} is a ${species}`);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // Searching object for noises property
    if (Array.isArray(object.noises)){
        // Checks that noises isn't empty
        if(object.noises.length === 0){
            return 'there are no noises';
        } else {
            // Returns the noises array as string seperated by a space
            return object.noises.join(' ');
        }
    } else {
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // takes a string and a word and looks for 'word' in string
    // breaks string into an array of words
    let arr = string.split(' ');
    // run a for loop over arr looking for word
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === word) {
            // returns true if found
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // takes name and object and adds name to object's friends array
    object.friends.push(name);
    return object;
}


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // take a name and an object 
    // if name is in friends array of object, return true
    // if object has a friends array:
    if(object.hasOwnProperty('friends')) {
        // for loop pulling out each friend from the friends array
        for(let friend of object.friends) {
            // if friend equals name, return true
            if(friend === name) {
                return true;
            }
        }
    }
    // otherwise, return false
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // Takes a name and array
    // Return an array of all the names that the given name is not friends with
    // Set an empty array to hold the nonFriends
    let list = [];
    // Loops through objects in the array
    for (let i = 0; i < array.length; i++){
        // Create new variable that is list of friends as a string
        let friendsList = array[i].friends.join(' ');
        // Checks if the given name is not the same as name in the array
        if(array[i].name != name){
            // Searches for the given name in the list of friends
            if(friendsList.indexOf(name) < 0){
            // If no match pushes the current name into our list variable
            list.push(array[i].name);
          }
        }
    }
    // Return list of nonfriends
    return list;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // Update the key property on object with value
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // Loop through array
    for(let i = 0; i < array.length; i++){
        // Searches object for elements of array
        if(object.hasOwnProperty(array[i])){
            // Deletes properties
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // takes an array and returns an array with all the duplicates removed
    // run a for loop over the array
    for(let i = 0; i < array.length; i++) {
        // run a for loop on the rest of the array
        for(let j = i + 1; j < array.length; j++) {
            // if the data at i matches the data at j, remove it
            if(array[i] === array[j]) {
                // removes if match
                array.splice(j, 1);
                // iterates backwards to ensure no elements are skipped
                j--;
            }
        }
    }
    // returns array
    return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}