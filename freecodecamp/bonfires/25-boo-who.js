/*
 * Boo Who - Difficulty: 2/5
 *
 * - Check if a value is classified as a boolean primitive. Return true or false.
 * - Boolean primitives are true and false.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-boo-who
 */

function boo( bool ) {
  if ( bool === true || bool === false ) {
    return true;
  }

  return false;
}

module.exports = boo;
