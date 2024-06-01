let heading =document.createElement('h2');
heading.innerText = `I'm a dynamic heading`;
document.body.prepend(heading);

//remove
const result = document.querySelector('#result');
//result.remove();
//removeChild
heading = result.querySelector('h1');
result.removeChild(heading);

//innerhTML
//textContent
const list = document.getElementById('first');
const div =  document.getElementById('second');
const item = document.querySelector('.item');
console.log(div.textContent);
console.log(list.innerHTML);

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">list item</li>
                <li>list item</li>`;
document.body.appendChild(ul);

//CSS
const random =document.querySelector('.random');
// random.style.backgroundColor='blue';
// random.style.color='white';
// random.style.fontSize ='3rem';
// random.style.textTransform = 'capitalize';

random.classList.add('Title');

const changeColor = () =>{
    console.log('hello');
    if (random.classList.contains('red')) {
        random.classList.remove('red')
    }else {
        random.classList.add("red");  
    }
}

// const btn = document.querySelector('.btn');
// // btn.addEventListener('click',()=>{
// //     random.classList.add('red')    
// // })
// btn.addEventListener("click", changeColor);

// btn.addEventListener("mousedown", () => {
//   console.log("mousedown");
// });
// btn.addEventListener("mouseup", ()=>{
//      console.log('mouseup');    
// })
// btn.addEventListener("mouseenter", () => {
//   console.log("mouseenter");
// });
// btn.addEventListener("mouseleave", () => {
//   console.log("mouseleave");
// });

const nameInput =document.getElementById('name');
nameInput.addEventListener("keypress", () => {
  console.log("keypress");
});
nameInput.addEventListener("keydown", () => {
  console.log("keydown");
});
nameInput.addEventListener("keypress", () => {
  console.log("keyup");
});

const link =document.getElementById('link');
link.addEventListener('click',(e)=>{
    e.preventDefault();    
})

const btns =document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
        // console.log(e.currentTarget);
        // e.currentTarget.style.color ='green';
        console.log(e.target);
        e.target.style.color='red';
    })   
})