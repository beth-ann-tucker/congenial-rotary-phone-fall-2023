$( document ).ready(function() {
  
  //allow user to interact with doge by clicking on his immage to reveal a wow message
  $('#hidingDoge').click(
    function(
    ){
      $('#expressWow').text("WOW, you spotted Doge, many wows, wow WOW wow WOW wow!");
      $('#hideDoge').text("Now drag Doge to hide him somewhere new!");
      
      //I upgraded my page by allow the user to drag doge to hide him somewhere
      $( "#hidingDoge" ).draggable();
    }
);
});