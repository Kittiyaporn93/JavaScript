function moveCapitals(word) {
    var wordArray = word.split('');
    var capitalArray = [];
    var lowerArray = [];
    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === wordArray[i].toUpperCase()) {
        capitalArray.push(wordArray[i]);
      } else {
        lowerArray.push(wordArray[i]);
      }
    }
    return capitalArray.join('') + lowerArray.join('');
  }
  console.log(capToFront("hApPy"));
  console.log(capToFront("moveMENT"));
  console.log(capToFront("shOrtCAKE"));