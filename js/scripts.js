$(document).ready(function () {
  $("#triangle-specs").submit(function (event) {
    event.preventDefault();
    const side1 = parseFloat($("input#side1").val());
    const side2 = parseFloat($("input#side2").val());
    const side3 = parseFloat($("input#side3").val());

    if (!side1 || !side2 || !side3) {
      $("#Equilateral").hide();
      $("#Isosceles").hide();
      $("#Scalene").hide();
      $("#Nope").show();
    } else if (side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2) {
      $("#Equilateral").hide();
      $("#Isosceles").hide();
      $("#Scalene").hide();
      $("#Nope").show();
    } else if (side1 === side2 && side1 === side3) {
      $("#Equilateral").show();
      $("#Isosceles").hide();
      $("#Scalene").hide();
      $("#Nope").hide();
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $("#Equilateral").hide();
      $("#Isosceles").show();
      $("#Scalene").hide();
      $("#Nope").hide();
    } else {
      $("#Equilateral").hide();
      $("#Isosceles").hide();
      $("#Scalene").show();
      $("#Nope").hide();
    }
  });
});