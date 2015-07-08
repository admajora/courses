/*
 * Where do I belong - Difficulty: 2/5
 *
 * - Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-where-do-i-belong
 */

function where( arr, num ) {
  var result;
  var length = arr.length;
  var i = 0;

  for ( ; i < length; i += 1 ) {
    if ( arr[ i ] >= num ) {
      result = i;
      break;
    }
  }

  return result;
}

module.exports = where;
