//Make Soup
//Boil water 10 min
//Chop Carrots
//Add Carrots boil for 5 min
//Chop Onion
//Add Onion boli for 5 min



// boilWater(10000);
// console.log('Chop Carrot');

// function boilWater() {
//   console.log("Boiling ...");
//   setTimeout(()=>{
//     console.log("Done boiling before vegetables.");
//     console.log("Add Carrots");
//     setTimeout(() => {
//       console.log("Carrots done");
//       console.log('Add Onions');
//       setTimeout(()=>{
//         console.log("Onions Done");
//       },5000)
//     }, 5000);
//     console.log("Done boiling carrots");
//     console.log(`chop onion`);
//   },10000)  
// }

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const container = document.querySelector('.img-container');
const url = "https://source.unsplash.com/random";
const btn =document.querySelector('.btn');

// btn.addEventListener('click',()=>{
//   setTimeout(()=>{
//     heading1.style.color = 'red';
//     setTimeout(()=>{
//       heading2.style.color = 'green';
//       setTimeout(()=>{
//         heading3.style.color = "blue";
//       },1000)
//     },2000)
//   },1000);
// })

btn.addEventListener('click',async()=>{
  loadImg(url).then( data => container.appendChild(data)).catch (err => {
    console.log(err);
  })
  try {
    await addColor(1000, heading1, "red");
    await addColor(2000, heading2, "green");
    await addColor(1000, heading3, "blue");

  }catch (err) {
    console.log(err);
  }

  // addColor(1000, heading1, "red")
  //   .then(() => addColor(2000, heading2, "green"))
  //   .then(() => addColor(1000, heading3, "blue"))
  //   .catch(err=> console.log(err));


});

function loadImg(url) {
  return new Promise((resolve,reject)=>{
    let img = new Image();
    img.addEventListener('load',()=>{
      resolve(img);
    })
    img.addEventListener('error',()=>{
      reject(new Error(`Failed to load image from source: ${url}`) );
    })
    img.src =url;

  })
}

// const promise = new Promise((resolve,reject)=>{
//   let value = false;
//   if (value) {
//     resolve('hey value is true');
//   }else {
//     reject(`There was an error, value is false`);
//   }
// })

// promise.then((value)=>{
//   console.log(value);
// }).catch((err)=>{
//   console.log(err);
// })

function addColor(time,element,color) {
   return new Promise((resolve, reject)=>{
    if (element) {
      setTimeout(()=>{
        element.style.color = color;
        resolve()
      },time)
    }else {
      reject(new Error(`There is no such element ${element}`))
    }
   })
}

