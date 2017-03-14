// BOOKMARKS

// function process_bookmark(bookmarks) {
//     for (var i =0; i < bookmarks.length; i++) {
//         var bookmark = bookmarks[i];
//         if (bookmark.url) {
//             console.log("bookmark: "+ bookmark.title + " ~  " + bookmark.url);
//             var newNode = $('"<p class="node">" + bookmark + "</P>"');
//             $('.footer').append(newNode);
//         }
//         if (bookmark.children) {
//             process_bookmark(bookmark.children);
//         }
//     }
// }
//
// #(document).ready( function() {
//     console.log("listing bookmarks: " );
//     process_bookmark(chrome.bookmarks.getTree());
// })

$(document).ready(function() {
   $(".button-collapse").sideNav()
   $("div.icon-block").draggable();
   $("div.row").draggable();
   $("div.col.s12.m4").draggable();
})
