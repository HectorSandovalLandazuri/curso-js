const person1 = {
    name: 'Héctor',
    age: 48,
    status: 'resident'
}

const person2 = {
    name: 'Claudia',
    age: 37,
    status: 'tourist'
}

if (person1.age>=18 && person1.status==='resident') {
    console.log('Person1 can vote');
} else {
    console.log("Person1 can't vote");
}

if (person2.age>=18 && person2.status==='resident') {
    console.log('Person2 can vote');
} else {
    console.log("Person2 can't vote");
}