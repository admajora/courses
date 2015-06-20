var co   = require( 'co' );
var wait = require( 'co-wait' );

// sync
/*
co( function *() {

  console.log( 'Started' );
  console.time( 'sequence' );

  yield wait( 1000 );
  yield wait( 2000 );
  yield wait( 3000 );

  console.timeEnd( 'sequence' );
  console.log( 'completed' );

});
*/

// async
co( function *() {

  console.log( 'Started' );

  var a = wait( 1000 );
  var b = wait( 2000 );
  var c = wait( 3000 );

  console.time( 'parallell' );

  var res = yield [ a, b, c ];

  console.timeEnd( 'parallell' );
  console.log( 'completed' );

});
