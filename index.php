<?php include('email_form.php'); ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <title></title>
</head>

<body>
  <div class="l-wrap">
    <div class="l-row">
      <div class="grid-item l-nav">
        <nav class="navbar-mobile hide-desktop">
          <div class="logo">Matt Lyons</div>
          <div class="hamburger-menu" onclick="toggleMenu()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <!-- Fix on Firefox and Safari -->
          <div id="menu" class="menu-wrapper menu-wrapper-hide">
            <ul>
              <li><a class="active menu-item" href="#events">Events</a></li>
              <li><a class="menu-item" href="#media">Media</a></li>
              <li><a class="menu-item" href="#biography">Biography</a></li>
              <li><a class="menu-item" href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <nav class="navbar-desktop hide-mobile">
          <div class="logo">Matt Lyons</div>
          <ul>
            <li><a class="active" href="#events">Events</a></li>
            <li><a href="#media">Media</a></li>
            <li><a href="#biography">Biography</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="l-row">
      <div class="grid-item l-header">
        <a class="photo-credit" href="https://www.instagram.com/fleisherphotography" target="_blank">Photo Credit: @fleisherphotography</a>
      </div>
    </div>
    <div id="events"></div>
    <div class="l-row">
      <div class="row-wrapper">
        <h2>Events</h2>
        <div class="grid-item l-event">
          <div class="date">March 15</div>
          <div class="location">Rose and crown</div>
          <div class="city">Atlanta, GA</div>
          <div class="time">8:00</div>
        </div>
        <div class="grid-item l-event">
          <div class="date">March 21</div>
          <div class="location">Solis</div>
          <div class="city">Atlanta, GA</div>
          <div class="time">8:00</div>
        </div>
        <div class="grid-item l-event">
          <div class="date">March 22</div>
          <div class="location">Line Creak</div>
          <div class="city">Peachtree City, GA</div>
          <div class="time">8:00</div>
        </div>
        <div class="grid-item l-event">
          <div class="date">March 29</div>
          <div class="location">The Bays</div>
          <div class="city">Atlanta, GA</div>
          <div class="time">8:00</div>
        </div>
      </div>
    </div>
    <div id="media"></div>
    <div class="l-row gray-background">
      <div class="row-wrapper position-relative">
        <h2>Media</h2>
        <div id="left-arrow" class="left-arrow"><img src="images/right_arrow.svg"/></div>
        <div id="right-arrow" class="right-arrow"><img src="images/left_arrow.svg"/></div>
        <div class="grid-item l-media" id="l-media">
          <div class="slider-wrapper">
            <a class="thumbnail">
              <img class="thumbnail-image" src="images/slider_1.png" alt="whipping post">
            </a>
          </div>
          <div class="slider-wrapper">
            <a class="thumbnail">
              <img class="thumbnail-image" src="images/slider_2.png" alt="whipping post">
            </a>
          </div>
          <div class="slider-wrapper">
            <a class="thumbnail">
              <img class="thumbnail-image" src="images/slider_3.png" alt="whipping post">
            </a>
          </div>
        </div>
      </div>
      <div class="popupcontainer">
        <div class="popup">
          <div class="popup-content">
            <img class="close-button" src="images/close.svg"/>
            <iframe id="video1" width="100%" height="315" src="https://www.youtube.com/embed/qILk4n3lkX8?enablejsapi=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="video-details">
              <h3>Whipping Post (Allman Brothers Cover)</h3>
              <h4>feat. Sean Clive</h4>
            </div>
          </div>
        </div>
        <div class="popup">
          <div class="popup-content">
            <img class="close-button" src="images/close.svg"/>
            <iframe id="video2" width="100%" height="315" src="https://www.youtube.com/embed/Y_BCYep_8JU?enablejsapi=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="video-details">
              <h3>Long Train Running/Superstition Medley</h3>
            </div>
          </div>
        </div>
        <div class="popup">
          <div class="popup-content">
            <img class="close-button" src="images/close.svg"/>
            <iframe id="video3" width="100%" height="315" src="https://www.youtube.com/embed/eDdGhyr2LFo?enablejsapi=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="video-details">
              <h3>Fourth of July</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="biography"></div>
    <div class="l-row">
      <div class="row-wrapper padding-mobile">
        <h2>Biography</h2>
        <div class="grid-item l-biography">
          <img class="short-image" src="images/bio_image.png" alt="">
          <img class="long-image" src="images/bio_image_mobile.png" alt="">
          <a class="photo-credit brown-text" href="https://www.instagram.com/tcrow86/" target="_blank">Photo Credit: @tcrow86</a>
        </div>
        <div class="grid-item l-biography">
          <p>
            Matt Lyons is an Atlanta based guitarist and singer songwriter. He specializes in blues, soul, and rock & roll, but makes frequent forays in to genres as diverse as classic country and jazz fusion. With influences including Gary Clark
            Jr., Jason Isbell, SRV, Duane Allman, Wes Montgomery and George Benson, Matt blends these varying styles into an exciting and foot stomping mix of originals and interpreted classics that any fan of live music is sure to appreciate. Don’t
            miss the opportunity to see one of metro Atlanta’s best kept musical secrets!
          </p>
        </div>
      </div>
    </div>
    <div id="contact"></div>
    <div class="l-row gray-background">
      <div class="row-wrapper padding-mobile">
        <div class="contact-info">
          <h2>Booking & Contact</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
          </p>
        </div>
        <form role="form" method="post" action="index.php#contact">
          <div class="grid-item l-contact">
            <form role="form" method="post" action="index.php#contact">
              <input type="text" id="name" class="form-input" placeholder="Full Name" name="name" value="<?= $name ?>">
              <span id="name-error" class="error"><?= $name_error ?></span>
              <input type="text" id="email" class="form-input" placeholder="Email" name="email" value="<?= $email ?>">
              <span id="email-error" class="error"><?= $email_error ?></span>
              <input type="text" id="phone" class="form-input" placeholder="Phone" name="phone" value="<?= $phone ?>">
              <span id="phone-error" class="error"><?= $phone_error ?></span>
          </div>
          <div class="grid-item l-contact">
              <p class="antispam">Leave this empty: <input type="text" name="url"></p>
              <label>Message</label>
              <textarea class="form-input" type="text" placeholder="" name="message"><?= $message ?></textarea>
              <button type="submit" class="btn">Send</button>
              <span class="success"><?= $success; ?></span>
          </div>
        </form>
      </div>
    </div>
  </div>
  <script src="scripts.js"></script>
</body>

</html>
