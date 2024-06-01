function hello(person) {
    console.log('Hello ' + person);
}

// function calculateTotal(subTotal,tax) {
//     return subTotal+tax;
// }

const calculateTotal = function (subTotal,tax) {return subTotal+tax};

hello('Claudia');
hello('Héctor');
hello('Manuel');

const order1 = calculateTotal(20,5);
const order2 = calculateTotal(15,3);
const order3 = calculateTotal(18,2.5);

console.log(order1, order2, order3);
