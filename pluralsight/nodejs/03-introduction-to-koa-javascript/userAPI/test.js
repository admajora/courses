var app = require( './app.js' );
var request = require( 'supertest' ).agent( app.listen());
var co = require( 'co' );

describe( 'Simple User HTTP CRUD API', function() {
  var a_user = {};

  beforeEach( function( done ) {
    a_user = { name : 'Eric', height : 1.80 };
    removeAll( done );
  });

  afterEach( function( done ) {
    removeAll( done );
  });

  var removeAll = function( done ) {
    co( function *() {
      yield app.users.remove({});
    })( done );
  };

  it( 'adds new users', function( done ) {
    request
      .post( '/user' )
      .send( a_user )
      .expect( 'location', /^\/user\/[0-9a-fA-F]{24}$/ )
      .expect( 201, done );
  });

  it( 'fails with validation error for users without name', function( done ) {
    delete a_user.name;

    request
      .post( '/user' )
      .send( a_user )
      .expect( 'name required' )
      .expect( 400, done );
  });

  it( 'get existing user by id', function( done ) {
    co(function *() {
      // insert test user in db
      var insertedUser = yield app.users.insert( a_user );

      // get url to user
      var url = '/user/' + insertedUser._id;

      // get via api
      request
        .get( url )
        .set( 'Accept', 'application/json' )
        .expect( 'Content-Type', /json/ )
        .expect( /Eric/ )
        .expect( /1.80/ )
        .expect( 200, done );
    })();
  });

  it( 'updates an existing user', function( done ) {
    co( function *() {
      var insertedUser = yield app.users.insert( a_user );
      var url = '/user/' + insertedUser._id;

      request
        .put( url )
        .send({ name : 'Older Marcus', age : 43, height : 1.94 })
        .expect( 'location', url )
        .expect( 204, done );
    })();
  });

  it( 'deletes an existing user', function( done ) {
    co( function *() {
      var insertedUser = yield app.users.insert( a_user );
      var url = '/user/' + insertedUser._id;

      request
        .del( url )
        .expect( 200, done );
    })();
  });
});
