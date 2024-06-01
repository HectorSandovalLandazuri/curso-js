import getElement from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = ({drinks}) => {
    const section =getElement('.section-center');        
    const title = getElement(".title");        
    if (!drinks) {
        hideLoading();
        title.textContent ='sorry, no drinks matched your search';
        section.innerHTML = null;
        return; 
    }
    const newDrinks =drinks.map((drink)=>{
        return `<a href="drink.html">
                    <article class="cocktail" data-id="${drink.idDrink}">
                        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                        <h3>${drink.strDrink}</h3>
                    </article>
                </a>`;
    }).join('');
    hideLoading();
    title.textContent='';
    section.innerHTML=newDrinks;
    return section;

}

export default displayDrinks;