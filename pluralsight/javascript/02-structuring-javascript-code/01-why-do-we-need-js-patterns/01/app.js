window.onload = function() {

  var output = document.getElementById( 'output' );
  output.innerHTML = myNonClosure();

  setTimeout( function() {
    output.innerHTML += '<br>' + myNonClosure();
  }, 310 );

};

function myNonClosure() {

  // do not store the date value for further consulting
  var date = new Date();
  return date.getMilliseconds();

};

