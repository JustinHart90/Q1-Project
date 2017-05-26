$(document).ready(function() {
  getBloom()
})

function getBloom(){
  var url =  "https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=69bfb7dc57de4037b2bb1fec142439a4";

  $.get(url)
  .then( function(data) {
    var bloomArray = data.articles;

    var title_1 = bloomArray[0].title;
    var description_1 = bloomArray[0].description;
    var newsUrl_1 = bloomArray[0].url;
    var imageUrl_1 = bloomArray[0].urlToImage;

    var title_2 = bloomArray[1].title;
    var description_2 = bloomArray[1].description;
    var newsUrl_2 = bloomArray[1].url;
    var imageUrl_2 = bloomArray[1].urlToImage;

    var title_3 = bloomArray[2].title;
    var description_3 = bloomArray[2].description;
    var newsUrl_3 = bloomArray[2].url;
    var imageUrl_3 = bloomArray[2].urlToImage;

    var title_4 = bloomArray[3].title;
    var description_4 = bloomArray[3].description;
    var newsUrl_4 = bloomArray[3].url;
    var imageUrl_4 = bloomArray[3].urlToImage;

    var title_5 = bloomArray[4].title;
    var description_5 = bloomArray[4].description;
    var newsUrl_5 = bloomArray[4].url;
    var imageUrl_5 = bloomArray[4].urlToImage;

    $('#bloom-1').text(title_1);
    $('#bloom-2').text(title_2);
    $('#bloom-3').text(title_3);
    $('#bloom-4').text(title_4);
    $('#bloom-5').text(title_5);

    $('#bloomUrl-1').attr("title", description_1);
    $('#bloomUrl-2').attr("title", description_2);
    $('#bloomUrl-3').attr("title", description_3);
    $('#bloomUrl-4').attr("title", description_4);
    $('#bloomUrl-5').attr("title", description_5);

    $('#bloomUrl-1').attr("href", newsUrl_1);
    $('#bloomUrl-2').attr("href", newsUrl_2);
    $('#bloomUrl-3').attr("href", newsUrl_3);
    $('#bloomUrl-4').attr("href", newsUrl_4);
    $('#bloomUrl-5').attr("href", newsUrl_5);

    $('#bloomImageUrl-1').attr("src", imageUrl_1);
    $('#bloomImageUrl-2').attr("src", imageUrl_2);
    $('#bloomImageUrl-3').attr("src", imageUrl_3);
    $('#bloomImageUrl-4').attr("src", imageUrl_4);
    $('#bloomImageUrl-5').attr("src", imageUrl_5);
  })
  .catch(function(error) {
    console.log(error);
  })
}
