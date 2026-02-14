const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');



// --- Elementos de la música ---
const musica = document.getElementById('musica-valentine');
const btnMusica = document.getElementById('btn-musica');
const iconMusica = document.getElementById('icon-musica');
const visualizer = document.getElementById('visualizer');
const volumeSlider = document.getElementById('volume-slider');

// 1. Lógica de la Música (Separada para que no interfiera)
if (btnMusica) {
    btnMusica.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que al hacer clic en el botón de música se active algo del sobre
        if (musica.paused) {
            musica.play();
            iconMusica.textContent = "pause";
            visualizer.classList.add('playing');
        } else {
            musica.pause();
            iconMusica.textContent = "play_arrow";
            visualizer.classList.remove('playing');
        }
    });
}

if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
        e.stopPropagation(); // Evita que al mover el volumen se active algo del sobre
        musica.volume = e.target.value;
    });
}

// 2. Lógica del Sobre y la Carta
// En lugar de usar 'document', usamos el contenedor específico para el sobre
envelope.addEventListener('click', (e) => {
    // Si el clic fue en el corazón o las tapas, abrimos/cerramos el sobre
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
    } 
    // Si el clic fue dentro de la carta (el papel blanco)
    else if (e.target.closest(".letter")) {
        if (!letter.classList.contains('opened')) {
            letter.classList.add("letter-opening");
            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');
            }, 500);
            envelope.classList.add("disable-envelope");
        } else {
            // Lógica para cerrar la carta si ya estaba abierta
            letter.classList.add('closing-letter');
            envelope.classList.remove("disable-envelope");
            letter.classList.remove('opened');
            setTimeout(() => {
                letter.classList.remove('closing-letter');
            }, 500);
        }
    }
});

// 3. Autoplay al cargar
window.addEventListener('load', () => {
    musica.volume = 0.6; 
    musica.play().then(() => {
        visualizer.classList.add('playing');
        iconMusica.textContent = "pause";
    }).catch(() => console.log("Autoplay esperando interacción"));
});