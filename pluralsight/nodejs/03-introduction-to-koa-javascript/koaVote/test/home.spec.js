var app = require( '../app.js' );
var request = require( 'supertest' ).agent( app.listen());
var db = require( './../lib/db.js' );
var co = require( 'co' );
var should = require( 'chai' ).should();

describe( 'The homepage', function() {
  it( 'displays nicely whitout errors', function( done ) {
    request
      .get( '/' )
      .expect( 200 ) // OK
      .expect( 'Content-Type', /html/ ) // displays
      .end( done );
  });

  it ( 'lists all the questions in the database', function( done ) {
    co( function *() {
      yield db.questions.insert({ title : 'Question Q1' });
      yield db.questions.insert({ title : 'Question Q2' });

      request
        .get( '/' )
        .expect( 200 )
        .expect( function( res ) {
          res.text.should.contain( 'Question Q1' );
          res.text.should.contain( 'Question Q2' );
        })
        .end( done );
    })();
  });
});
