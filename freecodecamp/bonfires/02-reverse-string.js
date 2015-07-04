// Reverse String - Difficulty: 1/5
// Reverse the provided string
// Your result must be a string
// Source: http://www.freecodecamp.com/challenges/bonfire-reverse-a-string

function reverseString( input ) {
  if ( typeof input !== 'string' ) {
    throw new TypeError( 'A string is expected' );
  }

  var word = input;

  word = word
    .split( '' )
    .reverse()
    .join( '' );

  return word;
}

module.exports = reverseString;
