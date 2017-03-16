$(document).ready(function() {
   $(".button-collapse").sideNav()
   $("div.col.s12.m4").draggable();
   $('.collapsible').draggable();
   $('.collapsible').collapsible();
   $("#accordion.ui-accordion").accordion();

   $("#reset").click(function () {
    location.reload();
  });

  $("#reddit-widget").mouseup(function(){
    console.log("The div moved.");
    var xValue = $("#reddit-widget").position().left;
    var yValue = $("#reddit-widget").position().top;
    console.log("xReddit", xValue, "yReddit", yValue);
    localStorage.setItem("xReddit", xValue);
    localStorage.setItem("yReddit", yValue);
  });

  $("#youtube-widget").mouseup(function(){
    console.log("The div moved.");
    var xValue = $("#youtube-widget").position().left;
    var yValue = $("#youtube-widget").position().top;
    console.log("xYoutube", xValue, "yYoutube", yValue);
    localStorage.setItem("xYoutube", xValue);
    localStorage.setItem("yYoutube", yValue);
  });

  $("#bi-widget").mouseup(function(){
    console.log("The div moved.");
    var xValue = $("#bi-widget").position().left;
    var yValue = $("#bi-widget").position().top;
    console.log("xBi", xValue, "yBi", yValue);
    localStorage.setItem("xBi", xValue);
    localStorage.setItem("yBi", yValue);
  });
});
