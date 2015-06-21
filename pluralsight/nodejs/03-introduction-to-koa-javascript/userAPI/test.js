var app = require( './app.js' );
var request = require( 'supertest' ).agent( app.listen());

describe( 'Simple User HTTP CRUD API', function() {
  var a_user = { name : 'Eric', height : 1.80 }

  it( 'adds new users', function( done ) {
    request
      .post( '/user' )
      .send( a_user )
      .expect( 'location', /^\/user\/[0-9a-fA-F]{24}$/ )
      .expect( 200, done );
  });
});
