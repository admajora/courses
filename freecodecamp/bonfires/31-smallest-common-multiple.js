/*
 * Smallest Common Multiple - Difficulty: 2/5
 *
 * - Find the smallest number that is evenly divisible by all numbers in the provided range.
 * - The range will be an array of two numbers that will not necessarily be in numerical order.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-smallest-common-multiple
 */

function smallestCommons( arr ) {
  var min = Math.min.apply( null, arr );
  var max = Math.max.apply( null, arr );
  var rangeArray = _createRange( min, max );
  var verifyMultiple = [];
  var next = true;

  rangeArray.multiple = max;

  while ( next ) {
    verifyMultiple = rangeArray.map( _isMultiple );

    if ( verifyMultiple.indexOf( false ) >= 0 ) {
      rangeArray.multiple += min;
    } else {
      next = false;
    }
  }

  return rangeArray.multiple;
}

function _isMultiple( currentValue, index, array ) {
  if ( array.multiple % currentValue === 0 ) {
    return true;
  }

  return false;
}

function _createRange( min, max ) {
  var arr = [];

  for ( ; min <= max; min += 1 ) {
    arr.push( min );
  }

  return arr;
}

module.exports = smallestCommons;
