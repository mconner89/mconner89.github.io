// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//  create a factory function called makeContact that takes the arguments id, nameFirst, and nameLast
function makeContact(id, nameFirst, nameLast) {
    //  this function creates a 'contact' object
    let contact = {
        //  This new 'contact' object has keys for id, first name, and last name
        'id': id,
        'nameFirst': nameFirst,
        'nameLast': nameLast
    };
    //  function returns the created 'contact' object
    return(contact);
} 

//  Create a factory function called makeContactList
function makeContactList() {
  //  create contacts object
  let contacts = [];
  return {
    //  Return the number of contacts in the list
    length: function() {
        return contacts.length;
    },
    //  Add a contact item to the contact list
    addContact: function(contact) {
        return contacts.push(contact);
    },
    //  takes a full-name String and returns the contact object if found in the contacts-list
    findContact: function(fullName) {
        //  split name into first and last name variables
        let nameArray = fullName.split(" ");
        let fName = nameArray[0];
        let lName = nameArray[1];
        //  for loop that loops through each contact entry in the array
        for (var i = 0; i < contacts.length; i++){
            //  if statement that checks if first and last name match
            if ((contacts[i]['nameFirst'] == fName) && (contacts[i]['nameLast'] == lName)) {
              return(contacts[i]);
            }
        }
        return undefined;
    },
    //  takes a contact object to be removed from the contact-list
    removeContact: function(contact) {
        for(var i = 0; i < contacts.length; i++) {
            if(contacts[i] === contact) {
                return contacts.splice(i, 1);
            }
        }
    },
    // adds a printAllContactNames object
    printAllContactNames: function() {
        // new variable to hold string
        var allContacts = '';
        // loop through each item in the contacts array
        for(var i = 0; i < contacts.length; i++) {
            // pulls value of first name key, adds space, pulls value of last name key
            var newName = contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'];
            // add line break to each string except for last entry
            if (i < contacts.length - 1) {
                newName += '\n';
            }
            // adds each contact name onto the allContacts string variable
            allContacts += newName;
        }
        // returns string
        return allContacts;
    }
  };
}
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
