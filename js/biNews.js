$(document).ready(function() {
  getBInews()
})

function getBInews(){
  var url =  "https://newsapi.org/v1/articles?source=business-insider&sortBy=latest&apiKey=69bfb7dc57de4037b2bb1fec142439a4";

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
      resultsUrl.push(getBIsecureUrl(newsArray[i].url));
      resultsImgUrl.push(getBIsecureUrl(newsArray[i].urlToImage));
    }

    $('#bi-1').text(resultsTitle[0]);
    $('#bi-2').text(resultsTitle[1]);
    $('#bi-3').text(resultsTitle[2]);
    $('#bi-4').text(resultsTitle[3]);
    $('#bi-5').text(resultsTitle[4]);

    $('#newsUrl-1').attr("title", resultsDescr[0]);
    $('#newsUrl-2').attr("title", resultsDescr[1]);
    $('#newsUrl-3').attr("title", resultsDescr[2]);
    $('#newsUrl-4').attr("title", resultsDescr[3]);
    $('#newsUrl-5').attr("title", resultsDescr[4]);

    $('#newsUrl-1').attr("href", resultsUrl[0]);
    $('#newsUrl-2').attr("href", resultsUrl[1]);
    $('#newsUrl-3').attr("href", resultsUrl[2]);
    $('#newsUrl-4').attr("href", resultsUrl[3]);
    $('#newsUrl-5').attr("href", resultsUrl[4]);

    $('#imageUrl-1').attr("src", resultsImgUrl[0]);
    $('#imageUrl-2').attr("src", resultsImgUrl[1]);
    $('#imageUrl-3').attr("src", resultsImgUrl[2]);
    $('#imageUrl-4').attr("src", resultsImgUrl[3]);
    $('#imageUrl-5').attr("src", resultsImgUrl[4]);
  })
  .catch(function(error) {
    console.log(error);
  })
}

function getBIsecureUrl(url) {
  if (url.indexOf("https") == 0) {
    return url;
  } else if (url.indexOf("http") == 0) {
    url = url.replace('http://', 'https://');
    return url;
  } else {
    console.log("url error!");
  }
}
