
let button = document.querySelector(".button");
// let colors = ["#255c34", "#726756", "#703a56", "#953e00"];
// let seasons = document.querySelectorAll("seasons");
let season[0].src = "url('fall.jpeg')";
let season[1].src = "url('winter.jpeg')";
let season[2].src = "url('spring.jpeg')";
let season[3].src = "url('summer.jpeg')";

let body = document.querySelector("body");

// document.body.style.backgroundImage = "url('image.png')";

// function newColor() {
//   let randIndex = Math.floor(Math.random() * colors.length);
//   let randColor = colors[randIndex];
//   body.style.backgroundColor = randColor;
// }

function changeSeason() {
  let randIndex = 100 * (Math.random() * 3);
  let change = season[randIndex];
  document.body.style.backgroundImage = change;
}

button.addEventListener("click", changeSeason());