// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-mconner89');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // input: array
    // output: number
    let filterOutput = _.filter(array, function(customerObj) {
        // filter out all of the male customers
        return customerObj.gender === 'male';
    });
    return filterOutput.length;
};

var femaleCount = function(array) {
    // input: array
    // output: number
    return _.reduce(array, function(prev, current) {
        // when to increment our seed 
            // if our customer object has a gender of female
            if(current.gender === 'female') {
                prev += 1;
            }
        // when to not increment our seeed
            // customer objects gender is not female
            return prev;
    }, 0);
};

// Find the oldest customer's name
var oldestCustomer = function(array) {
    // create oldest variable.
    let oldest = 0;
    // create name variable
    let name = '';
        //Loop through list of customer objects   
        _.filter(array, function(customerObj) {
            // test: is value of customers age object greater than value stored
            // in oldest
            if(customerObj.age > oldest) {
                // if true, set oldest to current customers age and store 
                // current customers name in the name variable
                oldest = customerObj.age;
                name = customerObj.name;
        }
    });
    // return name of oldest customer
    return name;   
};


var youngestCustomer = function(array) {
    // initialize youngest variable to the age of the first customer
    let youngest = array[0].age;
    // create empty name variable
    let name = '';
        //Loop through list of customer objects   
        _.filter(array, function(customerObj) {
            // test: is current customers age lower than current value stored
            // in youngest variable
            if(customerObj.age < youngest) {
                // if true, store current customers age in youngest variable and
                // store current customers name in name variable
                youngest = customerObj.age;
                name = customerObj.name;
        }
    });
    // return younbest customers name
    return name;   
};

var averageBalance = function(array) {
    // call reduce function to loop through each objet in array
    let sum2 = _.reduce(array, function sum(acc, currentVal, seed) {
        // take value from balance property, remove commas, slice off dollar 
        // sign, and convert to a floating integer
        let currency = parseFloat(currentVal.balance.slice(1).replace(/,/g,''));
        // add accumulator to current currency variable
        return acc + currency;
    }, 0);
    // return average balance
    return sum2 / array.length;
};

var firstLetterCount = function(array, letter) {
    // create count variable
    let count = 0;
    // loop through list of customer objects and apply function to them
    _.filter(array, function(customerObj) {
        // test: does first letter of a customers name match the letter input
        if(customerObj.name[0].toUpperCase() == letter.toUpperCase()) {
            // if true, increment count by one
            count++;
        }
    });
    // return count
    return count; 
};

var friendFirstLetterCount = function(array, customer, letter) {
    // create count variable
    let count = 0;
    // loop through list of customer objects and apply a function to them
    _.filter(array, function(customerObj) {
        // test: does customer's name match customer input
        if (customerObj.name == customer){
            // if true, create a list of that customers friends
            let friendsList = customerObj.friends;
            // loop through customers list of friends
            for(let i = 0; i < friendsList.length; i++) {
                // test: does the first letter of the value at the ith position
                // of the friendsList array match the letter input
                if (friendsList[i].name[0].toUpperCase() === letter.toUpperCase()) {
                    // if true, increment count by 1
                    count ++;
                }
            }
        }
    });
    // return count
    return count;
};

var friendsCount = function(array, searchName) {
    // crete empty array
    let newArray = [];
    // filter through main array
    _.filter(array, function(customerObj) {
        // each loop, create an array that contains the friends list of that customer
        let friendsList = customerObj.friends;
        // filter through array of friends list
        _.filter(friendsList, function(friendsObj) {
            // if the name property of the current element of friends list 
            // matches the search name, push the customers name into newArray
            if (friendsObj.name == searchName) {
                newArray.push(customerObj.name);
            }
        });
    });
    return newArray;
};

var topThreeTags = function(array) {
    // create array that contains all tags
    let list = [];
    _.map(array, function(value, key) {
        Array.prototype.push.apply(list, value.tags);
    });
    // create object that contains each tag and the number of times it appeared
    let tagCount = _.reduce(list, function(accObj, word){
        // if tag is already in the object, increment it by one
        if(accObj[word]) {
            accObj[word]++;
        // if not, add it and give it a value of 1
        } else {
            accObj[word] = 1;
        }
        // return tag list object
        return accObj;
    }, {});
    // create array that contains subarrays of each tag name and the number of
    // times it appeared
    let countArr = [];
    // loop through tagCount object and push tag name and counts into countArr
    for(let key in tagCount) {
        countArr.push([key, tagCount[key]]);
    }
    // sort countArr in descending order by number of appearances
    countArr.sort(function(a, b) {
        return b[1] - a[1];
    });
    // take three most common tags
    let top3Counts = countArr.slice(0,3);
    // take just the tags (not the count) and put them into a new array
    let top3Tags = _.map(top3Counts, function(prevArray) {
        return prevArray[0];
    });
    return top3Tags;
};

var genderCount = function(array) {
    // create new object
    let returnObj = {
        female: _.reduce(array, function(f, current) {
            // test: value of gender key of current element is female 
            if(current.gender === 'female') {
                // if true, increment seed by 1
                f += 1;
            }
            // return seed
            return f;
        }, 0),
        male: _.reduce(array, function(m, current) {
            // test: value of gender key of current element is male 
            if(current.gender === 'male') {
                // if true, increment seed by 1
                m += 1;
            }
            // return seed
            return m;
        }, 0),
        'non-binary': _.reduce(array, function(n, current) {
            // test: value of gender key of current element is non-binary 
            if(current.gender === 'non-binary') {
                // if true, increment seed by 1
                n += 1;
            }
            // return seed
            return n;
        }, 0)
    };
    // return returnObj
    return returnObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
