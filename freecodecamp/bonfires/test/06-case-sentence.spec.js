var expect = require( 'chai' ).expect;
var titleCase = require( '../06-case-sentence' );

describe( '#titleCase()', function() {

  it( 'Should return the first letter for all words capitalized', function() {
    expect( titleCase( "I'm a little tea pot" )).to.equal( "I'm A Little Tea Pot" );
  });

  it( 'Should return the first letter for all words capitalized', function() {
    expect( titleCase( "sHoRt AnD sToUt" )).to.equal( "Short And Stout" );
  });

  it( 'Should return the first letter for all words capitalized', function() {
    expect( titleCase( "HERE IS MY HANDLE HERE IS MY SPOUT" )).to.equal( "Here Is My Handle Here Is My Spout" );
  });

});
