// initial code ( module 1 )

// console.log('Starting node JS')

// // getting the sum function from tutorial.js script
// // dont pass extension, only filename
// const tutorial = require('./tutorial')
// console.log(tutorial)

// console.log(tutorial.sum(3,4))
// console.log(tutorial.pi)
// console.log(new tutorial.SomeMathObject())



// starting from NPM install module
// npm i lodash 


const _ = require('lodash');
// create an array with 1 to 5 and replace index 1,2 & 3 with banana 
let ex_arr = _.fill([1,2,3,4,5],"banana",1,4);
console.log(ex_arr);