var expect = require( 'chai' ).expect;

describe( 'Maps', function() {

  it( 'should contain zero items when constructed', function() {
    var map = new Map();
    expect( map.size ).to.equal( 0 );
  });

  it( 'should contain 1 item when one item is added', function() {
    var map = new Map();
    map.set( 'age', 35 );
    expect( map.size ).to.equal( 1 );
  });

  it( 'should allow an object to be the key', function() {
    var ageMap = new Map();
    var ralph = { 'name' : 'Ralph' };
    ageMap.set( ralph, 29 );

    expect( ageMap.get( ralph )).to.equal( 29 );
  });

  it( 'should contain items when given an array in the constructor', function(){
    var map = new Map([[ 'name', 'John' ], [ 'age', 15 ], [ 'weight', '155' ]]);
    expect( map.size ).to.equal( 3 );
  });

});
