let phones = document.querySelectorAll(".display");

phones.forEach((el)=>{
  el.addEventListener('click',()=>{
    el.classList.toggle('phone--off')
  })
})


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



const form = document.querySelector('.form');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    let message = document.querySelector('.message')
    message.style.display='block'
  
  let subject = document.querySelector('.input-subject')
  let describe = document.querySelector('.input-textarea')
  let name = document.querySelector('.input-name')
  let mail = document.querySelector('.input-mail')

    if(subject.value ==="Singolo"){
      document.querySelector('.theme').textContent = 'Тема: Singolo'
    }else if (subject.value==""){
      document.querySelector('.theme').textContent = 'Без темы'
    }else{
      document.querySelector('.theme').textContent += " " + subject.value
    }
  
    if(describe.value==='Portfolio project'){
      document.querySelector('.description').textContent = 'Описание: Portfolio project'
    }else if(describe.value==""){
      document.querySelector('.description').textContent = 'Без описания'
    }else{
      document.querySelector('.description').textContent += ' ' + describe.value
    }
    
    subject.value = ""
    describe.value = ""
    name.value = ""
    mail.value = ""
  
})

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

let filter1 = document.querySelector('.filter')
filter1.addEventListener('click', handlerFilterPortfolio)
function handlerFilterPortfolio (event){
  let target = event.target
  let filterItem = document.querySelectorAll('.filter-item')
  for(let i = 0;i<filterItem.length;i++){
    filterItem[i].classList.remove('active')
  }
  target.classList.add('active')
}


/*  portfolio image border*/

let album = document.querySelector('.portfolio-album')
album.addEventListener('click', handlerPortfolioImgBorder)
function handlerPortfolioImgBorder (event){
  let target = event.target
  let Item = document.querySelectorAll('.pot-img')
  for(let i = 0;i<Item.length;i++){
    Item[i].classList.remove('portfolio-imgBorder')
  }
  if(target.classList.contains('pot-img')){
    target.classList.add('portfolio-imgBorder')
  }
}


/* portfolio img shuffle*/
function makeActive(targetClass, container, target) {
  const activeClass = targetClass + 'active';

  container.forEach((el) => {
    el.classList.remove(activeClass);
  });
  
  if(target.classList.contains(targetClass)) {
    target.classList.add(activeClass);
  }
}



function rand(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function swapNodes(childs, a, b) {
  const parent = childs[a].parentNode;
  const replaced = parent.replaceChild(childs[b], childs[a]);
  parent.insertBefore(replaced, childs[b]);
}

function shuffleImages(images) {
  for(let i = images.length - 1; i >= 1; --i) {
    const newPosition = rand(0, i);
    swapNodes(images, i, newPosition);
  }
}

const portfolio = document.querySelector('.portfolio-album');
const portfolioItemClass = "pot-img";
const portfolioImages = portfolio.querySelectorAll('.' + portfolioItemClass);

portfolio.addEventListener("click", (e) => {
  makeActive(portfolioItemClass, portfolioImages, e.target);
});


const filter = document.querySelector('.filter');
const filterItemClass = "filter-item";
const filterItems = filter.querySelectorAll('.' + filterItemClass);

filter.addEventListener("click", (e) => {
  makeActive(filterItemClass, filterItems, e.target);

  const portfolioItems = portfolio.querySelectorAll(".portfolio-img");
  shuffleImages(portfolioItems);
})



window.onscroll = function () {myFunction()}

var header = document.querySelector('.header')
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if(sticky>0){
    document.querySelector('.MainSlider').style.marginTop='95px'
  }
}

console.log(sticky)





