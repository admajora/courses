// Check for palindromes - Difficulty: 1/5
//
// - Return true if the given string is a palindrome. Otherwise, return false.
// - A palindrome is a word or sentence that's spelled the same way both 
//   forward and backward, ignoring punctuation, case, and spacing.
// - You'll need to remove punctuation and turn everything lower case in 
//   order to check for palindromes.
//
// Source: http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes

var reverseString = require( './02-reverse-string' );

function palindrome( input ) {
  if ( typeof input !== 'string' ) {
    return false;
  }

  var pattern     = /\W/g;
  var text        = input.replace( pattern, '' ).toLowerCase();
  var reverseText = reverseString( input ).replace( pattern, '' ).toLowerCase();

  if ( text === reverseText ) {
    return true;
  }

  return false;
}

module.exports = palindrome;
