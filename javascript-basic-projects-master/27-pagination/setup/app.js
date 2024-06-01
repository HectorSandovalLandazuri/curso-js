import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const btnContainer = document.querySelector('.btn-container');
const title = document.querySelector(".section-title h1");

let index =0;
let pages = [];

const setupUI = () =>{
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages,index);
}

const init = async () => {
    const followers = await fetchFollowers();
    title.textContent='Pagination';
    pages = paginate(followers);
    setupUI();
}

btnContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn-container')) return

    if(e.target.classList.contains('page-btn')) {
        index = parseInt(e.target.dataset.index);
    }
    if(e.target.classList.contains('prev-btn')) {
        if (index===0) return 
        index--;
    }
    if (e.target.classList.contains("next-btn")) {
      if (index === pages.length-1) return;
      index++;
    }
    setupUI();

})

window.addEventListener('load',init)
