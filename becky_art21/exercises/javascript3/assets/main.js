// let red = document.querySelector(".red");
// let blue = document.querySelector(".blue");
// let yellow = document.querySelector(".yellow");

// function turnColor() {
// 	body.style.backgroundImage = "#255c34";
// }

// red.addEventListener("click", turnColor);
// blue.addEventListener("click", turnColor);
// yellow.addEventListener("click", turnColor);



let button = document.querySelector(".button");
let wrapper = document.querySelector(".wrapper");
// let hearts = document.querySelectorAll(".hearts");
let body = document.querySelector("body");

let affirmations = ["I am enough", "I am unique", "I believe in myself",
	"I am enjoying the present moment", "I am worthy", "I have hope"];

button.addEventListener("click", function(event) {
	let randIndex = Math.floor(Math.random() * affirmations.length);
	let affirmation = affirmations[randIndex];
	let displayText = document.createElement("div");
	displayText.style.position = "absolute";
	displayText.style.right = (100 * Math.random()) + '%';
	displayText.style.top = (100 * Math.random()) + '%';
	displayText.classList.add("new-content");
	displayText.innerHTML = affirmation;
	body.appendChild(displayText);

	// let hearts = document.createElement(".hearts");
	// hearts.style.right = (100 * Math.random()) + '%';
	// hearts.style.top = (100 * Math.random()) + '%';
	// hearts.classList.add("new-content");
	// body.appendChild(hearts);

	console.log(affirmation);


	// if (event.target.classList.contains("hearts")) {
	//   event.target.remove();
	// }

	// console.log(event, event.target);
	// let newItem = document.createElement("div");
	// newItem.add(genAff);
	// wrapper.appendChild(newItem);

	// hearts.forEach(function (heart) {
	// heart.style.right = (100 * Math.random()) + '%';
	// heart.style.top = (100 * Math.random()) + '%';
	// });
	// wrapper.addEventListener("click", function (event) {
	// if (event.target.classList.contains("hearts")) {
	//   event.target.remove();
	// }
});	