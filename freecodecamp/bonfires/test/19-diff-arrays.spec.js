var expect = require( 'chai' ).js
var diff   = require( '../19-diff-arrays' );

describe( '#diff arrays', function() {

  it( 'Should return an array with values founded only in one array', function() {
    expect( diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'])).to.deep.equal(['pink wool']);
  });

  it( 'Should return an array with values founded only in one array', function() {
    expect( diff(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'])).to.deep.equal(['diorite', 'pink wool']);
  });

  it( 'Should return an array with values founded only in one array', function() {
    expect( diff(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub'])).to.deep.equal([]);
  });

  it( 'Should return an array with values founded only in one array', function() {
    expect( diff([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.deep.equal([ 4 ]);
  });

  it( 'Should return an array with values founded only in one array', function() {
    expect( diff([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4])).to.deep.equal(['piglet', 4]);
  });

  it( 'Should return an array with values founded only in one array', function() {
    expect( diff([], ['snuffleupagus', 'cookie monster', 'elmo'])).to.deep.equal(['snuffleupagus', 'cookie monster', 'elmo']);
  });

});
