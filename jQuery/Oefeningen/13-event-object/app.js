$(document).on("mousemove", function (e) {
  let x = e.pageX;
  let y = e.pageY;
  $("#result").text(`Positie X: ${x} en Positie Y: ${y}`);
});
