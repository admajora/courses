/*
 * Spinal Tap Case - Difficulty: 2/5
 *
 * - Convert a string to spinal case. 
 * - Spinal case is all-lowercase-words-joined-by-dashes.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-spinal-tap-case
 */

function spinalCase( str ) {
  var result = str
    .replace( /[ $-/:-?{-~!"^_`\[\]"}]/g, '-' )
    .replace( /[A-Z]/g, '-$&' )
    .replace( /--/g, '-' )
    .replace( /^-/, '' )
    .toLowerCase();

  return result;
}

module.exports = spinalCase;
