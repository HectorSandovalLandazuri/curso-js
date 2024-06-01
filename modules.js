import { random, people } from "./utils/data.js";

import showInfo from './utils/showPeople.js';

import getE from './utils/getElement.js'    

const container = getE('.container');

const btn = getE('.btn');

//const prueba = getE('.prueba');


btn.addEventListener('click',()=> {
    container.innerHTML = showInfo(people);
})

