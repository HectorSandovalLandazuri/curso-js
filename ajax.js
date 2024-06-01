// const btn = document.querySelector('.btn');

// const url = "./api/people.json";


// btn.addEventListener('click',()=>{
//     getData()
//     getPeople(url);
// })


// function getData(){
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET", "./api/sample.txt");
//     xhr.onreadystatechange = function () {
//     console.log(xhr);
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const text = document.createElement("p");
//         text.textContent = xhr.responseText;
//         document.body.appendChild(text);
//     } else {
//         console.log({
//         status: xhr.status,
//         text: xhr.statusText,
//         });
//     }
//     };
//     xhr.send();
// }

// function getPeople(url) {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", url);
//   xhr.onreadystatechange = function () {
//     console.log(xhr);
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText)
//         const displayData = data.map((item)=>{
//             return `<p>${item.name}</p>`    
//         }).join('');
//         const element =document.createElement('div');
//         element.innerHTML = displayData
//         document.body.appendChild(element)
//     } else {
//       console.log({
//         status: xhr.status,
//         text: xhr.statusText,
//       });
//     }
//   };
//   xhr.send();
// }


const url ='./api/people.json';

// const response =fetch(url);
// console.log(response); 

// fetch(url).then((res)=>{
// // response object

//     return res.json()

// }).then((data)=>{
//     console.log(data);
// }).catch ((err)=> console.log(err));

//fetch(url).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err));

const btn = document.querySelector('.btn');

// btn.addEventListener('click',()=>{
//     fetch(url).then((resp)=>resp.json()).then((data)=>{
//       displayItems(data);
//     }
//     ).catch((err)=>console.log(err));
// })


btn.addEventListener('click', async()=>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayItems(data);
    } catch (error) {
        console.log(error);        
    }
})


const displayItems = (items) => {
    const displayData = items.map((item) => {
        return `<p>${item.name}</p>`;
    }).join("");
      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
}
