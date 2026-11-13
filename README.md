# Portal de Cristhian · Game Developer

Portal web con **dos videojuegos hechos en Unity**, ambos jugables en la misma página (Unity WebGL):

1. **Mi Bolivia**: endless runner 3D por las calles de La Paz. Controles: ↑ saltar · ↓ agacharse. Meta: 500 votos. Vidas: 30.
2. **Pac-Man Bolivia**: laberinto 3D estilo Pac-Man sobre el mapa de Bolivia. Controles: WASD o flechas · R reiniciar. Meta: recoger las 411 monedas y llegar a la salida. Vidas: 3.

Cada juego tiene su propia sección con un botón **START** encima del área de juego; ninguno se ejecuta hasta que se pulsa.
El menú superior y las tarjetas de "Elige un juego" llevan a cada sección.

## Estructura

- `index.html`, `css/`, `js/`, `img/`: el portal (portada, menú de juegos, información de cada juego y zonas de juego).
- `juego/`: build Unity WebGL de Mi Bolivia.
- `pacman/`: build Unity WebGL de Pac-Man Bolivia.

Las builds están sin compresión para que funcionen en GitHub Pages.
