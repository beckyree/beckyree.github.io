
let button = document.querySelector(".button");

let season[0].src = "url('fall.jpeg')";
let season[1].src = "url('winter.jpeg')";
let season[2].src = "url('spring.jpeg')";
let season[3].src = "url('summer.jpeg')";

let body = document.querySelector("body");

function changeSeason() {
  let randIndex = 100 * (Math.random() * 3);
  let change = season[randIndex];
  document.body.style.backgroundImage = change;
}

button.addEventListener("click", changeSeason());