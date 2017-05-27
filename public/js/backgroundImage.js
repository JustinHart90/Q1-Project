$(document).ready(function() {
  getUrl()
  $('#changeBackground').click( function () {
    getUrl();
  })
});

var index = 0

function getUrl(){
  var photosArray = ['../images/forrest.jpg', '../images/picTest.jpg', '../images/beachRocks.jpg', '../images/mountainClouds.jpg', '../images/winterMountains.jpg', '../images/boardwalk.jpg', '../images/skyline.jpg', '../images/cityscape.jpg'];
  // var random = Math.floor(Math.random() * photosArray.length)
  var backgroundImage = photosArray[index]
  $('body').css({'background-image': 'url(' + backgroundImage + ')', 'background-size' : 'cover'});
  index < photosArray.length - 1 ? index++ : index = 0
}
