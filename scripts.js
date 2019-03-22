//Mobile menu - clicking on the hamburger icon opens up the dropdown menu

//Gather variables
let hamburger = document.getElementsByClassName('hamburger-menu');
let mobileMenu = document.getElementsByClassName('menu-wrapper')[0];
let firstBar = document.getElementsByClassName('bar')[0];
let secondBar = document.getElementsByClassName('bar')[1];
let thirdBar = document.getElementsByClassName('bar')[2];


function toggleMenu() {
  //Toggle animation classes
  mobileMenu.classList.toggle("menu-wrapper-hide");
  firstBar.classList.toggle("rotate");
  secondBar.classList.toggle("rotate-negative");
  thirdBar.classList.toggle("slide-right");
}

//Gather variables
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