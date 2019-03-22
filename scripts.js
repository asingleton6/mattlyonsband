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
let slider = document.querySelectorAll('.slider-wrapper');
let left = document.querySelector('.left-arrow');
let right = document.querySelector('.right-arrow');
let position = 0;
//Hide right arrow on initial load
right.style.display = "none";

function slide(arrow) {
  //Gather variables
  let i;
  let sliderCount = document.querySelectorAll('.slider-wrapper').length;

  //Move slider items to the left until it reaches the limit
  if (arrow === 'left' && position !== -300) {
    //Move by 150px
    position = position - 150;
    for (i = 0; i < sliderCount; i++) {
      slider[i].style.transform = "translate(" + position + "px)";
    }
    //Show right arrow if slider position is greater than 0
    if (position !== 0) {
      right.style.display = "block";
    }
  }

  //Move slider items to the right until it reaches the beginning
  if (arrow === 'right' && position !== 0) {
    //Move by 150px
    position = position + 150;
    for (i = 0; i < sliderCount; i++) {
      slider[i].style.transform = "translate(" + position + "px)";
    }
    //Remove right arrow if the slider reaches the beginning
    if (position === 0) {
      right.style.display = "none";
    }
  }
  console.log(position);
}

//Add event listeners for the left and right arrows.
left.addEventListener("click", function(x) {
  slide("left");
});
right.addEventListener("click", function(x) {
  slide("right");
});