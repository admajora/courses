var expect = require( 'chai' ).expect;
var find   = require( '../32-finders-keepers' );

describe( '#find()', function() {

  it( 'Should return the first element that pass a truth test', function() {
    expect( find([1, 3, 5, 8, 9, 10])).to.equal( 8 );
  });

  it( 'Should return the first element that pass a truth test', function() {
    expect( find([1, 3, 5, 9])).to.be.undefined;
  });

});
