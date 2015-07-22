/*
 * Make a person - Difficulty: 3/5
 *
 * - Fill in the object constructor with the methods specified in the tests.
 * - Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
 * - All functions that take an argument have an arity of 1, and the argument will be a string.
 * - These methods must be the only available means for interacting with the object.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-make-a-person
 */

function Person( firstAndLast ){
      
  var namePart = firstAndLast.split( ' ' );    
  var firstName = namePart[ 0 ];
  var lastName  = namePart[ namePart.length - 1 ];
  
  this.getFirstName = function() {
    return firstName;
  };
  
  this.getLastName = function() {
    return lastName;
  };
  
  this.getFullName = function() {
      return firstName + ' ' + lastName;
  };
  
  this.setFirstName = function( newFirst ) {
      firstName = newFirst;
  };
  
  this.setLastName = function( newLast ) {
      lastName = newLast;
  };
  
  this.setFullName = function( fullName ) {
      var namePart = fullName.split(' ');
      firstName    = namePart[ 0 ];
      lastName     = namePart[ namePart.length - 1 ];
  };
}

module.exports = Person;
