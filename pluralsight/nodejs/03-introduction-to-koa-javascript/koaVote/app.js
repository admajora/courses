var koa    = require( 'koa' );
var route  = require( 'koa-route' );
var render = require( './lib/render.js' );

var app  = module.exports = koa();
var port = process.env.PORT || 3000;

app
  .use( route.get( '/', showHome ));

function *showHome( id ) {
  this.body = yield render( 'home' );
}

app
  .listen( port );

console.log( 'Running at port', port );

