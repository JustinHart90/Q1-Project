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
    $('body').css({'background-image': 'url(public/images/forrest.jpg)', 'background-size' : 'cover'})
  }
}

var index = 0

function changePic(){
  var photosArray = ['public/images/forrest.jpg', 'public/images/picTest.jpg', 'public/images/beachRocks.jpg', 'public/images/mountainClouds.jpg', 'public/images/winterMountains.jpg', 'public/images/boardwalk.jpg', 'public/images/skyline.jpg', 'public/images/cityscape.jpg'];
  var backgroundImage = photosArray[index]

  $('body').css({'background-image': 'url(' + backgroundImage + ')', 'background-size' : 'cover'});
  index < photosArray.length - 1 ?
  index++ :
  index = 0

  localStorage.setItem("pic", backgroundImage)
}
