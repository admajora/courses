var expect = require( 'chai' ).expect;
var drop   = require( '../33-drop-it' );

describe( '#drop()', function() {

  it( 'Should return a dropped array', function() {
    expect( drop([1, 2, 3, 4], function(n) {return n >= 3; })).to.deep.equal([3,4]);
  });

  it( 'Should return a dropped array', function() {
    expect( drop([1, 2, 3], function(n) {return n > 0; })).to.deep.equal([1,2,3]);
  });

  it( 'Should return a dropped array', function() {
    expect( drop([1, 2, 3, 4], function(n) {return n > 5; })).to.deep.equal([]);
  });

});
