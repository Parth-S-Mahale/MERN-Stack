// 1.Function

/*

function makeTea(typeOfTea) {
    if (typeOfTea == "green tea") {
        return `Making ${typeOfTea}`;
    }
}

let teaOrder = makeTea("green tea");
console.log(teaOrder);

*/

// 2.Nested Function

/*

function orderTea(teaType){
    function confirmOrder(){
        return "Order confirmed for chai";
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai")
console.log(orderConfirmation);

*/

// 3.Arrow Function

/* 

const calculateTotal = (price, quantity) => {
    return price * quantity;
}

let totalCost = calculateTotal(100, 5)

console.log(totalCost); 

 */

// 4.Higher-Order Functions

/*

function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`
}

function processTeaOrder(teaFunction){
    return teaFunction('earl grey')
}

let order = processTeaOrder(makeTea)

console.log(order);

*/

// 5.

/* 

function createTeaMaker(name) {
    let score = 100;
  return function (teaType) {
    return `Making ${teaType} ${name} ${score}`;
  };
}

let teaMaker = createTeaMaker("Parth");
let result = teaMaker("green tea");
console.log(result);

 */