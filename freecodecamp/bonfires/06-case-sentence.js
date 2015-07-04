/*
 * Title Case a Sentence - Difficulty: 1/5
 *
 * - Return the provided string with the first letter of each word capitalized.
 * - For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-title-case-a-sentence
 */

function titleCase( str ) {
  if ( typeof str !== 'string' ) {
    throw new TypeError( 'You should pass a string' );
  }

  var text      = str.toLowerCase();
  var finalText = text.split( ' ' );

  finalText
    .forEach( function( word, index, array ) {
      array[ index ] = word.replace( /^\w{1}/, word.charAt( 0 ).toUpperCase() );
    });

  return finalText.join( ' ' );
}

module.exports = titleCase;
