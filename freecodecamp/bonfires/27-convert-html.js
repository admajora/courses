/*
 * Convert HTML Entities - Difficulty: 2/5
 *
 * - Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-convert-html-entities
 */

function convert( str ) {
  var result = str
    .replace( /&/gi, '&amp;' )
    .replace( /</g, '&lt;' )
    .replace( />/g, '&gt;' )
    .replace( /"/g, '&quot;' )
    .replace( /'/g, '&apos;' );

  return result;
}

module.exports = convert;
