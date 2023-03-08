// *** THE COLLATZ CONJECTURE***

const collatzMe = function()
{
    

let guess = parseInt(prompt("Enter Number"));
let attempts = 1
while (guess > 1) {
    if (guess % 2 === 0) {
        guess = (guess / 2);
        console.log(guess);
        attempts++
    }
    else {
        guess = (guess * 3 + 1)
        console.log(guess);
        attempts++
    }
}
console.log(`It took ${attempts} attempts to reach 1`);
    
}
