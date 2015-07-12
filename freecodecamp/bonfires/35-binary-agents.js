/*
 * Binary Agents - Difficulty: 2/5
 *
 * - Return an English translated sentence of the passed binary string.
 * - The binary string will be space separated.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-binary-agents
 */

function binaryAgent( str ) {
  var text = str.split( ' ' );

  text
    .forEach( function( item, index, array ) {
      array[ index ] = String.fromCharCode( parseInt( item, 2 ));
    });

  return text.join( '' );
}

module.exports = binaryAgent;
