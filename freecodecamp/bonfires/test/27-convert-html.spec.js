var expect = require( 'chai' ).expect;
var convert = require( '../27-convert-html' );

describe( '#convert Convert HTML Entities', function() {

  it( 'Should return the HTML entities  converted', function() {
    expect( convert( 'Dolce & Gabbana' )).to.equal( 'Dolce &amp; Gabbana' );
  });

  it( 'Should return the HTML entities  converted', function() {
    expect( convert( 'Hamburgers < Pizza < Tacos' )).to.equal( 'Hamburgers &lt; Pizza &lt; Tacos' );
  });

  it( 'Should return the HTML entities  converted', function() {
    expect( convert( 'Sixty > twelve' )).to.equal( 'Sixty &gt; twelve' );
  });

  it( 'Should return the HTML entities  converted', function() {
    expect( convert( 'Stuff in "quotation marks"' )).to.equal( 'Stuff in &quot;quotation marks&quot;' );
  });

  it( 'Should return the HTML entities  converted', function() {
    expect( convert( "Shindler's List" )).to.equal( "Shindler&apos;s List" );
  });

  it( 'Should return the HTML entities  converted', function() {
    expect( convert( '<>' )).to.equal( '&lt;&gt;' );
  });

  it( 'Should return the HTML entities  converted', function() {
    expect( convert( 'abc' )).to.equal( 'abc' );
  });

});
