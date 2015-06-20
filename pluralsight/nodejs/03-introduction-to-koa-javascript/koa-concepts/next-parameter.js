var app  = require( 'koa' )();
var port = process.env.PORT || 3000;

app
  .use( function *logger( next ) {
  
    console.log( 'Before' );

    yield next;

    console.log( 'After' );

  });

app
  .use( function *() {
  
    console.log( ' In application' );
    this.body = "I've been logged";

  });

app
  .listen( port );

console.log( 'Running on port', port );
