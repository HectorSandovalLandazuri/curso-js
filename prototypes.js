function Account (name, initialBalance) {
    this.name=name;
    this.balance =initialBalance;
}

Account.prototype.bank ='Chase';
Account.prototype.deposit = function(amount){
    this.balance+=amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

const john = new Account('john',200);
const hector = new Account("hector", 1000);

console.log(john.bank);
john.deposit(300);
john.deposit(100);
console.log(hector);