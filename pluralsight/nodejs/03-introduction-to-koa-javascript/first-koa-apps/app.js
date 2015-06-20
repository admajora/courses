var koa = require( 'koa' );
var app = koa();

app
  .use( function * () {
    this.body = '<h1>Hello, Koa!</h1>';
  });

app
  .listen( 3000 );

console.log( 'The app is listening. Port 3000' );
