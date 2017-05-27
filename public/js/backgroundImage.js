$(document).ready(function() {
  getPic()
  $('#changeBackground').click( function () {
    changePic();
  })
});

function getPic() {
  let pic = localStorage.getItem("pic")
  if (pic) {
    $('body').css({'background-image': 'url(' + pic + ')', 'background-size' : 'cover'})
  } else {
    $('body').css({'background-image': 'url(../images/forrest.jpg)', 'background-size' : 'cover'})
  }
}

var index = 0

function changePic(){
  var photosArray = ['../images/forrest.jpg', '../images/picTest.jpg', '../images/beachRocks.jpg', '../images/mountainClouds.jpg', '../images/winterMountains.jpg', '../images/boardwalk.jpg', '../images/skyline.jpg', '../images/cityscape.jpg'];
  var backgroundImage = photosArray[index]

  $('body').css({'background-image': 'url(' + backgroundImage + ')', 'background-size' : 'cover'});
  index < photosArray.length - 1 ?
  index++ :
  index = 0

  localStorage.setItem("pic", backgroundImage)
}
