$(document).ready(function() {
  getRedditNews()
});

function getRedditNews(){
  var url = "https://www.reddit.com/r/OutOfTheLoop/.json";

  $.get(url)
  .then( function(data) {
    newsArray = data.data.children;
    resultsCounter = 0;
    resultsTitle = [];
    resultsUrl = [];
    resultsDescr = [];
    duplicateIndicator = false;

    while (resultsCounter < 6) {
      for (var i = 0; i < newsArray.length; i++) {
        if (newsArray[i].data.link_flair_text === "Answered" && !newsArray[i].data.title.includes("r/") && !newsArray[i].data.title.includes("Why are people randomly spoiling the ending of Logan in the comments?")) {
          resultsTitle.push(newsArray[i].data.title);
          resultsUrl.push(newsArray[i].data.url);
          resultsDescr.push(newsArray[i].data.selftext);
          resultsCounter++;
        }
      }
    }

    $('#title1').text(resultsTitle[0]);
    $('#title2').text(resultsTitle[1]);
    $('#title3').text(resultsTitle[2]);
    $('#title4').text(resultsTitle[3]);
    $('#title5').text(resultsTitle[4]);

    $('#link1').attr("href", resultsUrl[0]);
    $('#link2').attr("href", resultsUrl[1]);
    $('#link3').attr("href", resultsUrl[2]);
    $('#link4').attr("href", resultsUrl[3]);
    $('#link5').attr("href", resultsUrl[4]);

    $('#link1').attr("title", resultsDescr[0]);
    $('#link2').attr("title", resultsDescr[1]);
    $('#link3').attr("title", resultsDescr[2]);
    $('#link4').attr("title", resultsDescr[3]);
    $('#link5').attr("title", resultsDescr[4]);
  })
  .catch(function(error) {
    console.log(error);
  })
}
