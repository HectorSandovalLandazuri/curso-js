//Array.from

const udemy ='udemy';
console.log(Array.from(udemy));

function countTotal (){
    let total = Array.from(arguments).reduce((total,curNumber)=>total+=curNumber,0);
    console.log(total); 
}
countTotal(67,89,54)

const p = document.querySelectorAll('p');
const result =document.getElementById('result');
const second = document.getElementById('second');

let newText =Array.from(p);
newText =newText.map(item => `<span>${item.textContent}</span>`).join(' ');

result.innerHTML =newText;

const text = Array.from(document.querySelectorAll("p"),item=>`<span>${item.textContent}</span>`).join(' ');
second.innerHTML =text;

const people = [
  { id: 1, name: "john" },
  { id: 2, name: "héctor" },
  { id: 3, name: "anna" },
];

const grades = ['A','B','A','B','C'];
const goodGrades = ["A", "B", "A", "B"];

// const anna = people.filter(person => person.name ==='anna');
// console.log(anna);
// console.log(anna[0].name);
// console.log(anna[0].id);

// const anna = people.find(person => person.name ==='anna');
// console.log(anna);
// console.log(anna.name);
// console.log(anna.id);

const person = people.findIndex(item => item.id === 3);
console.log(person);
const newPeople = people.slice(0,person);
console.log(newPeople);

const allGoodGrades = grades.every(grade => grade !=='C');
console.log(allGoodGrades);

const allGoodGrades1 = goodGrades.every((grade) => grade !== "C");
console.log(allGoodGrades1);

oneBadGrade = grades.some (grade => grade ==='C');
console.log(oneBadGrade);

oneBadGrade1 = goodGrades.some((grade) => grade === "C");
console.log(oneBadGrade1);

const ppl = {
    name: 'héctor', 
    age: 48,
    status: 'teacher'
};

for (const propertyName in ppl){
    console.log(`${propertyName}: ${ppl[propertyName]}`);
}

const keys = Object.keys(ppl);
console.log(keys);

const values = Object.values(ppl);
console.log(values);

const result1 = Object.entries(ppl);
console.log(result1);

//map method

const newResult = result1.map ((item)=>{
    const [first,second] = item;
    console.log(first,second);
    return first;
})

console.log(newResult);

//for of
for (const [first, second] of result1){
    //const [first, second] = item;
    console.log(first, second);
}

const unique = new Set();
unique.add('first');
unique.add("second");
unique.add("third");
unique.add(4);

const result2 = unique.delete('third');
console.log(result2);

const isValue = unique.has(4);
console.log(isValue);

console.log(unique);

const products = [
  {
    title: "high-back-bench",
    company: "ikea",
  },
  {
    title: "albany table",
    company: "marcos",
  },
  {
    title: "accent chair",
    company: "caressa",
  },
  {
    title: "wooden table",
    company: "ikea",
  },
];

// const companies = products.map((item)=>item.company);
// console.log(companies);

// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);

// const finalCompanies = ['all',...uniqueCompanies];
// console.log(finalCompanies);

const companies = ['all',...new Set (products.map((item)=>item.company))];
console.log(companies);

const f = 'john';
console.log(f.includes('jo'));

const prod = {
    title:'Leather Chair'
}

console.log(prod.title.includes('Cha'));

const text1 = 'ta';
const filteredProducts = products.filter((product)=>product.title.toLowerCase().includes(text1));
console.log(filteredProducts);

const groceries = ['milk','bread','meat'];
let randomItem ='lemon';
let isIncluded = groceries.includes(randomItem);
console.log(isIncluded);
randomItem='milk';
isIncluded = groceries.includes(randomItem);
console.log(isIncluded);


