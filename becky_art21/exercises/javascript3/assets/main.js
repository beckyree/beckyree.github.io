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
let hearts = document.querySelectorAll(".hearts");

let affirmations = ["I am enough", "I am unique", "I believe in myself",
	"I am enjoying the present moment", "I am worthy", "I have hope"];

function genAff() {
	let randIndex = Math.floor(Math.random() * affirmations.length);
  	let affirmation = affirmations[randIndex];
}

// button.addEventListener("click", function (event) {
//   console.log(event, event.target);
//   let newItem = document.createElement("div");
//   // newItem.classList.add(genAff);
//   wrapper.appendChild(newItem);
// });

// // place our blobs randomly
// hearts.forEach(function (heart) {
// heart.style.right = (100 * Math.random()) + '%';
// heart.style.top = (100 * Math.random()) + '%';
// });
// wrapper.addEventListener("click", function (event) {
// if (event.target.classList.contains("hearts")) {
//   event.target.remove();
// }
// });

button.addEventListener("click", function(event) {
	console.log(event, event.target);
	let newItem = document.createElement("div");
	wrapper.appendChild(newItem);

	hearts.forEach(function (heart) {
	heart.style.right = (100 * Math.random()) + '%';
	heart.style.top = (100 * Math.random()) + '%';
	});
	wrapper.addEventListener("click", function (event) {
	if (event.target.classList.contains("hearts")) {
	  event.target.remove();
}	

// button.addEventListener("click", function(event) {
//   console.log(event, event.target);
//   let newItem = document.createElement("div");
//   newItem.classList.add("new-content");
//   newItem.innerHTML = "But wait, theres more ";
//   wrapper.appendChild(newItem);
// });

// button.addEventListener("click", function(event) {
//   console.log(event, event.target);
//   let newItem = document.createElement("div");
//   newItem.classList.add(genAff());
//   // newItem.innerHTML = genAff;
//   wrapper.appendChild(newItem);
// });