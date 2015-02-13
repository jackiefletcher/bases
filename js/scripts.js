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

var hexadecimal = function(hexnumber) {
  var letter = {"1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15, "g": 16}
  var hexnumArray = hexnumber.split("").reverse();
  var decimalArray = [];
  var sum = 0;

  hexnumArray.forEach(function(hexnum, i) {
    if (hexnum !== "0") {
      decimalArray.push((Math.pow(16, i) * letter[hexnum]));
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

    $(".bidecimal").text(result);

    $("#biresult").show();
    event.preventDefault();
  });

  $('form#trinary').submit(function(event) {
    var trinum = $("input#trinarynum").val();
    var result = trinary(trinum);

    $(".tridecimal").text(result);

    $("#triresult").show();
    event.preventDefault();
  });

  $('form#hexadecimal').submit(function(event) {
    var trinum = $("input#hexnum").val();
    var result = trinary(trinum);

    $(".hexdecimal").text(result);

    $("#hexresult").show();
    event.preventDefault();
  });

});
