function getBudgets(array) {
    var sum =0 
    for (let i=0; i <array.length; i++) 
        sum +=array[i].budget 
    return sum 
}

  let arrayOneTest =[
    { name: "Mahmoud", age: 39, budget: 23000 },
    { name: "Panyet",  age: 32, budget: 40000 },
    { name: "Panyoot",  age: 22, budget: 1600 }
  ];

let arrayTwoTest=[...arrayOneTest];

console.log(arrayTwoTest);


console.log("The Total Budget is :"+getBudgets(arrayTwoTest)+"CAD");