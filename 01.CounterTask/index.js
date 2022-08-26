

//document.getElementById("count-el").innerText = 10;

let countEl = document.getElementById("count-el")
let savedEl = document.getElementById("saved-el")
let totalCountEl = document.getElementById("total-count")
let sum = 0;
let count = 0;

function increment(){
    count+=1
    sum+=1
    countEl.innerText = count
    totalCountEl.innerText = "Total counted people: " + sum;

}

function save(){
    let countStr = count + "  -  "
    savedEl.textContent += countStr
    count = 0
}



