//import package
const leftPad = require('left-pad');

let numbers = ['12', '846', '2', '1236'];

//set function can take any array
function pad(arr) {
  arr.forEach(num => {
    //try it with 4 using the package "leftPad"
    console.log(leftPad(num, 4, '_'));
    //try it with 8 using the package "leftPad"
    console.log(leftPad(num, 8, '_'));
  });
}
//call function
pad(numbers);
