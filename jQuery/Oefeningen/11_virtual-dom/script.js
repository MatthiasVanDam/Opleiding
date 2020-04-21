var teller = 0;

$(document).ready(function () {
  // dit werkt alleen als je .on() gebruikt, niet .click()
  $("body").on("click", "div", function () {
    $("#result").text(++teller + " keer geklikt");
  });

  //
  $("button").on("click", function () {
    $("body").append("<div>Nieuwe Div</div>");
  });
  //
});
