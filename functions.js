const num1=30;
const num2 = 50;

function add(){
    console.log(`the result is ${num1+num2}`);
}
add();

//iife
(function(){
    const num3 = 30;
    const num4 = 50;
    console.log(`the result is ${num3 + num4}`);
})();

(function (num3,num4) {
  console.log(`the result is ${num3 + num4}`);
})(200,500);

const result=(function (num3, num4) {
  console.log(`the result is ${num3 + num4}`);
  return num3+num4
})(200, 500);

console.log(result);

//hoisting permite ejecutar funciones antes de sus declaraciones

//closure

function outer() {
    let privateVar = 'secret';
    function inner() {
        console.log(`hello there secrete is: ${privateVar}`);
    }
    return inner;
   // inner();
}

outer()();
const value=outer();
value();

function newAccount(name,initialBalance){
    let balance =initialBalance;

    function showBalance() {
        console.log(`Hey ${name}, your balance is ${balance}`);
    }
    function deposit(amount){
        balance+=amount;
        showBalance();
    }

    function withdraw(amount){
        if (amount>balance){
            console.log(`Hey ${name}, not enough funds`);
            return
        }
        balance-=amount;
        showBalance();
    }
    return {showBalance,deposit,withdraw};
}


const hector = newAccount('hector',200);
const manuel = newAccount("manuel", 1000);

hector.showBalance();
manuel.showBalance();
hector.deposit(100);
hector.withdraw(50);