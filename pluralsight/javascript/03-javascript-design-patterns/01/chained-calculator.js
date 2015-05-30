/* Chained Calculator */

var Calc = function( start ) {

  var that = this;

  this.add = function( x ) {

    start += x;

    return that;

  };

  this.multiply = function( x ) {

    start *= x;

    return that;

  };

  this.equals = function( callback ) {

    callback( start );

    return that;

  };

};

var value = new Calc( 0 );
value
  .add( 1 )
  .add( 2 )
  .multiply( 3 )
  .equals( function( result ) {
    console.log( result );
  });
