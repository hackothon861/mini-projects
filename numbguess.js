const minNumb = 1;
const maxNumb = 100;
const answer = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb

let attempts = 0;
let guess;
let running = true;

while(running){ 
    guess = window.prompt(`Guess a number between ${minNumb} - ${maxNumb} `)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a valid number`)
    }
    else if(guess < minNumb || guess > maxNumb){
        window.alert(`Please Enter a valid number`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`Too LOW! TRY AGAIN`);
        }
        else if(guess > answer){
            window.alert(`Too HIGH! TRY AGAIN`);
        }
        
        else{
            window.alert(`Correct answer! THE ANSWER WAS ${answer}. IT took you ${attempts} attempts.`)
              running = false;
        }
    }
  
}
console.log(answer);  