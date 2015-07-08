/*
 * Seek and Destroy - Difficulty: 1/5
 *
 * - You will be provided with an initial array (the first argument in the destroyer function),
 *   followed by one or more arguments.
 * - Remove all elements from the initial array that are of the same value as these arguments.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-seek-and-destroy
 */

module.exports = destroyer;

function destroyer( arr ) {
  var args   = [].slice.call( arguments, 0 );
  var array  = args.shift();
  var result = [];

  array
    .forEach( function( item ) {
      if ( args.indexOf( item ) < 0 ) {
        result.push( item );
      }
    });

  return result;
}
