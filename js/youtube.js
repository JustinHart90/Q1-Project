$(document).ready(function() {
  var channelName = 'TopTrendingTV';

  $.get(
    "https://www.googleapis.com/youtube/v3/channels", {
      part: 'contentDetails',
      forUsername: channelName,
      key: 'AIzaSyBhlUXvCcyHqTly485MZ7G0VLdULlxyWOw'},
      function(data) {
        $.each(data.items, function(i, item) {
          console.log(item);
          var id = item.contentDetails.relatedPlaylists.uploads;
          getVids(id);
        })
      }
  )

  function getVids(id) {
    $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems", {
        part: 'snippet',
        maxResults: 5,
        playlistId: id,
        key: 'AIzaSyBhlUXvCcyHqTly485MZ7G0VLdULlxyWOw'},
        function(data) {
          var title1 = data.items[0].snippet.title;
          var thumb1 = data.items[0].snippet.thumbnails.default.url;
          var thumbImage = data.items[0].snippet.thumbnails.default;

          var title2 = data.items[1].snippet.title;
          var thumb2 = data.items[1].snippet.thumbnails.default.url;

          var title3 = data.items[2].snippet.title;
          var thumb3 = data.items[2].snippet.thumbnails.default.url;

          var title4 = data.items[3].snippet.title;
          var thumb4 = data.items[3].snippet.thumbnails.default.url;

          var title5 = data.items[4].snippet.title;
          var thumb5 = data.items[4].snippet.thumbnails.default.url;

          $('#player1').text(title1);
          $('#player2').text(title2);
          $('#player3').text(title3);
          $('#player4').text(title4);
          $('#player5').text(title5);

          $('#thumbnail1').attr("href", thumb1);
          $('#thumbnail2').attr("href", thumb2);
          $('#thumbnail3').attr("href", thumb3);
          $('#thumbnail4').attr("href", thumb4);
          $('#thumbnail5').attr("href", thumb5);

          $('#video1').attr("src", thumb1);
          $('#video2').attr("src", thumb2);
          $('#video3').attr("src", thumb3);
          $('#video4').attr("src", thumb4);
          $('#video5').attr("src", thumb5);
        }
    )
  }

  // .catch(function(error) {
  //   console.log(error);
  // })
});
