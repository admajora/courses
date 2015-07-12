/*
 * Steamroller - Difficulty: 2/5
 *
 * - Flatten a nested array. You must account for varying levels of nesting.
 *
 * Source: http://www.freecodecamp.com/challenges/bonfire-steamroller
 */

function steamroller( arr ) {
  var result = arr.reduce( function( a, b ) {
    return a.concat(b);
  }, []);

  var hasArray = result.some( function( item ) {
    if ( Array.isArray( item )) {
      return true;
    }

    return false;
  });

  if ( hasArray ) {
    return steamroller( result );
  } else {
    return result;
  }
}

module.exports = steamroller;
