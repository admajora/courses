window.onload = function() {

  var output  = document.getElementById( 'output' );
  var closure = myClosure2();

  output.innerHTML = closure.time();

  setTimeout( function() {
    output.innerHTML += '<br>' + closure.time();
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

function myClosure2() {

  var date = new Date();
  var nestedFunc = function() {
    return date.getMilliseconds();
  };

  return {
    time : nestedFunc
  };

}