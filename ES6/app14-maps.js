var myMap = new Map();

myMap.set('foo', 'bar');
myMap.set('hello', 'world');

console.log(myMap.size);

for(var key of myMap.keys()){
  console.log(key);
}

for(var [key, value] of myMap.entries()){
  console.log(`${key} = ${value}`);
}
