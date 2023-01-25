const numberSplit = (num) => {
    if (num === undefined) {
      return "Input Parameter can't be empty"
    } else {
    let a = Math.floor(num / 2);
    let b = num - a;
    let c = [];
    c.push(a, b);
    return c;
    }
  };

console.log(numberSplit(4)) ; //2,2
console.log(numberSplit(10)) ; //5,5
console.log(numberSplit(11)) ; //5,6
console.log(numberSplit(-9)) ; //-5,-6