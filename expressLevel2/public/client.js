/*global $*/
$(function() {
  $.get('/cities', appendToList); 

  function appendToList(cities) {
    var list = ["New York", "Boston", "San Francisco", "Seattle"];
    for(var i in cities){
      list.push($('<li>', { text: cities[i] }));
    }
    $('.city-list').append(list);
  }
});