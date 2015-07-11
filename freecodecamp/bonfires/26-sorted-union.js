/*
 * Sorted Union - Difficulty: 2/5
 *
 * - Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * - In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 * - The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 * 
 * Source: http://www.freecodecamp.com/challenges/bonfire-sorted-union
 */

function unite( arr1, arr2, arr3 ) {
  var all = [].slice.call( arguments );
  var result = [];

  all
    .forEach( function( arr ) {
      arr
        .reduce( _verifyItem, result );
    });

  return result;
}

function _verifyItem( previousValue, currentValue, index, array ) {
  if ( previousValue.indexOf( currentValue ) < 0 ) {
    previousValue.push( currentValue );
    return previousValue;
  } 

  return previousValue;
}

module.exports = unite;
