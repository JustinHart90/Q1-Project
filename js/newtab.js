$(document).ready(function() {
   $(".button-collapse").sideNav();
   $("div.col.s12.m4").draggable();
   $('.collapsible').draggable();
   $("div.col.s12.m4").resizable();
   $('.collapsible').resizable();
   $('.collapsible').collapsible();
   $("#accordion.ui-accordion").accordion();
   $('#modal').modal();

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
  var list = $('#notes-list');
  list.addEventListener('click', function(ev) {
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
