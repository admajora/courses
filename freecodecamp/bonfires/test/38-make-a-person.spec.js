var expect = require( 'chai' ).expect;
var Person = require( '../person' );

describe( '#Person()', function() {
    
    it('should return 6 keys', function(){
        var bob = new Person('Joaquim da Silva');
        expect(Object.keys(bob).length).to.eql(6);
    });
    
    it('should return an instance of Person', function(){
        var bob = new Person('Bla Bla');
        expect(bob instanceof Person).to.be.true;
    });
    
    it('should return undefined for the firstName', function(){
        var bob = new Person('Try Catch');
        expect(bob.firstName).to.be.undefined;
    });

    it('should return undefined for the lastName', function(){
        var bob = new Person('Try Catch');
        expect(bob.lastName).to.be.undefined;
    });

    it('should return "Bob" for the firstName', function(){
        var bob = new Person('Bob Dylan');
        expect(bob.getFirstName()).to.be.eql('Bob');
    });
    
    it('should return "Ross" for the lastName', function(){
        var bob = new Person('Mike Ross');
        expect(bob.getLastName()).to.be.eql('Ross');
    });

    it('should return "Bob Ross" for the fullName', function(){
        var bob = new Person('Bob motherfucker Ross');
        expect(bob.getFullName()).to.be.eql('Bob Ross')
    });    
    
    it('should return "Happy" for the firstName', function() {
        var bob = new Person('Happy Feet o Pinguim');
        expect(bob.getFirstName()).to.eql('Happy');
    });
    
    it('should return "Trees" for the lastName', function() {
        var bob = new Person('Happy Feet o Trees');
        expect(bob.getLastName()).to.eql('Trees');
    });

    it('should return "George Carlin" for the fullName', function() {
        var bob = new Person('George Happy Feet o Carlin');
        expect(bob.getFullName()).to.eql('George Carlin');
    });
    
});
