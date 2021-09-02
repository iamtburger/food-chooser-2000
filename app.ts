console.log("works just fiaane");

let options = document.querySelectorAll("input");

(<HTMLParagraphElement>document.querySelector(".dice > p")!).innerText =
	options[0].value;

function rollDice(): void {
	let rolledFood = Math.floor(Math.random() * 6);
	const diceEl = <HTMLDivElement>document.querySelector(".dice")!;
	diceEl.classList.add("shake");
	setTimeout(() => {
		(<HTMLParagraphElement>document.querySelector(".dice > p")!).innerText =
			options[rolledFood].value;
		diceEl.classList.remove("shake");
	}, 600);
}

document.querySelector(".roll")!.addEventListener("click", (e) => {
	e.preventDefault();
	setTimeout(() => rollDice(), 500);
});
