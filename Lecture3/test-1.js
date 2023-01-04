let values1 = ['Apple',1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];
var common = [];
for (let i = 0; i < values1.length; i++) {
  if (values2.indexOf(values1[i]) > -1 && values3.indexOf(values1[i]) > -1) {
    common.push(values1[i]);
  }
}
console.log(common);