/*
 * Confirm the Ending - Difficulty: 1/5
 *
 * - Check if a string (first argument) ends with the given target string (second argument).
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-confirm-the-ending
 */

function end( str, target ) {
  if ( typeof str !== 'string' || typeof target !== 'string' ) {
    throw new TypeError( 'All arguments should be a string' );
  }

  var text = str.split( ' ' );
  var size = text.length;

  if ( size > 1 ) {
    return text[ text.length - 1 ] === target;
  }

  return text[ 0 ].substr( text[ 0 ].length - 1 ) === target;
}

module.exports = end;
