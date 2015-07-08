module.exports = destroyer;

function destroyer( arr ) {
  var args   = [].slice.call( arguments, 0 );
  var array  = args.shift();
  var result = [];

  array
    .forEach( function( item ) {
      if ( args.indexOf( item ) < 0 ) {
        result.push( item );
      }
    });

  return result;
}
