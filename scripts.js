//Gather variable
let slider = document.getElementsByClassName('slider-wrapper');
let left = document.getElementsByClassName('left-arrow');
let right = document.getElementsByClassName('right-arrow');
let sliderCount = document.getElementsByClassName('slider-wrapper').length;
let position = 0;

function slideLeft() {
  //Left arrow click translate left
  let i;
  //Move slider pieces
  for (i = 0; i < sliderCount; i++) {
    //Keep track of slider position
    position = -50;
    document.getElementsByClassName('slider-wrapper')[i].style.transform = "translate(" + position + "px)";
  }
  console.log(position);
}

function slideRight() {
  //Right arrow click translate right
  let i;
  //Move slider pieces
  for (i = 0; i < sliderCount; i++) {
    //Keep track of slider position
    position = 50;
    document.getElementsByClassName('slider-wrapper')[i].style.transform = "translate(" + position + "px)";
  }
  console.log(position);
}