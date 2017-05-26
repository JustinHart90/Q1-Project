$(document).ready(function() {
  getUrl()
  $('#changeBackground').click( function () {
    getUrl();
  })
});

var index = 0

function getUrl(){
  var photosArray = ['../css/forrest.jpg', '../css/picTest.jpg', '../css/beachRocks.jpg', '../css/mountainClouds.jpg', '../css/winterMountains.jpg', '../css/boardwalk.jpg', '../css/skyline.jpg', '../css/cityscape.jpg'];
  // var random = Math.floor(Math.random() * photosArray.length)
  var backgroundImage = photosArray[index]
  $('body').css({'background-image': 'url(' + backgroundImage + ')', 'background-size' : 'cover'});
  index < photosArray.length - 1 ? index++ : index = 0
}
