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
  .listen( port );

console.log( 'Running at', port );

// Functions
function *addUser() {
  var userFromRequest = yield parse( this );
  var insertedUser    = yield users.insert( userFromRequest );

  this.set( 'location', '/user/' + insertedUser._id );
  this.status = 201; // CREATED
}
