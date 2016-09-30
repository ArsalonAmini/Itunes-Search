$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: 'https://itunes.apple.com/search',
    dataType: 'JSONP'
  })
  .done(function(data) { console.log(data);})
  .fail(function(data){console.log(data);})
});


// function formatURL(userInput){
//   var index = userInput.indexOf(""); //userInput.split("")
//   var artistFirstName = userInput.substr(0,index);
//   var artistLastName = userInput.substr(index + 1);
//   var api = 'https://itunes.apple.com/search?term='
//   var url = api + artistFirstName + "+" + artistLastName;
//   return url;
// }

//     var artistFirstLastName = $('#search').value;
//
//     // $.getJSON(api + artistFirstLastName);
//     // .done(function(data) { console.log(data); })
//   }

// function searchItunes(){
//   var url = api + artistFirstName + "+" + artistLastName;
//   //var url = api + inputOne.value() + inputTwo.value();
// }

//   var button  = select ('#search');
//   button.mousePressed(itunesSearch);
//   //input = select('#artistiFirstName');
// }


//}

    //var thing = document.getElementById('itunesSearch').value;
    //var whatsosearch = $('#itunesSearch').attr('value');

    //$.getJSON("http://itunes.apple.com/search?term=" + thing);
    //.done(function(data) { console.log(data); })
  //}
