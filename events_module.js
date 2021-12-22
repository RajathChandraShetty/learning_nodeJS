const { pseudoRandomBytes } = require('crypto');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1,num2)=>{
    console.log('Tutorial event has occured');
    console.log(num1 + num2)
});

eventEmitter.emit('tutorial',3,5);

// custom object using events

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name
    }
    get name(){
        return this._name;
    }
}

// creating person instnace
let pramo = new Person('Pramo')

pramo.on('name',()=>{
    console.log('my name is ' + pramo.name);
});

pramo.emit('name');