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
    var fivePhotos = [];
    var photosArray = data.photos.photo;
    fivePhotos.push(photosArray[0]);
    fivePhotos.push(photosArray[10]);
    fivePhotos.push(photosArray[35]);
    fivePhotos.push(photosArray[36]);
    fivePhotos.push(photosArray[43]);

    var random = Math.floor(Math.random() * fivePhotos.length)
    var backgroundImageUrl = ""
    for (var i = 0; i < fivePhotos.length; i++) {
      if (random === i) {
        var farmId = fivePhotos[i].farm;
        var serverId = fivePhotos[i].server;
        var photoID = fivePhotos[i].id;
        var secretId = fivePhotos[i].secret;
        backgroundImageUrl = "https://farm" + farmId + ".staticflickr.com/" + serverId + "/" + photoID + "_" + secretId + ".jpg";

        $('body').css({'background-image': 'url(' + backgroundImageUrl + ')', 'background-size' : 'cover'});
      }
    }
  })
  .catch(function(error) {
    console.log(error);
  })
}
