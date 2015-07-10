/*
 * Search and Replace - Difficulty: 2/5
 *
 * - Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * - First argument is the sentence to perform the search and replace on.
 * - Second argument is the word that you will be replacing (before).
 * - Third argument is what you will be replacing the second argument with (after).
 * - NOTE: Preserve the case of the original word when you are replacing it. 
 *     For example if you mean to replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'
 *
 * - Source: http://www.freecodecamp.com/challenges/bonfire-search-and-replace
 */

function replace( str, before, after ) {
  return str.replace( before, _equalCaseString( before, after ));
}

/*
 * @desc format second string equal the first one passed
 * @param {String} stringOne - ex: eRiC
 * @param {String} stringTwo - ex: Douglas
 * @return {String} stringTwo properly formated. Ex: dOuGlas
 */
function _equalCaseString( stringOne, stringTwo ) {
  // contain the boolean for each letter from stringOne
  // saying if it is upperCase or not
  var isUpperCaseLetter = [];
  var result            = stringTwo.split( '' );

  /*
   * UpperCase char code: 
   *   A = 65
   *   Z = 90
   * LowerCase char code:
   *   a = 97
   *   z = 122
   */

  stringOne
    .split( '' )
    .forEach( function( letter ) {
      var charCode = letter.charCodeAt(0);
      if ( charCode >= 65 && charCode <= 90 ) {
        isUpperCaseLetter.push( true );
      } else {
        isUpperCaseLetter.push( false );
      }
    });

  isUpperCaseLetter
    .forEach( function( letter, index ) {
      if ( result[ index ]) {
        if ( letter ) {
          result[ index ] = result[ index ].toUpperCase();
        } else {
          result[ index ] = result[ index ].toLowerCase();
        }
      }
    });
    
  return result.join( '' );
}

module.exports = replace;
