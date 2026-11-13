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

// Cada juego (Unity WebGL) queda en espera hasta que el usuario pulsa su botón START.
// Se ejecuta dentro de su propia sección, en esta misma página (sin pestañas ni ventanas nuevas).
document.querySelectorAll('.juego[data-juego]').forEach(juego => {
  const start = juego.querySelector('.juego__start');
  const full = juego.querySelector('.juego__full');
  const estado = juego.querySelector('.juego__estado');
  const marco = juego.querySelector('.juego__marco');

  start.addEventListener('click', () => {
    let iframe = marco.querySelector('iframe');
    if (iframe) { iframe.focus(); return; }
    iframe = document.createElement('iframe');
    iframe.src = juego.dataset.juego;
    iframe.title = juego.dataset.titulo;
    iframe.allow = 'fullscreen; autoplay';
    iframe.allowFullscreen = true;
    marco.querySelector('.juego__espera')?.remove();
    marco.appendChild(iframe);
    marco.classList.add('juego__marco--activo');
    start.textContent = '● En juego';
    start.classList.add('juego__start--activo');
    full.hidden = false;
    estado.textContent = 'Cargando… cuando termine la barra, haz clic dentro del juego para usar el teclado.';
    iframe.addEventListener('load', () => {
      iframe.focus();
      estado.textContent = 'Juego iniciado. Haz clic dentro del juego si no responde al teclado.';
    });
  });

  full.addEventListener('click', () => marco.requestFullscreen && marco.requestFullscreen());
});
