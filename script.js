$(document).ready(function() {
  $('#blanks form').submit(function(event) {

    var letter_personInput = $("input#letter_person").val();
    $('.letter_person').text(letter_personInput);
    $('#letter').show();
    event.preventDefault();
  });

    $('#blanks form').submit(function(event) {
    var confirmAskInput = $("input#confirmAsk").val();
    $('.confirmAsk').text(confirmAskInput);
    $('#uppercase').show();
    event.preventDefault();
  });
  

  var leapYear = function(year) {
  if (year % 400 === 0) {
    return true;
  }
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};

  $("form#leap_year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);
    if (result) {
      $(".not").hide();
    } else {
      $(".not").show();
    }

    $("#result").show();
    event.preventDefault();
  });

});
