$('body').on('keyup', 'input', function(event){
  if (event.keyCode === 13) {

    // after user presses enter, takes the value of the input
    // and appends it to the todo list <ul> as a new <li>
    var todo_item = $('input').val();
    $('.todo_list_holder').append('<li><span class="compleated"> √ </span>' + todo_item + '<span class="delete_item"> X </span></li>');

    // clears input field after user presses enter 
    $('input').val("");

  }
});