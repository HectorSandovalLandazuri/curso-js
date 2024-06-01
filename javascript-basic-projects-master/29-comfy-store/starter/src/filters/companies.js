import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    let companies = ['all',...new Set(store.map((product) => product.company))];
    const companiesContainer = getElement('.companies');
    companiesContainer.innerHTML = companies.map((company)=>{
        return `<button class="company-btn">${company}</button>`;
    }).join('');
    companiesContainer.addEventListener('click',(e)=>{
        const element = e.target;
        if (element.classList.contains('company-btn')) {
            let newStore =[];
            if (element.textContent === 'all'){
                newStore = [...store];
            }else {
                newStore =store.filter((product)=> product.company === element.textContent);
            }   
            display(newStore,getElement('.products-container'),true); 
        }
    })
};

export default setupCompanies;
