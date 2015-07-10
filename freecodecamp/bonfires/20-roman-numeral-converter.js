/*
 * Roman Numeral Converter - Difficulty: 2/5
 *
 * - Convert the given number into a roman numeral.
 * - All roman numerals answers should be provided in upper-case.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-roman-numeral-converter
 * Roman Numerals: http://www.mathsisfun.com/roman-numerals.html
 */

function convert( num ) {
  var result = '';
  var value  = num;
  var leftover = 0;
  var actualDividend = 0;
  var timesToRepeatString = 0;

  while ( value > 0 ) {
    leftover = value % DIVIDEND[ actualDividend ];
    
    if ( leftover >= 0 && leftover !== value ) {
      timesToRepeatString = Math.floor( value / DIVIDEND[ actualDividend ]);
      result += LETTERS[ DIVIDEND[ actualDividend ]].repeat( timesToRepeatString );
      value -= timesToRepeatString * DIVIDEND[ actualDividend ];
      actualDividend += 1;
    } else {
      actualDividend += 1;
    }

  }

  return result;
}

// Helper properties
var DIVIDEND = [
  1000,
  900, 500, 400, 100,
  90, 50, 40, 10,
  9, 5, 4, 1
];
var LETTERS = {
  1 : 'I',
  4 : 'IV',
  5 : 'V',
  9 : 'IX',
  10 : 'X',
  40 : 'XL',
  50 : 'L',
  90 : 'XC',
  100 : 'C',
  400 : 'CD',
  500 : 'D',
  900 : 'CM',
  1000 : 'M'
};

// Helper methods
if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (;;) {
      if ((count & 1) == 1) {
        rpt += str;
      }
      count >>>= 1;
      if (count == 0) {
        break;
      }
      str += str;
    }
    return rpt;
  }
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

module.exports = convert;
