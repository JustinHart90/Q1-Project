$(document).ready(function() {
  getWeather()
})

function getWeather(){
  var url =  "https://api.wunderground.com/api/6c87db58faa431f3/conditions/q/CO/Denver.json";

  $.get(url)
  .then( function(data) {
    var resultsIconUrl = getSecureWeatherUrl(data.current_observation.icon_url);
    var resultsTempString = data.current_observation.temperature_string;
    console.log(resultsTempString);
    $("#temperature").text(resultsTempString)
    $("#weather-icon").attr("src", resultsIconUrl)
  })
  .catch(function(error) {
    console.log(error);
  })
}

function getSecureWeatherUrl(url) {
  if (url.indexOf("https") == 0) {
    return url;
  } else if (url.indexOf("http") == 0) {
    url = url.replace('http://', 'https://');
    return url;
  } else {
    console.log("url error!");
  }
}
