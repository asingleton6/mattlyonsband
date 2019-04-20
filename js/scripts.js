//MENU BACKGROUND - change menu background once the user scrolls down the a quarter down the header.
//Gather variables
let header = document.querySelector(".l-header");
let navbar = document.querySelector(".l-nav");
let logo = document.querySelectorAll(".logo");
let menuWrapper = document.querySelector(".menu-wrapper");
let headerHeight;
let y = 0;

function navbarBackgroundScroll() {
  //Get the height of the header
  headerHeight = header.offsetHeight;
  headerHeight = (headerHeight / 4);
  if (typeof(window.pageYOffset) == 'number') {
    //Safari compliant
    y = window.pageYOffset;
  } else {
    //DOM compliant
    y = document.body.scrollTop;
  }
  //Change the background from transparent to black
  if (y > headerHeight) {
    navbar.classList.add("navbar-background");
    logo[1].classList.add("logo-resize");
    menuWrapper.classList.add("menu-wrapper-reposition");
  } else if (y < headerHeight) {
    navbar.classList.remove("navbar-background");
    logo[1].classList.remove("logo-resize");
    menuWrapper.classList.remove("menu-wrapper-reposition");
  }
}
//ACTIVE MENU ITEM - add the active class to the currently selected menu item.
//Gather variables
let desktopMenuItems = document.querySelectorAll(".navbar-desktop .menu-item");
let menu = document.querySelector(".menu");
let current = desktopMenuItems[0];
let x;
//Use bubbling event listener to detect which menu item was selected.
menu.addEventListener('click', function(event) {
  if (event.target.classList.contains('menu-item')) {
    //Determine the current menu item selected
    let c = event.srcElement;

    //Add active class to selected menu item and remove current
    for (x = 0; x < 4; x++) {
      if (c === desktopMenuItems[x]) {
        desktopMenuItems[x].classList.add("active");
        current.classList.remove("active");
        current = desktopMenuItems[x];
      }
    }
  }
}, false);

//MOBILE MENU - clicking on the hamburger icon opens up the dropdown menu
//Gather variables
let mobileMenuItems = document.querySelectorAll(".navbar-mobile .menu-item");
let navbarMobile = document.querySelector(".navbar-mobile");
let hamburger = document.getElementsByClassName('hamburger-menu');
let mobileWrapper = document.getElementsByClassName('menu-wrapper')[0];
let bars = document.querySelectorAll('.bar');
let z;

function toggleMenu() {
  //Toggle animation classes
  for (z = 0; z < 4; z++) {
    mobileMenuItems[z].classList.toggle("menu-item-slide");
  }
  mobileWrapper.classList.toggle("menu-wrapper-hide");
  bars[0].classList.toggle("rotate");
  bars[1].classList.toggle("rotate-negative");
  bars[2].classList.toggle("slide-right");
}

//Use bubbling listener for mobile menu
navbarMobile.addEventListener('click', function(event) {
  if (event.target.classList.contains('bar') || event.target.classList.contains('menu-wrapper') || event.target.classList.contains('hamburger-menu') || event.target.classList.contains('menu-item')) {
    toggleMenu();
  }
}, false);

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
// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Gather variables
let videosContainer = document.querySelector("#l-media");
let thumbnails = document.querySelectorAll(".thumbnail");
let thumbnailCount = document.querySelectorAll(".thumbnail").length;
let popupContainer = document.querySelector(".popupcontainer");
let popups = document.querySelectorAll(".popup");
let closeButton = document.querySelector(".close-button");
let i;
let players = [];

function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  players[0] = new YT.Player('video1', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
  players[1] = new YT.Player('video2', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
  players[2] = new YT.Player('video3', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

//Function open popup window
function openPopup(i) {
  popups[i].style.display = "block";
}
//Function close popup window
function closePopup(i) {
  popups[i].style.display = "none";
}

function onPlayerReady(event) {
  //Use event bubbling to dynamically determine which element was selected
  videosContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('thumbnail')) {
      //Determine the current thumbnail selected
      let c = event.srcElement;
      console.log(c);
      //Determine which popup window to open
      for (i = 0; i < thumbnailCount; i++) {
        console.log(thumbnails[i]);
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
      for (i = 0; i < thumbnailCount; i++) {
        if (c === popups[i] || closeButton) {
          closePopup(i);
          players[i].pauseVideo();
        }
      }
    }
  }, false);
}