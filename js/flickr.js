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
    var fivePhotos = [];
    var photosArray = data.photos.photo;
    fivePhotos.push(photosArray[0]);
    fivePhotos.push(photosArray[10]);
    fivePhotos.push(photosArray[35]);
    fivePhotos.push(photosArray[36]);
    fivePhotos.push(photosArray[37]);
    console.log(fivePhotos);
    console.log(fivePhotos.length);

    var random = Math.floor(Math.random() * fivePhotos.length)
    var backgroundImageUrl = ""
    for (var i = 0; i < fivePhotos.length; i++) {
      if (random === i) {
        var farmId = fivePhotos[i].farm;
        var serverId = fivePhotos[i].server;
        var photoID = fivePhotos[i].id;
        var secretId = fivePhotos[i].secret;

    // var photosArray = data.photos.photo;
    // var indexToDelete = [1,3,4,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,32, 38,39,40,41,42,45,48,49]
    // let filterIndex = 0;
    // var filteredPhotos = photosArray.filter(f => {
    //   if (indexToDelete.indexOf(filterIndex) === -1) {
    //     filterIndex++
    //     return true
    //   } else {
    //     filterIndex++
    //     return false
    //   }
    // })
    // console.log(photosArray);
    // console.log(filteredPhotos);
    // // 6,9.11,18,19,24,25,28,32,33,39,48,49 = 13n
    // var random = Math.floor(Math.random() * filteredPhotos.length)
    // var backgroundImageUrl = ""
    // for (var i = 0; i < filteredPhotos.length; i++) {
    //   if (random === i) {
    //     // var result = data.photos.photo[i];
    //     // console.log(i);
    //     // console.log(filteredPhotos[0]);
    //     var farmId = filteredPhotos[i].farm;
    //     var serverId = filteredPhotos[i].server;
    //     var photoID = filteredPhotos[i].id;
    //     var secretId = filteredPhotos[i].secret;

        backgroundImageUrl = "https://farm" + farmId + ".staticflickr.com/" + serverId + "/" + photoID + "_" + secretId + ".jpg";

        $('body').css({'background-image': 'url(' + backgroundImageUrl + ')', 'background-size' : 'cover'});
        console.log(backgroundImageUrl);
        console.log(i);
        console.log(random);
      }
    }
  })
  .catch(function(error) {
    console.log(error);
  })
}
