/*
 * Everything be true - Difficulty: 2/5
 *
 * - Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).
 * - For this, check to see if the property defined in the second argument is present on every element of the collection.
 * - Remember, you can access object properties through either dot notation or [] notation.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-everything-be-true
 */

function every( collection, pre ) {
  var result = true;
  var type = typeof pre;
  var key;

  collection
    .forEach( function( item, index, array ) {
      if ( type === 'string' ) {
        if ( !item[ pre ]) {
          result = false;
        }
      } else {
        for ( key in pre ) {
          if ( !item[ key ]) {
            result = false;
          } else if ( item[ key ] !== pre[ key ]) {
            result = false;
          }
        }
      }
    });

  return result;
}

module.exports = every;
