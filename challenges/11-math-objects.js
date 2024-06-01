//Math
const number= 4.56789;
console.log(Math.floor(number));
console.log(Math.ceil(number));

console.log(Math.sqrt(number));
console.log(Math.PI);
console.log(Math.min(5,20,3,4,8));
console.log(Math.max(5, 20, 3, 4, 8));
console.log(Math.random());
console.log(Math.floor(Math.random()*10));

//Date

const months = ['Enero','Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const days = ['Domingo', 'Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
const date=new Date();
const month=date.getMonth();
console.log(date);
console.log(months[month]);

const day =date.getDay();
console.log(days[day]);
console.log(date.getDate());
console.log(date.getFullYear());

console.log(
  `${days[day]}, ${date.getDate()} de ${months[month]} de ${date.getFullYear()}.`);

document.body.innerHTML = `${days[day]}, ${date.getDate()} de ${
  months[month]
} de ${date.getFullYear()}.`;


