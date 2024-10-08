import { hideLoading } from "./toggleLoading.js";
import getElement from "./getElement.js";

const displayDrink = (data) => {
    hideLoading();
    const drink = data.drinks[0];
    const {strDrinkThumb:image,strDrink:name,strInstructions:desc} = drink;
    const list = [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
    ];

    document.title = name;
    const img = getElement('.drink-img');
    const drinkName = getElement(".drink-name");
    const description = getElement(".drink-desc");
    const ingredients = getElement(".drink-ingredients");
    img.src =image;
    drinkName.textContent = name;
    description.textContent = desc;
    ingredients.innerHTML = list.map((item)=>{
        if (!item) return    
        return `<li><i class="far fa-check-square"></i>${item}</li>`;
    }).join('');
    console.log(drink,list);

};

export default displayDrink;
