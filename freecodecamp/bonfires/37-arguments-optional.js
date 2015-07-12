/*
 * Arguments Optional - Difficulty: 2/5
 *
 * - Create a function that sums two arguments together. 
 * - If only one argument is provided, return a function that expects one additional argument and will return the sum.
 * - For example, add(2, 3) should return 5, and add(2) should return a function that is waiting for an argument 
 *   so that var sum2And = add(2); return sum2And(3); // 5
 * - If either argument isn't a valid number, return undefined.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-arguments-optional
 */

function add() {
  var args = [].slice.call( arguments );
  var result;

  var nonNumbers = args.some( function( arg ) {
    if( typeof arg !== 'number' || arg !== arg || !args.length ) {
      return true;
    }

    return false;
  });

  if ( nonNumbers ) {
    return undefined;
  }

  if ( args.length >= 2 ) {
    result = args[ 0 ] + args[ 1 ];
  }

  if ( args.length === 1 ) {
    result = function( value ) {
      if( typeof value !== 'number' || value !== value ) {
        return undefined;
      }
      return args[ 0 ] + value;
    };
  }

  return result;
}

module.exports = add;
