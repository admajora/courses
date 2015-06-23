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

  it( 'should fail when rejected', function( done ) {
    var promise = new Promise( function( resolve, rejected ) {
      rejected( Error( 'oh noes!' ));
    });

    promise
      .then( function() {
        // success
      }, function( error ) {
        expect( error.message ).to.equal( 'oh noes!' );
        done();
      });
  });

  it( 'should have a catch', function( done ) {
    var promise = new Promise( function( resolve, rejected ) {
      rejected( Error( 'oh noes!' ));
    });

    promise
      .catch( function( error ) {
        expect( error.message ).to.equal( 'oh noes!' );
        done();
      });
  });

  it( 'should compose when resolved with a promise', function( done ) {
    var previousPromise = new Promise( function( resolve, rejected ) {
      resolve( 3 );
    });

    var promise = new Promise( function( resolve, rejected ) {
      resolve( previousPromise );
    });

    promise
      .then( function( data ) {
        expect( data ).to.equal( 3 );
        done();
      });
  });

  it( 'should have a static resolve', function( done ) {
    var previousPromise = Promise.resolve( 3 );

    var promise = Promise.resolve( previousPromise );

    promise
      .then( function( data ) {
        expect( data ).to.equal( 3 );
        done();
      });
  });

  it( 'should have a static reject', function( done ) {
    var promise = Promise.reject( Error( 'oh noes!' ));

    promise
      .catch( function( error ) {
        expect( error.message ).to.equal( 'oh noes!' );
        done();
      });
  });

});
