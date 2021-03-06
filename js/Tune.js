//js application written by A.Amini-Hajibashi on 9/30/2016
//devCodeCamp 2016 Week #9 AjAX, API, JSON

$(document).ready(function(){

$( "#userSearch" ).click(getUserInput); //jQuery html element "Userinput" run "getUserInput" function on "click"
});

function getUserInput(){
  var userInput = $('#search').val(); //userinput equals html element search input value
  console.log(userInput);
  formatURL(userInput);
};

function formatURL(userInput){
  var index = userInput.indexOf(' '); //userInput.split("")
  var artistFirstName = userInput.slice(0,index).trim();
  var artistLastName = userInput.slice(index + 1, userInput.length).trim();
  var api = 'https://itunes.apple.com/search?term='
  var url = api + artistFirstName + "+" + artistLastName;
  getItunesData(url);
}

function getItunesData(url){
$.ajax({
  type: 'GET',
  url: url,
  dataType: 'JSONP',
  success : displayItunesData
})
.done(function(data){console.log(data);}) //runs function after data is returned console.log
.fail(function(data){console.log(data);}) //if request fails runs function console.log
};

function displayItunesData(data){
  for (var item in data)
  {
    console.log(Object.results[i].trackName);
  }
}
