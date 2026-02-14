const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');


document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
    } else if (e.target.matches(".envelope *")) {
        if (!letter.classList.contains('opened')) {
            letter.classList.add("letter-opening");

            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');
            }, 500);
            envelope.classList.add("disable-envelope")
        } else {
            letter.classList.add('closing-letter')
            envelope.classList.remove("disable-envelope")
            letter.classList.remove('opened')
            setTimeout(() => {
                letter.classList.remove('closing-letter');
                letter.classList.remove('opened');
            }, 500);
        }
    }
});

const musica = document.getElementById('musica-valentine');
const btnMusica = document.getElementById('btn-musica');
const iconMusica = document.getElementById('icon-musica');
const visualizer = document.getElementById('visualizer');
const volumeSlider = document.getElementById('volume-slider');

// Control de Volumen
volumeSlider.addEventListener('input', (e) => {
    musica.volume = e.target.value;
});

// Lógica de Play/Pause con iconos y animación
btnMusica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        iconMusica.textContent = "pause"; // Icono de pausa de Google
        visualizer.classList.add('playing');
    } else {
        musica.pause();
        iconMusica.textContent = "play_arrow"; // Icono de play de Google
        visualizer.classList.remove('playing');
    }
});

// Intento de reproducción automática al cargar
window.addEventListener('load', () => {
    // Bajamos un poco el volumen inicial para no asustarla
    musica.volume = 0.6; 
    
    musica.play().then(() => {
        visualizer.classList.add('playing');
        iconMusica.textContent = "pause";
    }).catch(error => {
        console.log("El navegador bloqueó el autoplay.");
    });
});

// --- Su lógica original de la carta (Manténgala así) ---
document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
    } else if (e.target.matches(".envelope *")) {
        if (!letter.classList.contains('opened')) {
            letter.classList.add("letter-opening");

            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');
            }, 500);
            envelope.classList.add("disable-envelope")
        } else {
            letter.classList.add('closing-letter')
            envelope.classList.remove("disable-envelope")
            letter.classList.remove('opened')
            setTimeout(() => {
                letter.classList.remove('closing-letter');
                letter.classList.remove('opened');
            }, 500);
        }
    }
});