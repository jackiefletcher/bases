var binary = function(binumber) {
 var binumArray = binumber.split("").reverse();
 var decimalArray = [];
 var sum = 0;

  binumArray.forEach(function(binum, i) {
    if (binum === "1") {
      decimalArray.push(Math.pow(2, i));
    }
  });

  decimalArray.forEach(function(element) {
    sum += element;
  });

  return sum;
}

var trinary = function(trinumber) {
  var trinumArray = trinumber.split("").reverse();
  var decimalArray = [];
  var sum = 0;

  trinumArray.forEach(function(trinum, i) {
    if (trinum === "1") {
      decimalArray.push(Math.pow(3, i));
    } else if (trinum === "2") {
      decimalArray.push((Math.pow(3, i) * 2));
    }
  });

  decimalArray.forEach(function(element) {
    sum += element;
  });

  return sum;
}

$(document).ready(function() {
  $('form#binary').submit(function(event) {
    var binum = $("input#binarynum").val();
    var result = binary(binum);

    $(".decimal").text(result);

    $("#result").show();
    event.preventDefault();
  });

});
