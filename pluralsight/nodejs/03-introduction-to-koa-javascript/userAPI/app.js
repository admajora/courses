var koa    = require( 'koa' );
var routes = require( 'koa-route' );
var parse  = require( 'co-body' );
var monk   = require( 'monk' );
var wrap   = require( 'co-monk' );

var app  = module.exports = koa();
var port = process.env.PORT || 3000;

// db
var db    = monk( 'localhost/apiUsers' );
var users = wrap( db.get( 'users' ));

// routes
app
  .use( routes.post( '/user', addUser ));
app
  .use( routes.get( '/user/:id', getUser ));
app
  .use( routes.put( '/user/:id', updateUser ));
app
  .use( routes.del( '/user/:id', deleteUser ));

app
  .listen( port );

console.log( 'Running at', port );

// Functions
function *addUser() {
  var userFromRequest = yield parse( this );

  if ( !userFromRequest.name ) {
    this.throw( 400, 'name required' );
  }

  var insertedUser    = yield users.insert( userFromRequest );

  this.set( 'location', '/user/' + insertedUser._id );
  this.status = 201; // CREATED
}

function *getUser( id ) {
  var user = yield users.findById( id );

  this.body = user;
  this.status = 200;
}

function *updateUser( id ) {
  var userFromRequest = yield parse( this );

  yield users.updateById( id, userFromRequest );

  this.set( 'location', 'user' + id );
  this.status = 204;
}

function *deleteUser( id ) {
  yield users.remove({ _id : id });
  this.status = 200;
}
