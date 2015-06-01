var Calc = require( './calc' );

Calc
  .add( 1, 2 )
  .multiply( 3 )
  .equals( function( result ) {
    console.log( result );
  });