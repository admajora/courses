/*
 * DNA Pairing - Difficulty: 2/5
 *
 * - The DNA strand is missing the pairing element.
 * - Match each character with the missing element and return the results as a 2d array.
 * - Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * - Return the provided character as the first element in each array.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-dna-pairing
 */

function pair( str ) {
  var result = [];
  var input  = str.split( '' );

  input
    .forEach( function( letter ) {
      result.push([ letter, map[ letter ]]);
    });

  return result;
}

var map = {
  'A' : 'T',
  'T' : 'A',
  'C' : 'G',
  'G' : 'C'
};

module.exports = pair;
