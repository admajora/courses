/*
 * Sum All Odd Fibonacci Numbers - Difficulty: 2/5
 *
 * - Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
 * - The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
 * - As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-sum-all-odd-fibonacci-numbers
 */

function sumFibs( num ) {
  var result  = 0;
  var total   = 0;
  var current = 0;
  var next    = 1;
  var swap;

  while ( total < num ) {
    total   += current;
    swap     = current;
    current  = next;
    next     = swap + current;

    if ( current % 2 !== 0 ) {
      result += current;
    }
  }

  return result;
}

module.exports = sumFibs;
