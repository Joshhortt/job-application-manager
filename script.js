$(document).ready(function() {
  $('#blanks form').submit(function(event) {

    var letter_personInput = $("input#letter_person").val();

    $('.letter_person').text(letter_personInput);

    $('#letter').show();

    event.preventDefault();
  });
});
