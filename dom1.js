const container =document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
    console.log('current target',e.currentTarget);
    console.log('target', e.target);
    if (e.target.classList.contains('link')) {
        console.log('you clicked on the link');
    }
}

function stopPropagation(e) {
    e.stopPropagation();
}

list.addEventListener('click',showBubbling);
container.addEventListener('click', function(e){
    if (e.target.classList.contains('heading')) {
        console.log('hello there');
    }
});

const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    const element =document.createElement('h1');
    element.classList.add('heading');    
    element.textContent =`I'm inside the container`
    container.appendChild(element);
})