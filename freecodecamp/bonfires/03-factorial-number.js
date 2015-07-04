// Factorialize a number - Difficulty: 1/5
// Return the factorial of the provided integer.
// Source: http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number

function factorialize( num ) {
  var value = parseInt( num, 10 );

  if ( value === 1 ) {
    return 1;
  }

  return value * factorialize( value - 1 );
}

module.exports = factorialize;
