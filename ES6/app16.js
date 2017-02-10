function myF() {
  // arguments.forEach(function (v, i, a) {
  //   console.log(v);
  //
  // })
  console.log(arguments.length);
  console.log(arguments);
}

myF(1, 2, 3);

console.log("--------");

function Store() {
  var aisle = {
    fruit: [],
    vegetable: []
  }
  return {
    // add:function (category) {
    add:function (category, ...items) {
      // var items = [].splice.call(arguments, 1);
      // console.log(items);
      items.forEach(function(value, index, array){
        aisle[category].push(value);
      })
    },
    aisle: aisle
  }
}

var store = new Store();
store.add('fruit', 'apples', 'oranges');
console.log(store.aisle);

console.log("--------");
