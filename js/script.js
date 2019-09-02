$(function() {

  let index = 0;
  console.log($(".drop-box"));

  $("#activityText").text(header);
  $('.wrapper').css({'outline':borderColor});
  $('body').css({'background':bgColor});
  // $('#LetterText').text(alphabate);

  $('.drop-box span').hide();


  
  // function for drag and drop
  function dragDrop(){
      $('.dragg').draggable({
            revert: 'invalid',
             cursor: "pointer"   
      });

      $(".drop-box" ).droppable({
            accept:".dragg",
            drop: function (event, ui) {
                let dragItem = event.target;
                // ui.draggable.draggable({ disabled: true });
                var dragId = ui.draggable.attr("data-id");
                $(".drop-box").removeClass(dragId);
                $(this).addClass(dragId);
                console.log(dragItem);
                console.log("Data id is :" + dragId);
            }
      }); 
  }  //end here drag and drop 

dragDrop();

$('#check').click(function(){
  check();
  $(".dragg" ).draggable({ disabled: true });
});


// function for Check the question
function check(){
    let dropBox = $('.drop-box');
    dropBox.each(function(i){
      let getId = $(this).attr('id');
      if($('#'+getId).hasClass(getId)){
        console.log("correct")
        $('#'+getId).append("<img src='img/right.png' />");
       }else{
        $('#'+getId).append("<img src='img/wrong.png' />");
       }
    })
  } // End check question function

// to show the answer
$("#answer").click(function(){
  $('#check').attr( "disabled", "disabled" );
  $(".dragg").css({'opacity':0});
  $('.drop-box span').show();
  $('.drop-box img').hide();
  // $(".dragg").animate({
  //       top: "0px",
  //       left: "0px"
  //   });
}); // end show answer


// To reset all the question
$("#reset").click(function(){
  location.reload();
}); // End reset 


});