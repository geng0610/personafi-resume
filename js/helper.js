/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/

var HTMLheaderPic = '<div id="header-pic" class="col-md-3"><img id="profile-pic" src="%profile-pic%" alt="profile picture" class="row"></div>';
var HTMLheaderDetail = '<div id="header-details" class="col-md-9"></div>';

var HTMLheaderName = '<h1 id="name" class="row header-name">%name%</h1>';
var HTMLheaderDescription = '<h2 id="summary" class="row header-description">%header-description%</h2>';
var HTMLheaderEmail = '<div id="personal-e-mail" class="row personal-contact"></div>';
var HTMLheaderWebsite = '<div id="personal-website" class="row personal-contact"></div>';

var HTMLheaderEmailText = '<div id="e-mail-description" class="col-md-9 contact-description"><a href = "mailto:%personal-e-mail%"><img id="e-mail-icon" src="images/mail-icon-256px.png" class="contact-icon" ></a><span class="contact-text">%personal-e-mail%</span></div>';
var HTMLheaderEmailEnd = '<div id="more-e-mail-description" class="col-md-3 more-contact-description"><button id="more-email" class="contact-add-button" onclick="addEmail()">other e-mails</button></div>';
var HTMLheaderEmailEndLess = '<div id="less-e-mail-description" class="col-md-3 more-contact-description"><button id="less-email" class="contact-subtract-button" onclick="removeEmail()">hide other e-mails</button></div>';
var HTMLheaderWebsiteText = '<div id="website-description" class="col-md-9 contact-description"><a href = "%weblink%"><img id="website-icon" src="images/link-icon-256px.png" class="contact-icon" ></a><span class="contact-text"><a href = "%weblink%">%weblink%</a></span></div>';
var HTMLheaderWebsiteEnd = '<div id="more-website-description" class="col-md-3 more-contact-description" ><button id="more-website" class="contact-add-button" onclick="addWebsite()">other websites</button></div>';
var HTMLheaderWebsiteEndLess = '<div id="less-website-description" class="col-md-3 more-contact-description" ><button id="less-website" class="contact-subtract-button" onclick="removeWebsite()">hide other websites</button></div>';

var HTMLsocialIcons = '<div id="social-icons" class="row"></div><hr>';
var HTMLsocialIcon = '<a href = "%link%"><img id="%social%-icon" src="images/%social%-icon-256px.png" class="social-icon" ></a>';

var HTMLworkExperiences = '<div id="workExperience" class="row section"><div class="col-md-3 section-title"><h3>Work Experiences:</h3></div><div id = "work-experiences" class="col-md-9 section-description"></div></div><hr>';

var HTMLworkExperienceStart = '<div class = "entry"><div class="row"><div class="col-md-9 entry-description">';
var HTMLworkExperienceLink = '<a href = "%link%"><img src="%image-source%" alt="work-logo" class="experience-icon" ></a>';
var HTMLworkExperienceSource = '<a href=%source% class = "entry-description-title">';
var HTMLworkExperiencePosition = '%position%';
var HTMLworkExperienceEmployer = ', %employer%</a></div>';
var HTMLworkExperienceDate = '<div class="col-md-2 work-date"><span class = "entry-description-date">%date%</span></div></div>';
var HTMLworkExperienceDescription ='<div class="row"><div class = "col-md-11 entry-text">%description%<hr></div></div></div>';


var HTMLprojectExperiences = '<div id="projectExperience" class="row section"><div class="col-md-3 section-title"><h3>Past Projects:</h3></div><div id = "project-experiences" class="col-md-9 section-description"></div></div><hr>';

var HTMLprojectExperienceStart = '<div class = "entry"><div class="row"><div class="col-md-9 entry-description">';
var HTMLprojectExperienceLink = '<a href = "%link%"><img src="%image-source%" alt="work-logo" class="experience-icon" ></a>';
var HTMLprojectExperienceSource = '<a href=%source% class = "entry-description-title">';
var HTMLprojectExperienceTitle = '%title%';
var HTMLprojectExperienceSponsor = ', %sponsor%</a></div>';
var HTMLprojectExperienceDate = '<div class="col-md-2 work-date"><span class = "entry-description-date">%date%</span></div></div>';
var HTMLprojectExperienceDescription ='<div class="row"><div class = "col-md-11 entry-text">%description%<hr></div></div></div>';


var HTMLeducationExperiences = '<div id="educationExperience" class="row section"><div class="col-md-3 section-title"><h3>Education Experiences:</h3></div><div id = "education-experiences" class="col-md-9 section-description"></div></div><hr>';

var HTMLeducationExperienceStart = '<div class = "entry"><div class="row"><div class="col-md-9 entry-description">';
var HTMLeducationExperienceLink = '<a href = "%link%"><img src="%image-source%" alt="work-logo" class="experience-icon" ></a>';
var HTMLeducationExperienceSource = '<a href=%source% class = "entry-description-title">';
var HTMLeducationExperienceDegree = '%degree%';
var HTMLeducationExperienceMajor = ', %major%';
var HTMLeducationExperienceSchool = ', %school%</a></div>';
var HTMLeducationExperienceDate = '<div class="col-md-2 work-date"><span class = "entry-description-date">%date%</span></div></div></div>';

var HTMLrelevantTopics = '<div id="relevantTopics" class="row section"><div class="col-md-3 section-title"><h3>Relevant Topics:</h3></div><div class="col-md-9 section-description"><div class = "entry"><div id = "topicList" class="row"></div></div></div></div><hr>';
var HTMLrelevantTopic ='<div class="col-md-3 topic"> %topic% </div>';

var HTMLfromTheWebSection='<div id="fromTheWeb" class="row section"><div class="col-md-3 section-title"><h3>From the Web:</h3></div><div id="fromTheWebSection" class="col-md-9 section-description"></div></div><hr>';

var HTMLfromTheWebEntry='<div id="fromTheWebEntry" class = "web-entry" style="border-top: 3px solid %color%"></div>';
var HTMLfromTheWebTitle='<div class="row"><div class="col-md-12"><a href="%web-url%" class="web-site-title">%link-title%</a></div></div>';
var HTMLfromTheWebLink='<div class="row"><div class="col-md-12 web-site-link">%web-url%</div></div>';
var HTMLfromTheWebSnippet='<div class="row"><div class="col-md-12 web-site-snippet">%web-site-snippet%</div></div>';

var HTMLmap = '<div id="mapDiv" class="maps row"><div id="mapTitle" class="col-12-md">Where I&#39ve Lived and Worked</div></div><hr>';

var HTMLsocialIconsBelow = '<div id="letsConnect" class="row"><h2 class="center-text col-md-12">Let&#39s Connect</h2></div><div id="social-icons-below" class="row"></div>';


var googleMap = '<div id="map"></div>';


/*
Add and remove extra e-mail from display
*/
function addEmail(){
  for (i=1; i<profile.e_mails.length; i++){
    $("#more-e-mail-description").before(HTMLheaderEmailText.replace(/%personal-e-mail%/g,profile.e_mails[i]));
  }
  $("#more-e-mail-description").before(HTMLheaderEmailEndLess);
  var more_email_button = document.getElementById("more-e-mail-description");
  more_email_button.parentNode.removeChild(more_email_button);
};

function removeEmail() {
  //$('#resume-main').prepend('<p>testestests</p>');
  var less_email_button = document.getElementById("personal-e-mail");
  less_email_button.parentNode.removeChild(less_email_button);
  $("#personal-website").before(HTMLheaderEmail);
  $("#personal-e-mail").append(HTMLheaderEmailText.replace(/%personal-e-mail%/g,profile.e_mails[0]));
  $("#personal-e-mail").append(HTMLheaderEmailEnd);
};
/*
Add and remove extra e-mail from display
*/
function addWebsite(){
  for (i=1; i<profile.e_mails.length; i++){
    $("#more-website-description").before(HTMLheaderWebsiteText.replace(/%weblink%/g,profile.personal_website[i]));
  }
  $("#more-website-description").before(HTMLheaderWebsiteEndLess);
  var more_email_button = document.getElementById("more-website-description");
  more_email_button.parentNode.removeChild(more_email_button);
};

function removeWebsite() {
  var less_email_button = document.getElementById("personal-website");
  less_email_button.parentNode.removeChild(less_email_button);
  $("#personal-e-mail").after(HTMLheaderWebsite);
  $("#personal-website").append(HTMLheaderWebsiteText.replace(/%weblink%/g,profile.personal_website[0]));
  $("#personal-website").append(HTMLheaderWebsiteEnd);
};



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(profile.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in schools.schools) {
      locations.push(schools.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in jobs.jobs) {
      locations.push(jobs.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
   //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});