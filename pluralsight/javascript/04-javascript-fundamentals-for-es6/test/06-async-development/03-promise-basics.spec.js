var expect = require( 'chai' ).expect;

describe( 'Promises', function() {

  it( 'should execute the callback given to then', function( done ) {
    var promise = new Promise( function( resolve, rejected ) {
      resolve();
    });

    promise
      .then( function() {
        done();
      });
  });

  it( 'should receive the resolved data', function() {
    var promise = new Promise( function( resolve, rejected ) {
      resolve( 1 );
    });

    promise
      .then( function( data ) {
        expect( data ).to.equal( 1 );
        done();
      });
  });

});
