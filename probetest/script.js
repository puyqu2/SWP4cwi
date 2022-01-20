function giveOutput() {
  var größe = document.getElementById("input1").value;
  var gewicht = document.getElementById("input2").value;
  var result = (größe * 1.43) / gewicht - 3.4;
  console.log(result);
  if (result > 0) {
    document.getElementById("output").innerHTML = "Positiv";
  } else if (result < 0) {
    document.getElementById("output").innerHTML = "Negativ";
  } else if (result == 0) {
    document.getElementById("output").innerHTML = "Null";
  }
}
