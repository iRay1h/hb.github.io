const neon = document.getElementById('neon');
const botonFelizCumple = document.getElementById('botonFelizCumple');
const contenido = document.getElementById('contenido');
const mensaje = document.getElementById('mensaje');
const botonContinuar = document.getElementById('botonContinuar');
const felizJaz = document.getElementById('felizJaz');
const audioPoema = document.getElementById('audioPoema');

// Al hacer clic en el bombillo neón
neon.addEventListener('click', () => {
    document.body.style.backgroundColor = 'gray';
    neon.style.display = 'none';
    contenido.style.display = 'block';
    
    setTimeout(() => {
        botonFelizCumple.style.display = 'block';
    }, 100);
});

botonFelizCumple.addEventListener('click', () => {
    botonFelizCumple.style.display = 'none';
    mostrarMensaje();
    audioPoema.play(); // Reproduce la música cuando aparece el poema
});

function mostrarMensaje() {
    let texto = `Hoy el sol brilla un poco más,
    los vientos susurran tu nombre, Jaz,
    flores que bailan al compás del tiempo,
    celebran contigo este dulce momento.

    Cada año trae nuevos caminos,
    y aunque algunos se alejen, seguimos unidos.
    Como pétalos de un Jazmín en flor,
    nuestra amistad perdura, firme y sin temor.

    Que en este día rías sin parar,
    que la vida te regale un nuevo empezar.
    Hoy brindo por tus sueños, por lo que vendrá,
    y por cada paso que juntos dimos ya.`;

    let i = 0;
    mensaje.style.display = 'block';

    function escribir() {
        if (i < texto.length) {
            mensaje.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, 50);
        } else {
            botonContinuar.style.display = 'block';
        }
    }

    escribir();
}

botonContinuar.addEventListener('click', () => {
    mensaje.style.display = 'none';
    botonContinuar.style.display = 'none';
    felizJaz.style.display = 'block';
});


function abrirCaja(caja) {
    caja.classList.toggle('open');
}


function ocultarCajitas() {
    const cajitas = document.querySelectorAll('.cajita');
    cajitas.forEach(cajita => {
        cajita.style.display = 'none';
    });
}
// Mostrar el mensaje final
botonContinuar.addEventListener('click', () => {
    mensaje.style.display = 'none';
    botonContinuar.style.display = 'none';
    felizJaz.style.display = 'block';
});

const mensajeFinal = document.getElementById('mensajeFinal');

botonContinuar.addEventListener('click', () => {
    mensaje.style.display = 'none'; // Oculta el poema
    botonContinuar.style.display = 'none'; // Oculta el botón "Continuar"
    mensajeFinal.style.display = 'block'; // Muestra el mensaje final
});
