"use strict";
console.log("works just fiaane");
let options = document.querySelectorAll("input");
document.querySelector(".dice > p").innerText =
    options[0].value;
function rollDice() {
    let rolledFood = Math.floor(Math.random() * 6);
    const diceEl = document.querySelector(".dice");
    diceEl.classList.add("shake");
    setTimeout(() => {
        document.querySelector(".dice > p").innerText =
            options[rolledFood].value;
        diceEl.classList.remove("shake");
    }, 600);
}
document.querySelector(".roll").addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => rollDice(), 500);
});
