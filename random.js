const myButton = document.getElementById("myButton")
const mylabel1 = document.getElementById("mylabel1")
const mylabel2 = document.getElementById("mylabel2")
const mylabel3 = document.getElementById("mylabel3")

const min = 1;
const max = 6;

let randomNum1;

let randomNum2;

let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min 
    randomNum2 = Math.floor(Math.random() * max) + min 
    randomNum3 = Math.floor(Math.random() * max) + min
    mylabel1.textContent = randomNum1;
    mylabel2.textContent = randomNum2;
    mylabel3.textContent = randomNum3;
}
