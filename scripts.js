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
//SLIDER CONTROLS
//Gather variables
let slider = document.querySelectorAll('.slider-wrapper');
let left = document.querySelector('.left-arrow');
let right = document.querySelector('.right-arrow');
let position = 0;
//Hide left arrow on initial load
left.classList.add("hide-left-arrow");

function slide(arrow) {
  //Gather variables
  let i;
  let sliderCount = document.querySelectorAll('.slider-wrapper').length;

  //Move slider items to the left until it reaches the beginning
  if (arrow === 'left' && position !== 0) {
    //Move by 150px
    position = position + 150;
    for (i = 0; i < sliderCount; i++) {
      slider[i].style.transform = "translate(" + position + "px)";
    }
    //Remove left arrow if the slider reaches the beginning
    if (position === 0) {
      left.classList.add("hide-left-arrow");
    }
  }

  //Move slider items to the right until it reaches the limit
  if (arrow === 'right' && position !== -300) {
    //Move by 150px
    position = position - 150;
    for (i = 0; i < sliderCount; i++) {
      slider[i].style.transform = "translate(" + position + "px)";
    }
    //Show left arrow if slider position is greater than 0
    if (position !== 0) {
      left.classList.remove("hide-left-arrow");
    }
  }
}

//Add event listeners for the left and right arrows.
left.addEventListener("click", function(x) {
  slide("left");
});
right.addEventListener("click", function(x) {
  slide("right");
});

//POPUP WINDOW
//Gather variables
let videosContainer = document.querySelector("#l-media");
let thumbnails = document.querySelectorAll(".thumbnail");
let thumbnailCount = document.querySelectorAll(".thumbnail").length;
let popupContainer = document.querySelector(".popupcontainer");
let popups = document.querySelectorAll(".popup");
let closeButton = document.querySelector(".close-button");
let i;

//Function open popup window
function openPopup(i) {
  popups[i].style.display = "block";
}
//Function close popup window
function closePopup(i) {
  popups[i].style.display = "none";
}

//Use event bubbling to dynamically determine which element was selected
videosContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('thumbnail')) {
    //Determine the current thumbnail selected
    let c = event.srcElement;

    //Determine which popup window to open
    for (i = 0; i < 3; i++) {
      if (c === thumbnails[i]) {
        openPopup(i);
      }
    }
  }
}, false);

//Event listener to determine if close button selected or off screen click
popupContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('close-button') || event.target.classList.contains('popup')) {
    //Determine the current popup window selected
    let c = event.srcElement;

    //Determine which popup window to close
    for (i = 0; i < 3; i++) {
      if (c === popups[i] || closeButton) {
        closePopup(i);
      }
    }
  }
}, false);