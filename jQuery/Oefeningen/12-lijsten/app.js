// add handlers on document load
$("li").on("click", function () {
  alert("op item geklikt " + $(this).text());
});

$("button").on("click", function () {
  //
  let numItem = $("#mijnlijst li").length + 1;
  $("#mijnlijst").append(`<li>item ${numItem}</li>`);
});

// add handlers to all children of selector
$("ul").on("click", "li", function () {
  $(this).toggleClass("linethrough");
});

// Remove Event-handlers
//$("#mijnlijst").off();
