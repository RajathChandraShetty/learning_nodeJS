const sum = (num_1, num_2) => num_1 + num_2;
const pi = 3.14;
class SomeMathObject{
    constructor(){
        console.log('object created')
    }
}

// making the sum function available for other scripts

// module.exports.sum = sum;
// module.exports.pi = pi;
// module.exports.SomeMathObject =SomeMathObject;

//OR

module.exports = {sum : sum, pi : pi, SomeMathObject : SomeMathObject}