function *differentStuff() {

  yield 21;
  yield { name : 'Eric', passions : [ 'programming', 'music' ]}
  yield 'A string with data in it';

}

var f = differentStuff();

console.log( f.next());
console.log( f.next());
console.log( f.next());
console.log( f.next());
console.log( f.next());
console.log( f.next());
console.log( f.next());
console.log( f.next());
console.log( f.next());
console.log( f.next());
