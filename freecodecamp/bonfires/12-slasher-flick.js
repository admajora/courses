/*
 * Slasher Flick - Difficulty: 1/5
 *
 * - Return the remaining elements of an array after chopping off n elements from the head.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-slasher-flick
 */

function slasher( arr, howMany ) {
  if ( !Array.isArray( arr )) {
    throw new TypeError( 'Should pass an array' );
  }

  return arr.slice( howMany );
}

module.exports = slasher;
