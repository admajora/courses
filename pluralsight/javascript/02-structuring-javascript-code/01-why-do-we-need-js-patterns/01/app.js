window.onload = function() {

  var output  = document.getElementById( 'output' );
  var closure = myClosure();

  output.innerHTML = closure();

  setTimeout( function() {
    output.innerHTML += '<br>' + closure();
  }, 310 );

};

function myNonClosure() {

  // do not store the date value for further consulting
  var date = new Date();
  return date.getMilliseconds();

};

function myClosure() {

  var date = new Date();
  return function() {
    return date.getMilliseconds();
  }

}

