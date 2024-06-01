class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = 'Chase';
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account('john',200);
console.log(john);
console.log(john.name);
john.deposit(200);

const hector = {
    name:'hector',
    age:48,
    greet: function() {
        console.log(this);
        console.log(`Hello ${this.name}, your age is ${this.age}`);
    }
}

function greet(city,country) {
    console.log(this);
    console.log(`Hello ${this.name}, your age is ${this.age} and live in ${city} ${country}`);
}

const claudia = {
  name: "claudia",
  age: 42,
};

hector.greet();
greet.call(claudia);
greet.call ({name:'peter',age:'50'})
hector.greet.call(claudia);

greet.call({ name: "peter", age: "50" }, "san diego", "us");
greet.apply({ name: "peter", age: "50"},['san diego','us']);

const susanGreet = greet.bind(claudia,'toronto','ca');
susanGreet();
