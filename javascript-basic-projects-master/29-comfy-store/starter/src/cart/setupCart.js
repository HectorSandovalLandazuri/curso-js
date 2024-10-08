// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');



export const addToCart = (id) => {
  console.log(id);
  let item = cart.find((cartItem)=>cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    //add item to cart
    product = {...product,amount:1};
    cart = [...cart,product];
    
    //add item to the dom
    addToCartDOM(product);
  }else {
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")]; ;
    const newAmount = items.find((value)=>value.dataset.id === id);
    newAmount.textContent = amount;
  }
  // add one tod the item count
  displayCartItemCount();
  //display cart totals
  displayCartTotal();
  //set cart to storage
  setStorageItem('cart',cart);

  // more stuff coming
 openCart(); 
};

const init = () =>{
  displayCartItemCount();
  //display cart totals
  displayCartTotal();
  //add all cart items to the dom
  displayCartItemsDOM();
  //setup cart functionality
  setupCartFuncionality();
}

function displayCartItemsDOM() {
  cart.forEach((cartItem)=>{
    addToCartDOM(cartItem);
  })
}

function decreaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}


function increaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem)=>{
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = {...cartItem,amount: cartItem.amount + 1};
    }
    return cartItem
  })
  return newAmount;
}

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return total+=cartItem.amount;
  }, 0);  
  cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
  const total = cart.reduce((total, cartItem) => {
    return total += (cartItem.amount*cartItem.price);
  }, 0);
  cartTotalDOM.textContent = `Total: ${formatPrice(total)}`;
}

function setupCartFuncionality(){
  cartItemsDOM.addEventListener('click',(e)=>{
    const element = e.target;
    const parent = e.target.parentElement;
    const id = element.dataset.id;
    const parentID = parent.dataset.id;

    //remove
    if (element.classList.contains('cart-item-remove-btn')) {
      removeItem(id);
      parent.parentElement.remove();
    }
    //increase
    if (parent.classList.contains('cart-item-increase-btn')) {
      const newAmount = increaseAmount(parentID);  
      parent.nextElementSibling.textContent=newAmount;
    }
    //decrease
    if (parent.classList.contains("cart-item-decrease-btn")) {
      const newAmount = decreaseAmount(parentID);

      if (newAmount === 0) {
        removeItem(parentID)
        parent.parentElement.parentElement.remove();
      }else {
        parent.previousElementSibling.textContent = newAmount;
      }

    }


    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);

  })
}

function removeItem (id) {
  cart = cart.filter((cartItem)=> cartItem.id  !==id);
  
}


init();