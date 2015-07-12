var expect = require( 'chai' ).expect;
var find   = require( '../32-finders-keepers' );

describe( '#find()', function() {

  it( 'Should return the first element that pass a truth test', function() {
    expect( find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).to.equal( 8 );
  });

  it( 'Should return the first element that pass a truth test', function() {
    expect( find([1, 3, 5, 9], function(num) { return num % 2 === 0; })).to.be.undefined;
  });

});
