/*
 * Mutation - Difficulty: 1/5
 *
 * - Return true if the string in the first element of the array contains
 *      all of the letters of the string in the second element of the array
 * - ['hello', 'Hello'], should return true because all of the letters in
 *      the second string are present in the first, ignoring case
 * - ['hello', 'hey'] should return false because the string 'hello'
 *      does not contain a 'y'
 * - ['Alien', 'line'], should return true because all of the letters in
 *      'line' are present in 'Alien'
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-mutations
 */

var reference = '';

function mutation( arr ) {
  var first      = arr[ 0 ].toLowerCase();
  var second     = arr[ 1 ].toLowerCase();
  var firstSize  = first.length;
  var secondSize = second.length;

  reference = first;

  var result = second
    .split( '' )
    .every( _findLetter );

  return result;
}

function _findLetter( letter ) {
  if ( reference.indexOf( letter ) >= 0 ) {
    return true;
  }

  return false;
}

module.exports = mutation;
