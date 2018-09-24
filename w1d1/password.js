var password = process.argv[2];
var obfuscate = function(password) {
  var result = "";
  for (var i = 0; i < password.length; i++) {
    var letter = password.charAt(i);
    if (letter === "a") {
      result += "4";
    } else if (letter === "e") {
      result += "3";
    } else if (letter === "o") {
      result += "0";
    } else if (letter === "l") {
      result += "1";
    } else {
      result += letter;
    }
  }
  return result;
}

console.log(obfuscate(password));