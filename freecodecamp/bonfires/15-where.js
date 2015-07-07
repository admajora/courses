/*
 * Where art thou - Difficulty: 1/5
 *
 * - Make a function that looks through a list (first argument) and
 *     returns an array of all objects that have equivalent 
 *     property values (second argument).
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-where-art-thou
 */

function where( collection, source ) {
  var result = [];
  var key    = Object.keys( source )[ 0 ]; 

  collection
    .forEach( function( item ) {
      try {
        if ( item[ key ] && item[ key ] === source[ key ]) {
          result.push( item );
        }
      } catch( e ) {
        console.log( e );
      }
    });

  return result;
}

module.exports = where;
