let display = document.querySelectorAll(".display");


document.addEventListener("click", hundlerNone);
function hundlerNone(event) {
  const target = event.target;
  for(let i = 0;i<display.length;i++){
    if (target==display[i]) {
      target.classList.add("none");
    }  
  }
}


let Left = document.querySelector(".arrow-left");
let Right = document.querySelector(".arrow-right");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".slider");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

Left.onclick = function() {
  plusSlides(-1);
  console.log("left");
};

Right.onclick = function() {
  plusSlides(1);
  console.log("right");
};




let submit = document.querySelector('.form__submit')
let sub = document.querySelector('.form')
let cursor = document.querySelector('.close')

sub.addEventListener('click',submitWindow)
function submitWindow (event){
  /*this.checkValidity()*/
  event.preventDefault()

  let target = event.target
  
  let message = document.querySelector('.message')
  message.style.display='block'
  
  let subject = document.querySelector('.input-subject')
  let describe = document.querySelector('.input-textarea')
  
  if(target.classList.contains('form__submit')){
    target.preventDefault()

    if(subject.value ==="Singolo"){
      document.querySelector('.theme').textContent += '  Singolo'
    }
  
    if(describe.value==='Portfolio project'){
      document.querySelector('.description').textContent += '  Portfolio project'
    }
    
  }
  
}

cursor.addEventListener('click', closeWindow)
function closeWindow (event){
  document.querySelector('.message').style.display='none'
}


/* Header nav */

let nav = document.querySelector('.nav')
nav.addEventListener('click', handlerHeaderNav)
function handlerHeaderNav (event){
  let target = event.target
  let navLink = document.querySelectorAll('.nav-link')
  for(let i = 0;i<navLink.length;i++){
    navLink[i].classList.remove('active')
  }
  target.classList.add('active')
}


/* Portfolio filter */

let filter = document.querySelector('.filter')
filter.addEventListener('click', handlerFilterPortfolio)
function handlerFilterPortfolio (event){
  let target = event.target
  let filterItem = document.querySelectorAll('.filter-item')
  for(let i = 0;i<filterItem.length;i++){
    filterItem[i].classList.remove('active')
  }
  target.classList.add('active')
}