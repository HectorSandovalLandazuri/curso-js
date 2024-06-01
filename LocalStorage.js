localStorage.setItem('name','Héctor');
sessionStorage.setItem("name", "Héctor");
localStorage.setItem("address", "Altavista");

const myName = localStorage.getItem('name');
console.log(myName);

localStorage.removeItem('address');
//localStorage.clear();

const friends = ['Tito','manuel','Claudia'];
localStorage.setItem('friends',JSON.stringify(friends));
const values =JSON.parse(localStorage.getItem('friends'));
console.log(values[0]);

let fruits;

if (localStorage.getItem('fruits')){
    fruits = JSON.parse(localStorage.getItem("fruits"));
}else {
    fruits=[];
}

console.log(fruits);
//fruits.push('apple');
fruits.push('orange');
localStorage.setItem("fruits", JSON.stringify(fruits));

localStorage.clear();

function sayHello() {
    console.log('Hello Héctor');
}


sayHello();
setTimeout(sayHello,3000)

//alternative approach, ES6

setTimeout(function() {
    console.log('Hello Manuel');    
},4000);

//Pass arguments

function showScore(name,score) {
    console.log(`Hello ${name}, your score is ${score}`);    
}

const firstID=setTimeout(showScore,1000,'Héctor','100');
const secondID = setTimeout(showScore, 1000, "Manuel", "90");

console.log(firstID);
console.log(secondID);
clearTimeout(firstID);

const thirdID=setInterval(showScore, 2000, "Claudia", "90");

setTimeout(()=>{
    clearInterval(thirdID)
},10000)
