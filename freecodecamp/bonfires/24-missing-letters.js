/*
 * Missing Letters - Difficulty: 2/5
 *
 * - Find the missing letter in the passed letter range and return it.
 * - If all letters are present in the range, return undefined.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-missing-letters
 */

function fearNotLetter( str ) {
  var result = '';
  var charCodes = [];

  str
    .split( '' )
    .forEach( function( letter ) {
      charCodes.push( letter.charCodeAt() );
    });

  charCodes
    .forEach( function( code, index, array ) {
      var helper = array[ index - 1 ] || array[ 0 ];

      if ( code - helper > 1 ) {
        result += String.fromCharCode( helper + 1 );
      }
    });

  if ( result === '' ) {
    return undefined;
  }

  return result;
}

module.exports = fearNotLetter;
