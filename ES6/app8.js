let animal = "gorilla";
let sound = "grrr";

let result = `${animal} says ${sound}`;
console.log(result);

//

var message = `It's ${new Date().getHours()} I'm sleepy`;
console.log(message);


function parse(strings, ...values) {
  console.log(strings);
  console.log(values);
}

//

var message = parse`It's ${new Date().getHours()} I'm sleepy`;

function parse2(strings, ...values) {
  if (values[0] < 20) {
    values[1] = "awake";
  }
  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

var message2 = parse2`It's ${new Date().getHours()} I'm ${""}`;
console.log(message2);
















//
