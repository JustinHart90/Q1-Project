$(document).ready(function() {
  getESPNnews()
})

function getESPNnews(){
  var url =  "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=69bfb7dc57de4037b2bb1fec142439a4";

  $.get(url)
  .then( function(data) {
    var newsArray = data.articles;
    var resultsCounter = 0;
    var resultsTitle = [];
    var resultsDescr = [];
    var resultsUrl = [];
    var resultsImgUrl = [];

    while (resultsCounter < 6) {
      for (var i = 0; i < newsArray.length; i++) {
        // var urlSecure = newsArray[i].url;
        // var urlToImageSecure = newsArray[i].urlToImage;
        // console.log(newsArray[i].url)
        // console.log(newsArray[i].urlToImage);
        resultsTitle.push(newsArray[i].title);
        resultsDescr.push(newsArray[i].description);
        resultsUrl.push(newsArray[i].url);
        resultsImgUrl.push(newsArray[i].urlToImage);
        resultsCounter++;
      }
    }

    $('#espn-1').text(resultsTitle[0]);
    $('#espn-2').text(resultsTitle[1]);
    $('#espn-3').text(resultsTitle[2]);
    $('#espn-4').text(resultsTitle[3]);
    $('#espn-5').text(resultsTitle[4]);

    $('#espnUrl-1').attr("title", resultsDescr[0]);
    $('#espnUrl-2').attr("title", resultsDescr[1]);
    $('#espnUrl-3').attr("title", resultsDescr[2]);
    $('#espnUrl-4').attr("title", resultsDescr[3]);
    $('#espnUrl-5').attr("title", resultsDescr[4]);

    $('#espnUrl-1').attr("href", resultsUrl[0]);
    $('#espnUrl-2').attr("href", resultsUrl[1]);
    $('#espnUrl-3').attr("href", resultsUrl[2]);
    $('#espnUrl-4').attr("href", resultsUrl[3]);
    $('#espnUrl-5').attr("href", resultsUrl[4]);

    $('#espnImgUrl-1').attr("src", resultsImgUrl[0]);
    $('#espnImgUrl-2').attr("src", resultsImgUrl[1]);
    $('#espnImgUrl-3').attr("src", resultsImgUrl[2]);
    $('#espnImgUrl-4').attr("src", resultsImgUrl[3]);
    $('#espnImgUrl-5').attr("src", resultsImgUrl[4]);
  })
  .catch(function(error) {
    console.log(error);
  })
}

function getESPNsecureUrl(url) {
  if (url.indexOf("https://s.") !== -1) {
    return "not secure";
  } else if (url.indexOf("https") !== -1) {
    return "secure";
  } else {
    return "not secure";
  }
}
