let first = [1, 2, 3];
let second = [4, 5, 6];

console.log(...first);
console.log(first);

first.push(second);
console.log(first);

first.push(...second);
console.log(first);

function add(a, b, c) {
  let result = a + b + c;
  console.log(result);
}

add(...second);
