$(document).ready(function() {
  getBInews()
})

function getBInews(){
  var url =  "https://newsapi.org/v1/articles?source=business-insider&sortBy=latest&apiKey=69bfb7dc57de4037b2bb1fec142439a4";

  $.get(url)
  .then( function(data) {
    var newsArray = data.articles;

    var title_1 = newsArray[0].title;
    var description_1 = newsArray[0].description;
    var newsUrl_1 = newsArray[0].url;
    var imageUrl_1 = newsArray[0].urlToImage;

    var title_2 = newsArray[1].title;
    var description_2 = newsArray[1].description;
    var newsUrl_2 = newsArray[1].url;
    var imageUrl_2 = newsArray[1].urlToImage;

    var title_3 = newsArray[2].title;
    var description_3 = newsArray[2].description;
    var newsUrl_3 = newsArray[2].url;
    var imageUrl_3 = newsArray[2].urlToImage;

    var title_4 = newsArray[3].title;
    var description_4 = newsArray[3].description;
    var newsUrl_4 = newsArray[3].url;
    var imageUrl_4 = newsArray[3].urlToImage;

    var title_5 = newsArray[4].title;
    var description_5 = newsArray[4].description;
    var newsUrl_5 = newsArray[4].url;
    var imageUrl_5 = newsArray[4].urlToImage;

    $('#bi-1').text(title_1);
    $('#bi-2').text(title_2);
    $('#bi-3').text(title_3);
    $('#bi-4').text(title_4);
    $('#bi-5').text(title_5);

    $('#newsUrl-1').attr("title", description_1);
    $('#newsUrl-2').attr("title", description_2);
    $('#newsUrl-3').attr("title", description_3);
    $('#newsUrl-4').attr("title", description_4);
    $('#newsUrl-5').attr("title", description_5);

    $('#newsUrl-1').attr("href", newsUrl_1);
    $('#newsUrl-2').attr("href", newsUrl_2);
    $('#newsUrl-3').attr("href", newsUrl_3);
    $('#newsUrl-4').attr("href", newsUrl_4);
    $('#newsUrl-5').attr("href", newsUrl_5);

    $('#imageUrl-1').attr("src", imageUrl_1);
    $('#imageUrl-2').attr("src", imageUrl_2);
    $('#imageUrl-3').attr("src", imageUrl_3);
    $('#imageUrl-4').attr("src", imageUrl_4);
    $('#imageUrl-5').attr("src", imageUrl_5);
  })
  .catch(function(error) {
    console.log(error);
  })
}
