function Counter(element,value){
    this.counter = element;
    this.value =value;
    this.resetBtn =element.querySelector('.reset');
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDom =element.querySelector('.value');
    this.valueDom.textContent=this.value;
    this.increase =this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    this.increaseBtn.addEventListener('click',this.increase)
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);

}

Counter.prototype.increase = function () {
    console.log(this);
    this.value++
    this.valueDom.textContent = this.value;
}

Counter.prototype.decrease = function () {
  console.log(this);
  this.value--;
  this.valueDom.textContent = this.value;
};

Counter.prototype.reset = function () {
  console.log(this);
  this.value=0;
  this.valueDom.textContent = this.value;
};


const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement(".second-counter"), 200);


function getElement(selection){
    const element =document.querySelector(selection);
    if (element) {
        return element
    }
    throw new Error(`Please check "${selection}" selector, no such element exists`)
}

