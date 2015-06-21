var koa   = require( 'koa' );
var route = require( 'koa-route' );
var serve = require( 'koa-static' );

var app  = module.exports = koa();
var port = process.env.PORT || 3000;

// App configuration
app
  .use( serve( __dirname + '/public' ));

// routes
var homeRoutes = require( './routes/homeRoutes.js' );
app
  .use( route.get( '/', homeRoutes.showHome ));

app
  .listen( port );

console.log( 'Running at port', port );

