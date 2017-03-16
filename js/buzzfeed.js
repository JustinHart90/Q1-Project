$(document).ready(function() {
  getBuzzNews()
})

function getBuzzNews(){
  var url =  "https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=69bfb7dc57de4037b2bb1fec142439a4";

  $.get(url)
  .then( function(data) {
    var newsArray = data.articles;
    var resultsTitle = [];
    var resultsDescr = [];
    var resultsUrl = [];
    var resultsImgUrl = [];

    for (var i = 0; i < 5; i++) {
      resultsTitle.push(newsArray[i].title);
      resultsDescr.push(newsArray[i].description);
      resultsUrl.push(getSecureBuzzUrl(newsArray[i].url));
      resultsImgUrl.push(getSecureBuzzUrl(newsArray[i].urlToImage));
    }

    $('#buzz-1').text(resultsTitle[0]);
    $('#buzz-2').text(resultsTitle[1]);
    $('#buzz-3').text(resultsTitle[2]);
    $('#buzz-4').text(resultsTitle[3]);
    $('#buzz-5').text(resultsTitle[4]);

    $('#buzzUrl-1').attr("title", resultsDescr[0]);
    $('#buzzUrl-2').attr("title", resultsDescr[1]);
    $('#buzzUrl-3').attr("title", resultsDescr[2]);
    $('#buzzUrl-4').attr("title", resultsDescr[3]);
    $('#buzzUrl-5').attr("title", resultsDescr[4]);

    $('#buzzUrl-1').attr("href", resultsUrl[0]);
    $('#buzzUrl-2').attr("href", resultsUrl[1]);
    $('#buzzUrl-3').attr("href", resultsUrl[2]);
    $('#buzzUrl-4').attr("href", resultsUrl[3]);
    $('#buzzUrl-5').attr("href", resultsUrl[4]);

    $('#buzzImgUrl-1').attr("src", resultsImgUrl[0]);
    $('#buzzImgUrl-2').attr("src", resultsImgUrl[1]);
    $('#buzzImgUrl-3').attr("src", resultsImgUrl[2]);
    $('#buzzImgUrl-4').attr("src", resultsImgUrl[3]);
    $('#buzzImgUrl-5').attr("src", resultsImgUrl[4]);
  })
  .catch(function(error) {
    console.log(error);
  })
}

function getSecureBuzzUrl(url) {
  if (url.indexOf("https") == 0) {
    return url;
  } else if (url.indexOf("http") == 0) {
    url = url.replace('http://', 'https://');
    return url;
  } else {
    console.log("url error!");
  }
}
