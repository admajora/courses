var expect = require( 'chai' ).expect;

describe( 'WeakSets', function() {

  it( 'should not have properties & methods that relate to the entire set', function() {
    var set = new WeakSet();

    expect( set.size ).to.be.undefined;
    expect( set.entries ).to.be.undefined;
    expect( set.values ).to.be.undefined;
    expect( set.forEach ).to.be.undefined;

  });

  it( 'should be able to find items with has', function() {
    var set = new WeakSet();
    var item = { name : 'Joe' };

    set.add( item );

    expect( set.has( item )).to.equal( true );
  });

  it( 'should be able to remove items with delete', function() {
    var set = new WeakSet();
    var item = { name : 'Joe' };

    set.add( item );
    set.delete( item );

    expect( set.has( item )).to.be.false;
  });

  it( 'should remove all items when clear is called', function() {
    var set = new WeakSet();
    var item = { name : 'Joe' };

    set.add( item );
    set.clear();

    expect( set.has( item )).to.be.false;
  });
  
});
