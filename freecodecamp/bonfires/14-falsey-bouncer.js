/*
 * Falsey Bouncer - Difficulty: 1/5
 *
 * - Remove all falsey values from an array
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-falsey-bouncer
 */

function bouncer( arr ) {
  var result = arr.filter( function( value ) {
    if ( value ) {
      return true;
    }
    return false;
  });

  return result;
}

module.exports = bouncer;
