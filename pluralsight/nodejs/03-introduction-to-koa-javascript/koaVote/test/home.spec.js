var app = require( '../app.js' );
var request = require( 'supertest' ).agent( app.listen());

describe( 'The homepage', function() {
  it( 'displays nicely whitout errors', function( done ) {
    request
      .get( '/' )
      .expect( 200 ) // OK
      .expect( 'Content-Type', /html/ ) // displays
      .end( done );
  });
});
