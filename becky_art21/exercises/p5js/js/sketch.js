
//create a variable to store the slider in
let slider;

// function setup() {
//   //create a variable for canvas so that we can reference it for positioning later
//   let canvas = createCanvas(windowWidth, windowHeight);
//   //you can specify the position of your element like this. it's best to do most positioning in CSS, but here I'm setting it to the top
//   canvas.position(0, 0);
//   //you can add a CSS class to something by putting .class after it
//   canvas.class("container");
//   //set the variable to the createSlider function. createSlider values are: minimum, maximum, starting value.
//   slider = createSlider(10, 1000, 0);
//   slider.class("slider");
// }
// function draw() {
//   background("PapayaWhip");

//   fill("Gold");
//   //set the width and height of the ellipse using slider.value
//   ellipse(windowWidth/2, windowHeight/2, slider.value(), slider.value());
// }

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.class("container");
  slider = createSlider(10, 1000, 0);
  slider.class("slider");
}
function draw() {
  // let r = random(0, 75);
  // let g = random(76, 150);
  // let b = random(151, 255);
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  blendMode(DIFFERENCE);

  ellipse(windowWidth/2, windowHeight/2, slider.value(), slider.value());
  fill(r, g, b);
  ellipse(windowWidth/4, windowHeight/2, slider.value(), slider.value());
  fill(r, g, b);
  ellipse(windowWidth/2, windowHeight/4, slider.value(), slider.value());
  fill(r, g, b);
  ellipse(windowWidth/4, windowHeight/4, slider.value(), slider.value());
  fill(r, g, b);
  // ellipse((windowWidth/4) * 3, (windowWidth/4) * 3, slider.value(), slider.value());
  ellipse((windowWidth/4) * 3, windowHeight/4, slider.value(), slider.value());
  fill(r, g, b);
  // ellipse(windowWidth/4, (windowWidth/4) * 3, slider.value(), slider.value());
  ellipse((windowWidth/4) * 3, windowHeight/2, slider.value(), slider.value());
  fill(r, g, b);
  ellipse(windowWidth/2, (windowWidth/4) * 3, slider.value(), slider.value());
  fill(r, g, b);
}

let txt = createDiv('This is an HTML string!');
txt.class("copy")
txt.position(50, 50);