// Reverse String - Difficulty: 1/5
// Reverse the provided string
// Your result must be a string
// Source: http://www.freecodecamp.com/challenges/bonfire-reverse-a-string

function reverseString( input ) {
  var word = input.toString();

  word = word
    .split( '' )
    .reverse()
    .join( '' );

  return word;
}

module.exports = reverseString;
