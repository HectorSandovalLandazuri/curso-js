let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = ()=>{
    if (filteredProducts.length<1){
        productsContainer.innerHTML =`<h6>Sorry, no products match your search</h6>`;
        return
    }
    productsContainer.innerHTML= filteredProducts.map(({id,title, image, price})=>{
        return `<article class="product" data-id="${id}">
                    <img src="${image}" alt="" class="product-img img">
                    <footer>
                        <h5 class="product-name">${title}</h5>
                        <span class="product-price">$${price}</span>
                    </footer>
                </article>`;
    }).join('')
}

displayProducts();

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
    // keyup - fired when key released
    const inputValue = searchInput.value.toLowerCase();
    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(inputValue);
    });
    displayProducts();
  });

  const companiesDOM = document.querySelector('.companies');

  const displayButtons = ()=>{
    const buttons = ['all',...new Set(products.map(product=>product.company)),];
    companiesDOM.innerHTML= buttons.map((company)=>{
        return `<button class="company-btn" data-id= "${company}">${company}</button>`
    }).join('')
  }

  displayButtons();

  companiesDOM.addEventListener('click',(e)=>{
    const el = e.target;
    if (el.classList.contains('company-btn')) {
        if (el.dataset.id==='all'){
            filteredProducts= [...products];
        } else {
            filteredProducts = products.filter((product) => {
                return product.company === el.dataset.id;
              });
        }
        searchInput.value='';
        displayProducts();            

    }
  })

