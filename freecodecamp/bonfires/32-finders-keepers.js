/*
 * Finders Keepers - Difficulty: 2/5
 *
 * - Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-finders-keepers
 */

function find( arr, func ) {
  var result;

  arr
    .some( function( item, index, array ) {
      if ( func( item )) {
        result = array[ index ];
        return true;
      }
      return false;
    });

  return result;
}

module.exports = find;
