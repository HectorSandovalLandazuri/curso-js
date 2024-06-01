//map
const people = [
  { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
  { name: "peter", age: 25, position: "designer", id: 2, salary: 300 },
  { name: "susy", age: 30, position: "the boss", id: 3, salary: 500 },
  { name: "Héctor", age: 30, position: "the very boss", id: 4, salary: 1000 },
];

const ages = people.map((person) =>{
    return person.age;
});

const newPeople = people.map((person) =>{
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age+20
    };
}); 

const names = people.map((person) =>{
    return `<h1>${person.name}</h1>`;
})

document.body.innerHTML =names.join('');

console.log(ages);
console.log(newPeople);

//Filter
const youngPeople = people.filter((person) => {
    return person.age <= 25    
})

console.log(youngPeople);

const developers = people.filter((person) => {
  return person.position === 'developer';
});
console.log(developers);

//Find returns single instance
const person=people.find(function(person) {
    return person.id ===2;
} )

console.log(`result find:`);
console.log(person);

const firstNames = ["Héctor", "Claudia", "Ricky"];
console.log(firstNames.find(function(name){
    return name ==='Héctor';
}));

const person2 = people.filter(function (person) {
  return person.id === 3;
});
console.log('Person 2:');
console.log(person2);

//reduce
const total = people.reduce((acc,curItem) => {
    acc += curItem.salary;
    
    console.log(`total ${acc}`);
    console.log(`current money ${curItem.salary}`);
    return acc
},0);

//challenges
console.log(students);
const updatedStudents = students.map((student) => {
  student.role='student';
  return student;
});

console.log(updatedStudents);

const highScores = students.filter((student) => {
// if (student.score >=80) {
// return student;
// }
  
//if (student.score >=80) return student

  return student.score >= 80;
});
console.log(highScores);


const student2 = students.find((student) => {
  return student.id === 2;
});
console.log(student2);


const totalScore = students.reduce((acc, curItem) => {
  acc += curItem.score;

  return acc;
}, 0);

averageScore = totalScore/students.length;
console.log(`Average Score: ${averageScore}`);

const survey =students.reduce((survey,student)=>{
  const favSubject=student.favoriteSubject;
  survey[favSubject] = survey[favSubject]  ? survey[favSubject] + 1 : 1 
  return survey
},{})
console.log(survey);