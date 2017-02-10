/**
 * This is our "Entry Point"
 */
// import * as _ from 'lodash';
//
// import * as addition from 'math/addition';
// import {users} from 'data/users';
//
// console.log(_.where(users, {age: 36}));
//
// console.log(
//   "1 + 3",
//   addition.sumTwo(1, 3)
// );
//
// console.log(
//   "1 + 3 + 4",
//   addition.sumThree(1, 3, 4)
// );
import * as _ from 'lodash'
import * as addition from 'math/addition';
import {users} from 'data/users';
//import {sumTwo as sum2, sumThree} from 'math/addition'

console.log(users);
console.log(_.where(users, {age: 36}))
console.log(addition.sumTwo(2, 3));
console.log(addition.sumThree(2, 3, 7));
