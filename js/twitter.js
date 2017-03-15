$(document).ready(function() {
  getURL()
});

function getURL(){
  var url = "https://api.twitter.com/1.1/trends/place.json?id=12792950&apikey=sazrxeDXmEX7WxX6FEnj7lmjK";

  $.get(url)
  .then( function(data) {
    var tweetArray = data.photos.photo;
    var tweetTitle = data.photos.photo;
    var result;
    for (var i = 0; i < photosArray.length; i++) {
      if () {
        var result = data.photos.photo[i];
        backgroundImageUrl = "https://farm" + farmId + ".staticflickr.com/" + serverId + "/" + photoID + "_" + secretId + ".jpg";
        $('.html').css({'background-image': 'url(' + backgroundImageUrl + ')', 'background-size' : 'cover'});
      }
    }
  })
  .catch(function(error) { 
    console.log(error);
  })
}
