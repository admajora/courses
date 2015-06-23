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

});
