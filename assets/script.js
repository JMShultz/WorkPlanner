
var timeDisplayEl = $('#time-display');

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

 

 function SaveData(){

  $(".saveBtn").on("click", function () {
        
    var descriptions = $(this).siblings(".description").val();
    var id= $(this).parent().attr("id");

    
    localStorage.setItem(id, descriptions);
})

 }
  
    
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
 
UpdateHours();
SaveData();
displayTime();
setInterval(displayTime, 1000);


