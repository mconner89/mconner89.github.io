/**
 * Loops
 * 
 * 0. Intro
 * Loops are used to execute a block of code multiple times, each time using a different 
 * value. There are several different kins of loops, but they are allessentially 
 * repeating an action some number of times.
 * 
 * 1. While, for, and for-in loops
 * For loops will repeat until a specified condition evaluates to false. A for loop looks
 * like this:
 * 
 * for (initialExpression; condition; increment) {
 *  code to execute;
 * }
 * 
 * In for loops, the initial expression is executed once, the condition is evaluated at 
 * every loop and stops the loop when it is evaluated as false, and the increment is 
 * executed after after the code to execute block is executed.
 * 
 * A while statment is executed as long as a specific condition is evaluated to true. A 
 * while statement looks like:
 * 
 * while(condition) {
 *  statement
 * }
 * 
 * In a while loop, the condition test occurs before the statement block is executed. if 
 * the condition tests true, then statement is executed and condition is tested again. 
 * 
 * The for-in loop is used specifically for looping through the properties of an object. 
 * it looks like this:
 * 
 * for (variable in object) {
 *  statement
 * }
 * 
 * 2. Counting up and counting backwards in loops
 * Although a loop is typically used to loop forward by incrementing a specified 
 * variable, loops can also be used to loop backwards by decrementing a specified 
 * variable. These loops follow the same syntax, but use a decrement operator to count 
 * down instead of up.
 * 
 * 3. Looping over an array
 * Objects outside of the loop can be accessed while looping. This can be used to loop
 * over objects in an array. Looping over an array uses the same syntax as normal loops, 
 * but feeds the variable corresponding to the array into the statement to be executed. 
 * The .length string method can be used in the initial loop decleration to sync the 
 * stopping point to the length of the array. Arrays can also be looped over forward or
 * backwards in this fashion.
 * 
 * 4. Looping over an object
 * The for-in loop is used specifically to loop over an object. It loops throughevery 
 * key-property pair in the object.
 * 
 */
 
/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                              1. While and for loops
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

var number = 0; 
// initializes number with a value equal to 0

while(number < 10){
// declares a while loop that will execute as long as number is less than 10
 console.log(number);
 // each pass through this while loop will print the value of number to the console
 number++;
 // each pass through this loop will increment number by one
}
// prints => 0 1 2 3 4 5 6 7 8 9

for (var i = 0; i < 10; i++) {
// declares a for loop that creates a variable i and sets it equal to 0.
// tells the loop to continue as long as i is less than 10.
// tells the loop to increment i by 1 each time it finishes a pass.
 console.log(i);
 // prints the value of i to the console each pass through the loop
}
// prints => 0 1 2 3 4 5 6 7 8 9

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    2. Counting backwards in while and for loops
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

number = 10; 

// re-initializes number to a value equal to 10
while(number > 0){
// declares a while loop that will execute as long as number is greater than 10
 console.log(number);
 // each pass through this while loop will print the value of number to the console
 number--;
 // each pass through this loop will decrement number by one
}
// prints => 10 9 8 7 6 5 4 3 2 1 

for (var i = 10; i > 0; i--) {
// declares a for loop that creates a variable i and sets it equal to 10.
// tells the loop to continue as long as i is greater than 0.
// tells the loop to decrement i by 1 each time it finishes a pass.
 console.log(i);
 // prints the value of i to the console each pass through the loop
}
// prints => 10 9 8 7 6 5 4 3 2 1 

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            3. Looping over an array
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
var animals = ['dog', 'cat', 'lion', 'fish', 'bear', 'rhino'];
// initializes an array object with six elements

for (var i = 0; i < animals.length; i++) {
// declares a for loop that creates a variable i and sets it equal to 0.
// tells the loop to continue as long as i is less then the length of the animals array.
// tells the loop to increment i by 1 each time it finishes a pass.
 console.log(animals[i]);
 // prints the element of animals found at the i value each pass through the loop
}
// prints => dog cat lion fish bear rhino

for (var i = animals.length - 1; i >= 0; i--) {
// declares a for loop that creates a variable i and sets it equal to 1 less than the 
// length of the animals array. 
// tells the loop to continue as long as i is greater than or equal to 0
// tells the loop to decrement i by 1 each time it finishes a pass.
 console.log(animals[i]);
 // prints the element of animals found at the i value each pass through the loop
}
// prints => rhino bear fish lion cat dog
 
/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                             4. Looping over an object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
 
var myObject = {
 name: 'mike',
 age: '30',
 hair: 'none',
 weight: 185
};
// initialize an object called myObject that has four properties

console.log(myObject);
// prints => { name: 'mike', age: '30', hair: 'none', weight: 185 }

for(var key in myObject){
// each pass over the myObject loop will assign the name of a property to the variable
// key. 
// This loop will run until it has passed over every property in the myObject object.
 console.log(key);
 // each pass through the loop will print the name of the property that has been stored
 // in the key variable
 console.log(myObject[key]);
 // each pass through the loop will print the value associated with the name of the
 // property that has been stored in the key variable in the myObject object
}
// returns => name mike age 30 hair none weight 185