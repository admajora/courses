/*
 * Chunky Monkey - Difficulty: 1/5
 *
 * - Write a function that splits an array (first argument) 
 *   into groups the length of size (second argument)
 * - Returns them as a multidimensional array.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-chunky-monkey
 */

function chunk( arr, size ) {
  if ( !Array.isArray( arr )) {
    throw new TypeError( 'Should input an array' );
  }
  
  var oldArray = arr;
  var newArray = [];
  var length = oldArray.length;

  while ( length > size ) {
    newArray.push( oldArray.splice( 0, size ));
    length = oldArray.length;
  }

  newArray.push( oldArray );

  return newArray;
}

module.exports = chunk;
