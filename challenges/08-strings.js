const fullName = ({firstName, lastName}) => {
    const result = `${firstName} ${lastName}` ;
    return result.toUpperCase();
}

console.log(fullName({lastName:'Sandoval', firstName: 'Héctor'}));

