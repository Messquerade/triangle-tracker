



$(document).ready(function() {
  $("#triangle-specs").submit(function(event) {
    event.preventDefault();
    const side1 = parseFloat($("input#side1").val());
    const side2 = parseFloat($("input#side2").val());
    const side3 = parseFloat($("input#side3").val());
  });
});