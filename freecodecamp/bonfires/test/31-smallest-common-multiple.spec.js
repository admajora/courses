var expect = require( 'chai' ).expect;
var smallestCommons = require( '../31-smallest-common-multiple' );

describe( '#smallestCommons()', function() {

  it( 'Should return a smallest common multiple in a range of numbers', function(){
    expect( smallestCommons([ 1, 5 ])).to.equal( 60 );
  });

  it( 'Should return a smallest common multiple in a range of numbers', function(){
    expect( smallestCommons([ 5, 1 ])).to.equal( 60 );
  });

  it( 'Should return a smallest common multiple in a range of numbers', function(){
    expect( smallestCommons([ 1, 13 ])).to.equal( 360360 );
  });

});
