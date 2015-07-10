/*
 * Pig Latin - Difficulty: 2/5
 *
 * - Translate the provided string to pig latin.
 * - Pig Latin takes the first consonant (or consonant cluster) of an English word,
 *     moves it to the end of the word and suffixes an "ay".
 * - If a word begins with a vowel you just add "way" to the end.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-pig-latin
 */

function translate( str ) {
  var result = '';
  var firstVowelIndex = str.search( /[aeiouAEIOU]/ );

  if ( firstVowelIndex === 0 ) {
    result = str + 'way';
  } else {
    var cluster = str.slice( 0, firstVowelIndex );
    result = str.slice( firstVowelIndex ) + cluster + 'ay';
  }

  return result;
}

module.exports = translate;
