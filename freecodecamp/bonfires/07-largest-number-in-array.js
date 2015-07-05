/*
 * Return Largest Numbers in Arrays - Difficulty: 1/5
 *
 * - Return an array consisting of the largest number from each provided sub-array.
 * 
 * Source: http://www.freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays
 */

function largestNumber( arr ) {
  if ( !Array.isArray( arr )) {
    throw new TypeError( 'You should pass an Array');
  }

  var maxArray = [];

  arr
    .forEach( function( item ) {
      maxArray.push( Math.max.apply( Math, item ));
    });

  return maxArray;
}

module.exports = largestNumber;
