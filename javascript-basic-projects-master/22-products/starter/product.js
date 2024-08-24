


const url =
  "https://www.course-api.com/javascript-store-single-product";

const productDOM = document.querySelector(".product");

const fetchProduct = async () => {
    productDOM.innerHTML = '<h4 class="product-loading">Loading...</h4>';
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        console.log(id);
        
        const resp = await fetch(`${url}?id=${id}`);
        const data = await resp.json();
        return data;
    } catch (error) {
     productDOM.innerHTML = `<p class="error">there was a problem loading the product.</p>`;
    }
};
const displayProduct = (product) => {
    //company, colors, description, name:title, price,image(url:img)   
    const {company, colors,description, name:title, price, image} = product.fields;
    const {url:img} = image[0];
    document.title = title.toUpperCase();
    console.log(colors);
    const colorsList = colors.map((color)=>{
        return `<span class="product-color" style="background: ${color}"></span>`;
    }).join('');
    productDOM.innerHTML = `<div class="product-wrapper">
            <img src="${img}" alt="${title}" class="img" >
            <div class="product-info">
                <h3>${title}</h3>
                <h5>${company}</h5>
                <span>${price/100}</span>
                <div class="colors">
                    ${colorsList}
                </div>
                <p>${description}</p>
                <button class="btn">add to cart</button>

            </div>
        </div>`;
   
   
};

const start = async () => {
    
    const product = await fetchProduct();
   displayProduct(product);
};

start();
