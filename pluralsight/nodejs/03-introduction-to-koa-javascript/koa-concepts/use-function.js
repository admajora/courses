var koa = require( 'koa' );

var app  = koa();
var port = process.env.PORT || 3000;

app.use( function *() {

  console.dir( this.request );

});


app
  .listen( port );

console.log( 'Listening on port', port );

module.exports = app;
