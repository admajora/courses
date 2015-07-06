/*
 * Truncate a string - Difficulty: 1/5
 *
 * - Truncate a string (first argument) if it is longer than 
 *   the given maximum string length (second argument).
 * - Return the truncated string with a '...' ending.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-truncate-a-string
 */

function truncate( str, num ) {
  if( typeof str !== 'string' ) {
    throw new TypeError( 'Input should be a string' );
  }

  if ( num <= 0 ) {
    return '';
  } else if ( num <= 3 ) {
    return str.slice( 0, num );
  }

  var length = str.length;
  var text   = '';

  if ( length > num ) {
    text = str.slice( 0, num - 3 ) + '...';
  } else {
    text = str;
  }

  return text;
}

module.exports = truncate;
