function sumTwoSmallestNumbers(numbers) {
    var sorted = numbers.sort(function(a, b) {
      return a - b;
    });
    return sorted[0] + sorted[1];
  }0