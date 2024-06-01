window.addEventListener('DOMContentLoaded',()=>{
    console.log('hello');
})

window.addEventListener('load',()=>{
    console.log('bye');
})

window.addEventListener('scroll',()=>{
    console.log(window.scrollY, window.scrollX);
})

console.log('height: ' + window.innerHeight);
console.log("widtht: " + window.innerWidth);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click',()=> {
    const values = box.getBoundingClientRect();
    console.log(values);
    console.log(values.height);
})


window.addEventListener('resize',()=>{
    console.log(window.innerWidth);
})
