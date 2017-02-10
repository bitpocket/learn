function* greet() {
  // let friendly = yield "Hello";
  //   console.log(friendly);
  // yield "How are you";
  // yield "Bye";

  let friendly = yield "Hello";
  friendly = yield friendly + "Bob";
  yield friendly + "Bye";
}

let greeter = greet();

// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());


for (let word of greeter) {
  console.log(word);
}
console.log("------");
let greeter2 = greet();

 console.log(greeter2.next().value);
 console.log(greeter2.next(" My name is ").value);
 console.log(greeter2.next(" Niece. ").value);

 console.log("------");

 function* graph() {
   let x=0;
   let y=0;
    while (true){
      yield {x, y};
      x+=2;
      y+=1;
    }
}
var gen = graph();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
