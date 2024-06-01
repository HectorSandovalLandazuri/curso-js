const btn = document.querySelector('.btn');

btn.addEventListener('click',function() {
    console.log(this);
    setTimeout(()=>{
        this.style.color = "blue";

    },2000)
})

//Destructuring

const fruits =['orange','lemon','banana'];
const friends = ['héctor','manuel','claudia','ricky']

const orange =fruits[0];
const lemon = fruits[1];
const banana = fruits[2];
console.log(orange,lemon,banana);

const [hector,,claudia,ricky] =friends;
console.log(hector,claudia,ricky);

//swap variables
let first ='bob';
let second = 'john';

// let temp =second;
// second= first;
// first=temp;

[first,second]=[second,first]
console.log(first,second);

//destructiring objects
const bob = {
    first:'bob',
    last: 'sanders',
    city:'chicago',
    siblings: {
        sister:'jane'
    }
}

// const firstName = bob.first;
// const lastName = bob.last;
// const sister=bob.siblings.sister;

// const {first:firstName,last:lastName,city,siblings:{sister}} =bob;
// console.log(firstName,lastName,sister);

function printPerson ({first,last,city}) {
    console.log(first, last, city);
}
printPerson(bob);

// new string methods
const person = 'Peter Smith';
const employee ='23456-emp-peter-smith';
const manager ='23456-man-john-doe';

//startwith
console.log(person.startsWith('Pet'));
console.log(employee.startsWith("emp", 6));

//endswith
console.log(manager.endsWith('doe'));
console.log(manager.endsWith("man",9));

//includes
console.log(employee.includes('smit'));

//repeat
const multiplyPeople = (person,amount) => person.repeat(amount);
console.log(multiplyPeople(person,10));

const longName ='Héctor Manuel Sandoval Landázuri';
let shortName ='';
for(const letter of longName) {
    //console.log(letter);
    if (letter ===' '){
        continue
    }else {
        shortName+=letter;
    }    
}
console.log(shortName);

for(const fruit of fruits) {
    if (fruit ==='lemon') {
        break;
    }
    console.log(fruit);
}

//Spread operator

const udemy='udemy';

const letters = [...udemy];
console.log(letters);

const items = [...fruits,...friends,'enrique']
console.log(items);

//Reference
//const newFriends = friends;

const newFriends = [...friends];
newFriends[0]='tito';

console.log(newFriends);
console.log(friends);

//spread operator objects
const newBob = {...bob};
newBob.first = 'bobby';
console.log(newBob);
console.log(bob);

const headings = document.querySelectorAll('h1');
const result = document.getElementById('result');

const text = [...headings].map(item =>`<span>${item.textContent}</span>`).join(' ');
result.innerHTML=text;

console.log(Math.max(4,5,6,88,53));

numbers = [22,55,44,5,83,4];
console.log(Math.max(...numbers));

const john = ['john','sanders'];
const sayHello = (name, lastName) =>{
    console.log(`Hello ${name} ${lastName}`);
}
sayHello(...john)

//Rest operator
const [f, s, ...rest]=fruits;
console.log(f,s,rest);

const {first:fi, ...res} = bob;
console.log(fi, res);


const testScores = [78, 90, 56, 53,100,65];
const getAverage =(n,...scores)=>{
    console.log(n);
    console.log(scores);
    let total=0;
    for (const score of scores){
        total+= score
    }
    console.log(`${n}'s average score is ${total/scores.length}`);
}

getAverage(bob.first,78,90,56,53);
getAverage('héctor',...testScores);

//array new methods
console.log(fruits);
const p =Array.of('john',2,true);
console.log(p);



