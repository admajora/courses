/*
 * Sum All Primes - Difficulty: 2/5
 *
 * - Sum all the prime numbers up to and including the provided number.
 * - A prime number is defined as having only two divisors, 1 and itself. 
 * - For example, 2 is a prime number because it's only divisible by 1 and 2.
 * - 1 isn't a prime number, because it's only divisible by itself.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-sum-all-primes
 */

function sumPrimes( num ) {
  var result     = 0;
  var current    = 2; // first prime number
  var listPrimes = [];
  var primeVerificator;
  var isPrime; 
  var result;

  for ( ; current <= num; current += 1 ) {
    isPrime = true;

    for ( primeVerificator = 2; primeVerificator <= current; primeVerificator += 1 ) {
      if ( current % primeVerificator === 0 && current !== primeVerificator ) {
        isPrime = false;
      }
    }

    if ( isPrime === true ) {
      listPrimes.push( current );
    }
  }

  result = listPrimes.reduce( function( previousValue, currentValue ) {
    return previousValue + currentValue
  });

  return result;
}

module.exports = sumPrimes;
