const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,
                         output : process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 20) + 2)

let answer  = num1 + num2

rl.question(`What is ${ num1 } + ${ num2 }? \n`,
(userInput)=>{
    //console.log(userInput);
    // closing the interface if answer is correct
    if (userInput.trim() == answer){
        rl.close();
    }
    else {
        rl.setPrompt('Incorrect, you bad at maths \n')
        rl.prompt();
        rl.on('line',(userInput)=>{
            if (userInput.trim() == answer){
                rl.close();
            }
            else {
                rl.setPrompt('Incorrect answer ! \n')
                rl.prompt();
            }
        })
    }
});

rl.on('close', ()=>{
    console.log('Correct answer !! ')
});