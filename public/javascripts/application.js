// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
//

Capture = {}

Capture.button_clicked = function(){
  $('#card_capture button').hide()
  $('#card_capture span').show()
  Capture.get_capture_at(new Date())
}

Capture.get_capture_at = function(time){
  $.ajax({
    url: '/cards/captured',
    data: {'capture_time' : time.toString()},
    type: "POST",
    success: function(data, testStatus, xhr){
      $('#card_capture button').text('Card captured!')
      $('#card_capture button').show()
      $('#card_capture span').hide()
      $('#card_id,#hidden_card_id').val(data)
    },
    error: function(xhr, test, thrown){
      if(xhr.status == 500){
        $('#card_capture span').text("Server Error")  
      }else{
        setTimeout("Capture.get_capture_at('" + time.toString() + "')", 500)
      }
    }
  })
}

$(function(){
  $('#card_capture button').click(Capture.button_clicked)
  $('#edit_id').click(function(){ $('#card_id').attr('disabled',false)})
})
