$(document).ready(function() {
  getURL();
  $('#changeBackground').click( function () {
    getURL();
  })
});

function getURL(){
  var url = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=9f010ff78acb2db92dadeec14aecfde1&gallery_id=72157677476597845&format=json&nojsoncallback=1";

  $.get(url)
  .then( function(data) {
    // var initialArray = data.photos.photo;
    // var splice6  = initialArray.splice(6, 1);
    // var splice10 = splice6.splice(10,1);
    // var splice16 = splice10.splice(16,2);
    // var splice20 = splice16.splice(20,2);
    // var splice22 = splice20.splice(22,1);
    // var splice25 = splice22.splice(25,2);
    // var splice30 = splice25.splice(30,1);
    // var photosArray = splice30.splice(38,2);
    var photosArray = data.photos.photo;
    console.log(photosArray);
    // 6,9.11,18,19,24,25,28,32,33,39,48,49 = 13n
    var random = Math.floor(Math.random() * photosArray.length)
    // console.log(random);
    var backgroundImageUrl = ""
    for (var i = 0; i < photosArray.length; i++) {
      if (random === i) {
        var result = data.photos.photo[i];
        // console.log(i);
        // console.log(photosArray[0]);
        var farmId = result.farm;
        var serverId = result.server;
        var photoID = result.id;
        var secretId = result.secret;
        backgroundImageUrl = "https://farm" + farmId + ".staticflickr.com/" + serverId + "/" + photoID + "_" + secretId + ".jpg";
        // changeBackground(backgroundImageUrl);
        $('body').css({'background-image': 'url(' + backgroundImageUrl + ')', 'background-size' : 'cover'});
        console.log(backgroundImageUrl);
        // return;
      }
    }
  })
  .catch(function(error) {
    console.log(error);
  })
}
