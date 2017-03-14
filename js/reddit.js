$(document).ready(function() {
  getNews()
});

function getNews(){
  var url = "https://www.reddit.com/r/OutOfTheLoop/.json";

  $.get(url)
  .then( function(data) {
    newsArray = data.data.children;
    resultsCounter = 0;
    resultsTitle = [];
    resultsUrl = [];
    duplicateIndicator = false;

    while (resultsCounter < 6) {
      for (var i = 0; i < newsArray.length; i++) {
        if (newsArray[i].data.link_flair_text === "Answered" && !newsArray[i].data.title.includes("/r/")) {
          resultsTitle.push(newsArray[i].data.title);
          resultsUrl.push(newsArray[i].data.url);
          resultsCounter++
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
  })
    // var title_1 = data.data.children[1].data.title
    // var url_1 = data.data.children[1].data.url
    //
    // var title_2 = data.data.children[2].data.title
    // var url_2 = data.data.children[2].data.url
    //
    // var title_3 = data.data.children[3].data.title
    // var url_3 = data.data.children[3].data.url
    //
    // var title_4 = data.data.children[4].data.title
    // var url_4 = data.data.children[4].data.url
    //
    // var title_5 = data.data.children[5].data.title
    // var url_5 = data.data.children[5].data.url
  .catch(function(error) {
    console.log(error);
  })
}
