$(document).ready(function() {
  getURL();
  $('#changeBackground').click( function () {
    getURL();
  })
});

function getURL(){
  var url = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=ed68aa7449b30d02e2a19e6710ef05d1&gallery_id=72157677476597845&format=json&nojsoncallback=1";

  $.get(url)
  .then( function(data) {
    var sixPhotos = [];
    var photosArray = data.photos.photo;
    sixPhotos.push(photosArray[0]);
    sixPhotos.push(photosArray[10]);
    sixPhotos.push(photosArray[31]);
    sixPhotos.push(photosArray[35]);
    sixPhotos.push(photosArray[36]);
    sixPhotos.push(photosArray[43]);

    var random = Math.floor(Math.random() * sixPhotos.length)
    var backgroundImageUrl = ""
    for (var i = 0; i < sixPhotos.length; i++) {
      if (random === i) {
        var farmId = sixPhotos[i].farm;
        var serverId = sixPhotos[i].server;
        var photoID = sixPhotos[i].id;
        var secretId = sixPhotos[i].secret;

        backgroundImageUrl = "https://farm" + farmId + ".staticflickr.com/" + serverId + "/" + photoID + "_" + secretId + ".jpg";

        $('body').css({'background-image': 'url(' + backgroundImageUrl + ')', 'background-size' : 'cover'});
      }
    }
  })
  .catch(function(error) {
    console.log(error);
  })
}
