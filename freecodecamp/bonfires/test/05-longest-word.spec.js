var expect = require( 'chai' ).expect;
var findLongestWord = require( '../05-longest-word' );

describe( '#findLongestWord()', function() {

  var assumptions = [
    {
      text   : ' "The quick brown fox jumped over the lazy dog"',
      arg    : "The quick brown fox jumped over the lazy dog",
      result : 6
    },
    {
      text   : ' "May the force be with you"',
      arg    : 'May the force be with you',
      result : 5
    },
    {
      text   : ' "Google do a barrel roll"',
      arg    : 'Google do a barrel roll',
      result : 6
    },
    {
      text   : ' "What is the average airspeed velocity of an unladen swallow"',
      arg    : 'What is the average airspeed velocity of an unladen swallow',
      result : 8
    }
  ];

  it( 'Should throw an error if a non-string value is passed', function() {
    expect( findLongestWord.bind( findLongestWord, 13 )).to.throw( TypeError );
  });

  assumptions
    .forEach( function( assumption ) {
      it( 'Should return the number of characters for the longest word in the string' + assumption.text, function() {
        expect( findLongestWord( assumption.arg )).to.equal( assumption.result );
      });
    });
});
