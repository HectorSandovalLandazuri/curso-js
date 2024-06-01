const person = {
    name:'héctor',
    age: 25,
    married: true,
    siblings: ['ricardo','manuel'],
    greet: function(name) {
        console.log(`Hello, my name is ${name}`);
    },
    sayHello(name){
        console.log(`Hello, my name is ${name}`);
    },
    job: {
        title: 'developer',
        company: {
            name: 'coding addict',
            address: '123 main street'
        }
    }
}

console.log(person);

const hector = {
    firstName:'héctor',
    lastName: 'sandoval',
    fullName: function() {
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }
}

hector.fullName();
//factory function
function createPerson(firstName,lastName) {
    return {
      firstName,
      lastName,
      fullName: function () {
        console.log(`My full name is ${this.firstName} ${this.lastName} and i love js`);
      },
    };
}

const manuel = createPerson('manuel','sandoval');
manuel.fullName();

//constructor function
function Person(firstName,lastName) {
    this.firstName=firstName
    this.lastName=lastName
    this.fullName = function () {
        console.log(`My full name is ${this.firstName} ${this.lastName} and i love C#`);
      }
}

const ricky = new Person('ricky','sandoval');
ricky.fullName();

const claudia = new Person('claudia','sandoval')
console.log(claudia.constructor);