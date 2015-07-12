/*
 * Drop it - Difficulty: 2/5
 *
 * - Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-drop-it
 */

function drop( arr, func ) {
  var result = [];

  arr
    .forEach( function( item, index, array ) {
      if ( func( item )) {
        result.push( array[ index ]);
      }
    });

  return result;
}

module.exports = drop;
