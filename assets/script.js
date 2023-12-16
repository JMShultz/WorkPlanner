
var timeDisplayEl = $('#time-display');
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
});

// handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}




function UpdateHours() {
  var rightNow = dayjs().hour();
  


  $('.time-block').each(function(){
var Hours= parseInt($(this).attr('id').split('-')[1]);


if (Hours<rightNow){

  $(this).addClass('past');
}else if(Hours===rightNow){
  $(this).removeClass('past');
  $(this).addClass('present');
}else{

  $(this).removeClass('past');
  $(this).removeClass('present');
  $(this).addClass('future');
}

  });
}

 
UpdateHours();

displayTime();
setInterval(displayTime, 1000);