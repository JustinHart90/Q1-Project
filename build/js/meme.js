$(document).ready( function() {
  $('button').click( function() {

    var getTop = $('#top-text').val();
    $(".top-caption").text(getTop);

    var getBottom = $('#bottom-text').val();
    $(".bottom-caption").text(getBottom);

    var getURL = $('#image-url').val();
    $(".existing-image").attr("src",getURL);
  })
});
