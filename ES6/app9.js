var obj = {
  color: "blue"
}

console.log(obj.color);

//

var {color} = {
  color:"green"
}

console.log(color);

//

var {color, position} = {
  color:"green",
  position: 1,
  name: "John"
}

console.log(color, position);

//

function generateObj() {
  return {
    color:"green",
    position: 1,
    name: "John",
    state: "some state"
  }
}


var {name, state} = generateObj();
console.log(name);
console.log(state);

var {name:firstName, state: location} = generateObj();
console.log(firstName);
console.log(location);

//

var [first,,,,fifth] = ["red", "yellow", "green", "blue", "black", "orange"];

console.log(first);
console.log(fifth);

//
console.log("----");

var people = [
  {
  "firstName": "Clinton",
  "lastName": "Ruiz"
  },
  {
  "firstName": "John",
  "lastName": "Smith"
  },
  {
  "firstName": "Barbara",
  "lastName": "Klein"
  },
];

people.forEach(({firstName})=>console.log(firstName))

//
console.log("----");

var [, Skyler] = people;
 function logLastName({lastName}) {
   console.log(lastName);
 }

 logLastName(Skyler);




















//
