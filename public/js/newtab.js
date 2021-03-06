$(document).ready(function() {
  $(".button-collapse").sideNav();
  $("div.col.s12.m4").draggable();
  $('.collapsible').draggable();
  $('#clock').draggable();
  $('#notes-widget').draggable();
  $("ul#notes-widget").resizable();
  $('.collapsible').collapsible();
  $("#accordion.ui-accordion").accordion();

  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();

  document.getElementById("notes-input-area").innerHTML = localStorage.getItem("notes");

  if (localStorage.getItem("xReddit")) {
    $('#reddit-widget').css({'position': 'url(../images/forrest.jpg)', 'background-size' : 'cover'})
    $("#reddit-widget").position().left = localStorage.getItem("xReddit");
    $("#reddit-widget").position().top = localStorage.getItem("yReddit");
  }



   $("#reset").click(function () {
    location.reload();
    });

  $('#save-notes').click(function() {
    var notesValue = $("#notes-input-area").val()
    localStorage.setItem("notes", notesValue)
  })

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

  $("#espn-widget").mouseup(function(){
    console.log("The div moved.");
    var xValue = $("#espn-widget").position().left;
    var yValue = $("#espn-widget").position().top;
    console.log("xEspn", xValue, "yEspn", yValue);
    localStorage.setItem("xEspn", xValue);
    localStorage.setItem("yEspn", yValue);
  });

  $("#bloom-widget").mouseup(function(){
    console.log("The div moved.");
    var xValue = $("#bloom-widget").position().left;
    var yValue = $("#bloom-widget").position().top;
    console.log("xBloom", xValue, "yBloom", yValue);
    localStorage.setItem("xBloom", xValue);
    localStorage.setItem("yBloom", yValue);
  });

  $("#buzz-widget").mouseup(function(){
    console.log("The div moved.");
    var xValue = $("#buzz-widget").position().left;
    var yValue = $("#buzz-widget").position().top;
    console.log("xBuzz", xValue, "yBuzz", yValue);
    localStorage.setItem("xBuzz", xValue);
    localStorage.setItem("yBuzz", yValue);
  });

  // Create a "close" button and append it to each list item
  var myNodelist = $("#notes-list li");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  // Add a "checked" symbol when clicking on a list item
  $('#notes-list').click( function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  // Create a new list item when clicking on the "Add" button
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("notesInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("notes-list").appendChild(li);
    }
    document.getElementById("notesInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  }
});
