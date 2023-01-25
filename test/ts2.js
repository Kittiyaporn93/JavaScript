function highestDigit(num) {
    var highest = 0;
    var numString = num.toString();
    for (var i = 0; i < numString.length; i++) {
      if (numString[i] > highest) {
        highest = numString[i];
      } 
    }
    return highest;
  }

  console.log(highestDigit(379));
  console.log(highestDigit(2));
  console.log(highestDigit(377401));
 