var koa    = require( 'koa' );
var route  = require( 'koa-route' );

var app  = module.exports = koa();
var port = process.env.PORT || 3000;

// routes
var homeRoutes = require( './routes/homeRoutes.js' );
app
  .use( route.get( '/', homeRoutes.showHome ));

app
  .listen( port );

console.log( 'Running at port', port );

