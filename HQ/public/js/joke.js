$(document).ready(function() {
    $('.cleanButton').click(function() {
      getCleanJoke()
    })
    // $('.programButton').click(function() {
    //   console.log('clicked')
    //
    //   getProgrammerJoke()
    // })
    function getCleanJoke() {
        var joke = $('.cleanButton')
        var url1 = 'https://galvanize-cors.herokuapp.com/https://www.reddit.com/r/cleanjokes/.json'
        url1 = url1 +
        $.get(url1)
            .then(function(data) {
              updateClean(data)
            })
      }
    // function getProgrammerJoke() {
    //     var joke = $('.programButton')
    //     var url2 = 'https://galvanize-cors.herokuapp.com/https://www.reddit.com/r/programmerhumor/.json'
    //
    //     url2 = url2 +
    //     $.get(url2)
    //         .then(function(data) {
    //
    //           console.log(data);
    //
    //             updateProgrammer(data)
    //         })
    //   }
    function updateClean(data, permalink) {
      var array = data.data.children
      var random = Math.floor(Math.random() * array.length)
      for (var i = 0; i < array.length; i++) {
        if (random === i) {
          array = data.data.children[i]
        }
      }
        $('h2').text(data.data.children[i].data.title)
        $('h3').text(data.data.children[i].data.selftext)
        // var punchline = document.createElement("h3")
        // punchline.innerHTML = (data.data.children[i].data.selftext)
        // $("body").append(punchline)
    }
    // function updateProgrammer(data, permalink) {
    //   var array = data.data.children
    //   var random = Math.floor(Math.random() * array.length)
    //   console.log(random);
    //
    //   for (var i = 0; i < array.length; i++) {
    //     if (random === i) {
    //       array = data.data.children[i]
    //       console.log(i);
    //     }
    //   }
    //     $('h2').text(data.data.children[i].data.title)
    //     $('body').replaceWith('<img src="' + data.data.children[i].data.thumbnail +'">')
    //
    // }
    // function updatePage(data, picture) {
    //     $('h1').text(data.name)
    //     $('body').append(data.types[0].type.name + " type")
    //     console.log(data.types[0].type.name)
    //     $('body').append('<img src="'+ data.sprites.front_default +'">')
    // }
})
