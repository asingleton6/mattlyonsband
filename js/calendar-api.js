//Client ID and API key from the Developer Console
var CLIENT_ID = '75991677569-adsarb7b9qaf49sfgdasabnuru4650v1.apps.googleusercontent.com';
var API_KEY = 'AIzaSyC8dxNaE3eO-bEC_aEGkP2JIsYO-b-MtQY';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function() {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listUpcomingEvents();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */

function appendPre(summary, location, date) {
  // Create container for events
  var container = document.createElement("div");
  container.setAttribute('class', 'grid-item l-event');

  //Create Date object and then gather day and month
  var eventDate = new Date(date);
  var day = eventDate.getDate();
  var month = eventDate.toLocaleString('en-us', {month: 'long'});
  var textContentDate = document.createTextNode(month+" "+day+" ");
  //Create date div add contents and then append it to container
  var d = document.createElement("div");
  d.setAttribute('class', 'date');
  d.appendChild(textContentDate);
  container.appendChild(d);

  //Create place div add contents and then append it to container
  var place = document.createElement("div");
  place.setAttribute('class', 'location');
  var p = document.createTextNode(summary);
  place.appendChild(p);
  container.appendChild(place);

  //Create city div add contents and then append it to container
  var city = document.createElement("div");
  city.setAttribute('class', 'city');
  var c = document.createTextNode(location);
  city.appendChild(c);
  container.appendChild(city);

  //Create time div add contents and then append it to container
  var time = document.createElement("div");
  time.setAttribute('class', 'time');
  var t = eventDate.getHours();
  //Change from 24hr time to standard time
  if (t >= 12) {
    if (t === 24){
      t = 12 + ":00am";
    } else {
      t = (t % 12 || 12) + ":00pm";
    }
  } else {
    t = t + ":00am";
  }
  var hour = document.createTextNode(t);
  time.appendChild(hour);
  container.appendChild(time);

  //Add the container to the content ID
  var pre = document.getElementById('content');
  pre.appendChild(container);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function listUpcomingEvents() {
  gapi.client.calendar.events.list({
    'calendarId': 'nujpi4elvvndqe2k2da3upuk98@group.calendar.google.com',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 5,
    'orderBy': 'startTime'
  }).then(function(response) {
    var events = response.result.items;
    if (events.length > 0) {
      for (var i = 0; i < events.length; i++) {
        var event = events[i];
        var when = event.start.dateTime;
        var eventsISO = new Date(when);
        if (!when) {
          when = event.start.date;
        }
        appendPre(event.summary, event.location, eventsISO)
      }
    } else {
      appendPre('No upcoming events found.');
    }
  });
}
