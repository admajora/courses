/*
 * Diff Two Arrays - Difficulty: 2/5
 *
 * - Compare two arrays and return a new array with any items not found in both of the original arrays.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-diff-two-arrays
 */

function diff( arr1, arr2 ) {
  var result = [];

  arr1
    .forEach( function( item ) {
      if ( !_existItem( item, arr2 )) {
        result.push( item );
      }
    });
  
  arr2
    .forEach( function( item ) {
      if ( !_existItem( item, arr1 )) {
        result.push( item );
      }
    });

  return result;
}

function _existItem( value, arr ) {
  if ( arr.indexOf( value ) >= 0 ) {
    return true;
  }

  return false;
}

module.exports = diff;
