// Menú móvil
const boton = document.querySelector('.nav__btn');
const menu = document.getElementById('menu');
boton.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  boton.setAttribute('aria-expanded', abierto);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('abierto'); boton.setAttribute('aria-expanded', false); }
});

// Resalta en el menú la sección visible
const enlaces = [...menu.querySelectorAll('a')];
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(en => {
    if (!en.isIntersecting) return;
    enlaces.forEach(a => a.classList.toggle('activo', a.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => observador.observe(s));

// Carga el juego de Unity solo cuando se pide (pesa varios MB)
const marco = document.getElementById('marco');
const iniciar = document.getElementById('iniciar');
const fullscreen = document.getElementById('fullscreen');
function cargarJuego() {
  if (marco.querySelector('iframe')) return;
  const iframe = document.createElement('iframe');
  iframe.src = 'juego/index.html';
  iframe.title = 'Mi Bolivia (Unity WebGL)';
  iframe.allow = 'fullscreen; autoplay';
  iframe.allowFullscreen = true;
  marco.appendChild(iframe);
  iniciar.remove();
  fullscreen.hidden = false;
  iframe.addEventListener('load', () => iframe.focus());
}
iniciar.addEventListener('click', cargarJuego);
document.querySelectorAll('a[href="#jugar"]').forEach(a => a.addEventListener('click', () => setTimeout(cargarJuego, 400)));
fullscreen.addEventListener('click', () => marco.requestFullscreen && marco.requestFullscreen());
