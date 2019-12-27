$(function() {

  $("#activityText span").text(header);
  $('.wrapper').css({'outline':borderColor});
  $('body').css({'background':bgColor});
  $('.wrapper').css({'background':wrapperBG});
  $('#fillTheBlank').css({'color':dragColor});
  // $('#LetterText').text(alphabate);
  $('.drop-box span').hide();

  // function for drag and drop
  function dragDrop(){
      $('.dragg').draggable({
            revert: 'invalid',
            snapMode: 'inner', 
            cursor: "pointer"  
      });

      $(".drop-box" ).droppable({
            accept:".dragg",
            drop: function (event, ui) {
              let divClass=null;
              let noOfDivclass =null;
              let length =null;
              // console.log($(ui.draggable));
                let dragItem = event.target;
                let $this = $(this);
                //  check if drop  position alredy filled
                  divClass = $this.attr('class');
                  noOfDivclass = divClass.split(' ');
                  length = noOfDivclass.length;
                  console.log('length',length)
                  if(length == 3){
                      console.log('run if  have three class')
                    ui.draggable.draggable('option','revert',true);
                    // return false;
                  }else{
                      //add the class of body parts name
                      console.log('run if dont have three class')
                      var dragId = ui.draggable.attr("data-id");
                      $(".drop-box").removeClass(dragId);
                      $(this).addClass(dragId);
                      // centering on drop
                      ui.draggable.position({
                        my: "center",
                        at: "center",
                        of: $this,
                        using: function(pos) {
                          $(this).animate(pos, "fast", "linear");
                        }
                      });
                      ui.draggable.draggable('option','revert',false);
                 } 
  
            }  //end drop method
      }); 
  }  //end here drag and drop 

dragDrop();

// check on click
$('#check').click(function(){
      var index = 0;
// check fields is blank or not
      let dropBox = $(".drop-box");
      dropBox.each(function(i){
              let divClass = $(this).attr('class');
              let noOfDivclass = divClass.split(' ');
              let length = noOfDivclass.length;
              if(length == 3){
                index++;
              }
      });

  if(index == 10){
    check();
    $('#answer').show();
    $(".dragg" ).draggable({ disabled: true });
     console.log(index)
  }else{
    $('#alert').fadeIn();
      setTimeout(function(){
       $('#alert').fadeOut();
      },1000)
     // console.log("plase fill all the fields")
     // console.log(index)
  }
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
}); // end show answer


// To reset all the question
$("#reset").click(function(){
  location.reload();
}); // End reset 









});