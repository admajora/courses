/* Find the Longest Word in a String - Difficulty: 1/5
 *
 * - Return the length of the longest word in the provided sentence.
 * - Your response should be a number.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string
 */

function findLongestWord( str ) {
  if ( typeof str !== 'string' ) {
    throw new TypeError( 'The input must be a string' );
  }

  var words       = str.split( ' ' );
  var longestWord = 0;

  words
    .forEach( function( word ) {
      var length = word.length;

      if ( length > longestWord ) {
        longestWord = length;
      }
    });
}

module.exports = findLongestWord;
