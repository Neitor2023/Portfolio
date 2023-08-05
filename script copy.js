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
function lines() {
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
// Esta función controla el modo oscuro

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
}

// Verificar si hay una preferencia de tema guardada en localStorage

const prefersDarkMode = JSON.parse(localStorage.getItem("dark-mode"));
if (prefersDarkMode !== null) {
  document.body.classList.toggle("dark-mode", prefersDarkMode);
}

// -----------------------------------------------------------------------
// Esta funcion cambia el color de los texto segun la eleccion

const colorPickerBtn = document.getElementById('color-picker-btn');
const colorPicker = document.querySelector('.color-picker');
const closeBtn = document.getElementById('close-btn');
const colorOptions = document.querySelectorAll('.color-option');

colorPickerBtn.addEventListener('click', () => {
  colorPicker.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  colorPicker.classList.remove('show');
});

colorOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const selectedColor = option.getAttribute('data-color');
    // document.body.className = '';
     // Limpiar todas las clases del <body>
    document.body.classList.add(selectedColor);
     // Agregar la clase correspondiente
  });
});

