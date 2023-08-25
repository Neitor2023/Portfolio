let lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTo;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add('icon');
  } else {
    navbar.classList.remove('icon');
  }
  lastScrollTop = scrollTop;
})
// ----------------- Cambia las diapositivas de la tarjeta de presentacion -----------------
const CardButtOnenLink = document.querySelector('.CardButtOnen');
function btnStar() {
  CardButtOnenLink.classList.add('a');
}
function btnNext() {
  CardButtOnenLink.classList.add('b');
}
function btnContinue() {
  CardButtOnenLink.classList.add('c');
}
function btnEnd() {
  CardButtOnenLink.classList.remove('a');
  CardButtOnenLink.classList.remove('b');
  CardButtOnenLink.classList.remove('c');
}
// ---------------------------
// Esta función alternará la clase 'active' para activar y desactivar el botón contacta me
function toggleActive() {
  const contac = document.getElementById('autoActiveContac');
  contac.classList.toggle('active');
}

// Llamamos a la función para activar y desactivar el botón cada 2 segundos (2000 milisegundos)
setInterval(toggleActive, 740);  
// ------------------------------------
// Esta función crea el fondo de comestas que van de abajo hacia arriba
function linesXXXXXXXXXXXXXXXXXXXXXXXXX() {
  let sizeW = Math.random() * 12;
  let duration = Math.random() * 3;
  let e = document.createElement('div');
  e.setAttribute('class','circle');
  document.body.appendChild(e);
  e.style.width = 2+sizeW+'px';
  e.style.left = Math.random() * + innerWidth + 'px';
  e.style.animationDuration = 2 + duration+'s';
  setTimeout(function(){
    document.body.removeChild(e)
  },5000);
}

setInterval(function(){
  lines();
},200);
// ---------------------------------------------------------------------------
// Esta funcion mueve el focus del menu segun el movimiento del scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a span');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelectorAll('nav ul li a[href*=' + id + '] span').forEach(span => span.classList.add('active'));
      });
    };
  });
};
// --------------------------------------------------------------------------
// Esta funcion mueve el indicador del menu a donde se haga click
let market = document.querySelector('#indicator');
let nav = document.querySelector('nav');
let item = document.querySelectorAll('nav ul li a span');

nav.onclick=function(){
  market.classList.toggle('change');
}
function indicator(e){
  console.log("e ",e)
  console.log("e.getBoundingClientRect ",e.getBoundingClientRect().left)
  market.style.left = e.getBoundingClientRect().left + 'px';
  market.style.width = (e.getBoundingClientRect().width + 20) + 'px';
  market.style.display = "block";
  market.style.filter = 'hue-rotate('+ Math.random() *360 +'deg)';
}
item.forEach(link => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  })
})
function addActiveClass() {
  item.forEach((i) =>
  i.classList.remove('active'));
  this.classList.add('active');
}

item.forEach((i) =>
i.addEventListener('click', addActiveClass));

// --------------------------------------------------------------------
// Esta funcion hace el cambio de modo noche y modo dia
const darkModeIcon = document.querySelector(".modoIcon");
const body = document.body;

darkModeIcon.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// -----------------------------------------------------------------------
// Esta funcion cambia el color de los texto segun la eleccion
document.addEventListener('DOMContentLoaded', () => {
  const colorPickerBtn = document.getElementById('color-picker-btn');
  const colorPicker = document.querySelector('.color-picker');
  const colorOptions = document.querySelectorAll('.color-option');
  const closeBtn = document.getElementById('close-btn');

  colorPickerBtn.addEventListener('click', () => {
    colorPicker.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    colorPicker.classList.remove('show');
    colorPicker.classList.add('hide');
  });

  colorOptions.forEach((option) => {
    option.addEventListener('click', () => {
      const color = option.dataset.color;
      document.body.style.color = color;
      colorPicker.classList.remove('show');
      colorPicker.classList.add('hide');
    });
  });
});
// ******************* llama al menu lateral ****************
const toggleid = document.getElementById('toggle-id');
const scriptNavigation = document.querySelector('.navigation');
toggleid.addEventListener('click', () => {
  scriptNavigation.classList.toggle('show');
});
toggleid.addEventListener('click', () => {
  scriptNavigation.classList.remove('show');
});
// ********************* mueve el active en el menu lateral ******************
let list = document.querySelectorAll('.navigation li');
function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active')
}
list.forEach((item) =>
  item.addEventListener('click', activeLink));

// *********************** Can el boton de las primeras tarjetas cambia el contenidos *************
// const oneButtonCardLink = document.querySelector('.oneButtonCard');

// function btnStar() {
//   oneButtonCardLink.classList.add('active');
// }
// function btnNext() {
//   oneButtonCardLink.classList.remove('active');
// }
