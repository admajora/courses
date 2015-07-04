var expect = require( 'chai' ).expect;
var findLongestWord = require( '../05-longest-word' );

describe( '#findLongestWord()', function() {

  var assumptions = [
    {
      text   : ' "The quick brown fox jumped over the lazy dog"',
      arg    : "The quick brown fox jumped over the lazy dog",
      result : 6
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
