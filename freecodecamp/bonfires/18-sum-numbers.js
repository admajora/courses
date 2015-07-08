/*
 * Sum all numbers in a range
 *
 * - We'll pass you an array of two numbers. 
 * - Return the sum of those two numbers and all numbers between them.
 * - The lowest number will not always come first.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-sum-all-numbers-in-a-range
 */

function sumAll( arr ) {
  var arrayOfNumbers = [];
  var max = Math.max.apply( null, arr );
  var min = Math.min.apply( null, arr );
  var i   = min;

  while ( i <= max ) {
    arrayOfNumbers.push( i );
    i += 1;
  }

  var result = arrayOfNumbers.reduce( _sumTwoValues );

  return result;
}

function _sumTwoValues( a, b ) {
  return a + b;
}

module.exports = sumAll;
