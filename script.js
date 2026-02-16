var text = prompt("Enter text").trim().toLowerCase();
var result = "";

for (var i = 0; i < text.length; i++) {
  var alphabet = text[i];
  var counter = 0;
  var before = 0; 

  if (alphabet >= "a" && alphabet <= "z") {

    for (var c = 0; c < i; c++) {
      if (text[c] === alphabet) {
        before = 1;
      }
    }

    if (before === 0) {

      for (var a = 0; a < text.length; a++) {
        if (text[a] === alphabet) {
          counter++;
        }
      }

      result += alphabet + " - " + counter + "ta\n";
    }
  }
}

alert(result);
