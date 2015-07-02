var expect = require( 'chai' ).expect;
var meetBonfire = require( '../01-meet-bonfire' );

describe( 'Meet Bonfire', function() {

  it( 'Should return a boolean', function() {
    expect( meetBonfire()).to.be.a( 'boolean' );
  });

  it( 'Should always return true', function() {
    expect( meetBonfire()).to.be.true;
  });

});
