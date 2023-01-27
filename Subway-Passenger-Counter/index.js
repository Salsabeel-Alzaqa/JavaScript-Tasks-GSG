let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

let increment = ()=>
{
    count += 1;
    countEl.textContent = count;
}
let save = ()=>
{
    let countstr = count + " - ";
    saveEl.textContent += countstr;
}