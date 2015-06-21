var expect = require( 'chai' ).expect;

describe( 'Arrays', function() {

  it( 'should return the first matching element using find', function() {
    var ary = [ 1, 5, 10 ];
    var match = ary.find( item => item > 8 );

      expect( match ).to.equal( 10 );
  });

  it( 'should return the first matching index using findIndex', function() {
    var match = [ 1, 5, 10 ].findIndex( item => item > 3 );
    expect( match ).to.equal( 1 );
  });

  it( 'should fill in the entire array when fill is called', function() {
    var a = [ 1, 2, 3, 4, 5 ];
    a.fill( 'a' ); // [ 'a', 'a', 'a', 'a', 'a' ]
    expect( a[ 3 ]).to.equal( 'a' );
  });

  it( 'should fill in some of the array when fill is called with args', function() {
    var a = [ 1, 2, 3, 4, 5 ];
    a.fill( 'a', 2, 3 );
    expect( a[ 2 ]).to.equal( 'a' );
    expect( a[ 3 ]).to.equal( 4 ); 
  });

});
