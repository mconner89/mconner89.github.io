/** 
 * Control Flow 
 * 
 * 0. Intro
 * Conditional statements can be used to run specific parts of your code if certain 
 * prerequisite conditions are met or failed. These consist of If, Else-If, Else, and 
 * Switch statements. If, Else-if, and Else statements can all be used in conjunction to 
 * form a sort of "flow chart" that either executes a chunk of code or skips a chunk of 
 * code based on whether or not a boolean expression evaluates to true or false. 
 * 
 * 1. If
 * An if statement is needed to start an if, else-if, else chain. If statements execute a
 * block of code if a specified condition is true. If must be in all lowercase to execute 
 * correctly. The format is:
 * 
 * if(condition) {
 *  code to be executed
 * } 
 * 
 * If statements can be combined with logical operators to test multiple conditions at 
 * once.
 * 
 * 2. Else-if
 * Else-if statements specify a new condition to test if the previous condtion did not 
 * test true. The first instance of an else-if statement must be preceeded by an if 
 * statement. After the initial if statement, any number of else-if statements can be 
 * chained together. The format is: 
 * 
 * if(condition) {
 *  code to be executed
 * } else if(condition) {
 *  code to be executed
 * }
 * 
 * 3. Else

 * else statements occur at the end of if, else if chains (or after an if statement). 
 * They specify a block of code to execute if none of the statements in an if, else-if 
 * chain evaluated to true.The format is:
 * 
 * if(condition) {
 *  code to be executed
 * } else if(condition) {
 *  code to be executed
 * } else {
 *  code to be executed
 * }
 * 
 * 4. Switch
 * Similar to if,else-if, else chains, switch statements are used to perform different 
 * actions based on different conditions. Switch statements start with an expression to 
 * be evaluated, then a list of code to be executed if the expression is matched to a 
 * specified value. They can also have a default statement that executes if all other 
 * cases evaluate to false. Switch statements look like: 
 * 
 * switch(expression){
 *  case x: 
 *   code block 
 *   break; 
 *  case y:
 *   code block 
 *   break; 
 *  default: 
 *   code block
 * }
 * 
 * Switch statements require a break keyword that breaks out of the switch block. If it 
 * is not included, the next case will be executed as well as the case that evaluated to 
 * true, regardless of what the next case evaluates to. The default keyword is similar to
 * an else statement: it specifies code to be ran if there is no case match.
 */
 
/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                          1. If
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

if (100 > 10) {
// if statement that tests if 100 is greater than 10
 console.log('Hello!');
 // if 100 is greater than 10, prints => Hello!
}
// prints => Hello!

var color = 'blue';
// initialize color to the value of 'blue'

if (color == 'blue') {
 // if statement that tests if color is loosely equal to 'blue'
 console.log('its blue!');
 // if color is loosely equal to 'blue', prints => its blue!
}
// prints => its blue!

if (color == 'red') {
 // if statement that tests if color is loosely equal to 'red'
 console.log('its red!');
 // if color is loosely equal to 'blue', prints => its red!
}
// nothing happens

if(10 > 5 && 100 > 50) {
// if statement that tests if 10 is greater than 5 AND 100 is greater than 50
 console.log('theyre both greater');
 // if 10 is greater than 5 AND 100 is greater than 50, prints => theyre both greater
}
// prints => theyre both greater

if(10 > 20 && 100 > 50) {
// if statement that tests if 10 is greater than 20 AND 100 is greater than 50
 console.log('theyre both greater');
 // if 10 is greater than 20 AND 100 is greater than 50, prints => theyre both greater
}
// nothing happens

if(10 > 20 || 100 > 50) {
// if statement that tests if 10 is greater than 20 OR 100 is greater than 50
 console.log('at least one is greater');
 // if 10 is greater than 20 OR 100 is greater than 50, prints => at least one is greater
}
// prints => at least one is greater

if(10 > 20 || 100 > 500) {
// if statement that tests if 10 is greater than 20 OR 100 is greater than 500
 console.log('at least one is greater');
 // if 10 is greater than 20 OR 100 is greater than 500, prints => at least one is 
 // greater
}
// nothing happens

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                       2. Else-if 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

if (color == 'blue') {
// if statement that tests if color is loosely equal to 'blue'
 console.log('its blue');
 // if color is loosely equal to 'blue', prints => its blue
} else if(color == 'red'){
 // else if statement that only checks if color loosely equals 'red' if the previous 
 // statement in the if/else-if chain did not evaluate to true. 
 // In this chain, the first statement evaluated to true, so we never reached this part 
 // of the chain.
 console.log('its red');
 // if color is loosely equal to 'red', prints => its red
}
// prints => its blue

color = 'red';
// re-initializes color to a value of 'red'

if (color == 'blue') {
// if statement that tests if color is loosely equal to 'blue'
 console.log('its blue');
 // if color is loosely equal to 'blue', prints => its blue
} else if(color == 'red'){
 // else if statement that only checks if color loosely equals 'red' if the previous 
 // statement in the if/else-if chain did not evaluate to true. 
 // In this chain, the first statement evaluated to false, so it next checks this 
 // condition.
 console.log('its red');
 // if color is loosely equal to 'red', prints => its red
}
// prints => its red

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                      3. Else 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

if (color == 'blue') {
// if statement that tests if color is loosely equal to 'blue'
 console.log('its blue');
 // if color is loosely equal to 'blue', prints => its blue
} else if(color == 'red'){
 // else if statement that only checks if color loosely equals 'red' if the previous 
 // statement in the if/else-if chain did not evaluate to true. 
 console.log('its red');
 // if color is loosely equal to 'red', prints => its red
} else {
 console.log('its not blue or red');
 // else statement that only executes if all previous statements in the if, if-else chain 
 // evaluated to false. 
 // since the previous statement evaluated to true, we would not access this part of the 
 // chain.
}
// prints => its red

color = 'green';
// re-initializes color to a value of 'green'

if (color == 'blue') {
// if statement that tests if color is loosely equal to 'blue'
 console.log('its blue');
 // if color is loosely equal to 'blue', prints => its blue
} else if(color == 'red'){
 // else if statement that only checks if color loosely equals 'red' if the previous 
 // statement in the if/else-if chain did not evaluate to true. 
 console.log('its red');
 // if color is loosely equal to 'red', prints => its red
} else {
 console.log('its not blue or red');
 // else statement that only executes if all previous statements in the if, if-else chain
 // evaluated to false. 
 // since the previous statement evaluated to false, this code block would execute.
}
// prints => its not blue or red

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                       4. Switch 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

switch(color) {
// switch statement that accepts the variable color as its first value
 case 'blue':
 // tests if value of color is strictly equal to 'blue' 
  console.log('its blue');
  // if value of color is strictly equal to 'blue', prints => its blue
  break;
  // if value of color is strictly equal to 'blue', ends switch statement
 case 'red':
 // tests if value of color is strictly equal to 'red' 
  console.log('its red');
  // if value of color is strictly equal to 'red', prints => its red
  break;
  // if value of color is strictly equal to 'red', ends switch statement
 case 'green':
 // tests if value of color is strictly equal to 'green' 
  console.log('its green');
  // if value of color is strictly equal to 'green', prints => its green
  break;
  // if value of color is strictly equal to 'green', ends switch statement
 default:
 // denotes code to exeucte if none of the previous cases matched the initial value
  console.log('is this a color?');
  // if value of color is doesnt match any cases, prints => is this a color?
}
// prints => its green
 