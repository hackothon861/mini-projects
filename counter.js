const decreasedBtn = document.getElementById("decreasedBtn");
const resetBtn = document.getElementById("resetBtn");
const increasedBtn = document.getElementById("increasedBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
increasedBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
 decreasedBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
 }
 resetBtn.onclick = function(){
    count = 0
    countLabel.textContent = count;
 }