// you can pass in `scratchData` to test out `findByid`
// your function
var scratchData = [
  {id: 22, foo: 'bar'},
  {id: 28, foo: 'bizz'},
  {id: 19, foo: 'bazz'}
];

function findById(items, idNum) {
 // your code here
  >>>>>>>I HAVE NO IDEA WHAT I AM SUPPOSED TO BE FINDING WITH THIS ONE
  I DO NOT UNDERSTAND WHAT THEY ARE EVEN ASKING<<<<<<<
}


//

function testIt() {
  var testData = [
    {id: 1, foo: 'bar'},
    {id: 2, foo: 'bizz'},
    {id: 3, bang: 'boo'}
  ];
  var result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' +
      result.id
    );
    return
  }
  if (result.bang !== 'boo') {
    console.error('Expected all key/value pairs from target object to be returned');
    return
  }
  console.log('SUCCESS: `findByid` is working');
}

testIt();
