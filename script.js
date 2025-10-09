// Lista de frases motivadoras 
const frases = [
  "Respira hondo… y deja que tu mente juegue un poquito 😏",
  "Exhala preocupación, inhala memes 🐱‍👤",
  "Momento zen: imagina que estás en bikini tomando el sol ☀️",
  "Suelta la tensión… y disfruta de tus snacks favoritos 🍿",
  "Respira… y deja que tu imaginación se divierta un rato 😉",
  "Hoy toca descanso, pero con actitud 😎",
  "Cierra los ojos… o no, pero finge que sí 🤫",
  "Inhala calma, exhala coquetería 😘",
  "Un respiro para ti… y otro para tus pensamientos más divertidos 😇",
  "Relájate, pero que tu mente se divierta 😏",
  "Exhala estrés, inhala chocolate 🍫",
  "Respira profundo y sonríe… tu mente se merece un descanso 😏",
  "Momento zen: sonríe y déjate llevar 😘",
  "Haz una pausa antes de contestar a ese WhatsApp 🔥",
  "Suelta tensión… y guarda tus pequeños secretos 🤫",
  "Un instante de calma… y un pensamiento divertido 💋",
  "Respira, sonríe y recuerda tu lado más divertido 😜",
  "Suelta todo, incluso esa reunión aburrida 🥱",
  "Exhala estrés, inhala travesuras 💃",
  "Respira profundo… y planea tu próxima aventura 😎",
  "Tu sofá te llama, respira y vete a él 🛋️",
  "Siente la calma… y deja que tu lado divertido despierte 😈",
  "Momento zen: ignora a todos los que chillan 😌",
  "Hoy respiras, mañana conquistas 😉",
  "Respira… pero no dejes de cotillear un poquito 😜",
  "Respira, exhala y deja que la imaginación vuele 💃",
  "Un respiro hoy, mañana vendrán las excusas 💤",
  "Medita un minuto, luego vuelve a tu drama favorito 🎭",
  "Exhala ansiedad, inhala sarcasmo 🤭",
  "Suelta la mente… y el móvil un ratito 📱✋",
  "Inhala paz, exhala un poquito de travesura 😼",
  "Respira hondo, pero no como si fueras a gritar 🗣️",
  "Momento de calma… o de procrastinar con estilo 😎",
  "Respira profundo y ríete de tus problemas 😂",
  "Inhala aire, exhala ‘¿por qué me metí en esto?’ 🤯",
  "Respira… y finge que estás en Bali 🌴",
  "Respira, sonríe… y finge que sabes lo que haces 😏",
  "Respira, pero no demasiado, no queremos hiperventilar 🤪",
  "Tu mente necesita vacaciones, aunque tú no 😎",
  "Relájate, que nadie te está mirando… o eso crees 👀",
  "Inhala calma, exhala drama 💁‍♀️",
  "Respira profundo… y di palabrotas mentalmente 😤",
  "Un momento de calma… y un pensamiento divertido 😄",
  "Respira, exhala y deja que la imaginación vuele 💃",
  "Momento de relax: piensa en lo que te haga sonreír 😈",
  "Respira, sonríe y recuerda tu lado más divertido 😜",
  "Suelta la tensión y deja entrar un poco de diversión 😏",
  "Respira profundo… y sueña en grande 🌟",
  "Exhala estrés, inhala risas 😂",
  "Momento zen: que tu mente haga burbujas de alegría 🫧",
  "Respira hondo… y deja que tu creatividad se descontrole 🎨",
  "Suelta el móvil por un segundo… tu mente te lo agradecerá 📵",
  "Respira… y recuerda que hoy solo hay espacio para cosas buenas 🌈",
  "Un minuto de calma… y otra sonrisa para tu día 😄",
  "Exhala preocupaciones, inhala aventuras ✈️",
  "Respira y deja que el humor sea tu superpoder 🦸‍♀️",
  "Momento zen: tu sofá y tú, la combinación perfecta 🛋️"
];



const motivacional = document.querySelector('.motivational');
const botonesTiempo = document.querySelectorAll('.time-btn');
const startBtn = document.getElementById('start-btn');
const spotifyBtn = document.getElementById('spotify-btn');

let duracionDescanso = 60;
let temporizadorActivo = false;
let intervaloFrases;
let intervaloDescanso;

// Crear elemento para mostrar el tiempo
let cuentaTiempo = document.createElement('div');
cuentaTiempo.classList.add('timer');
motivacional.parentNode.appendChild(cuentaTiempo);

// Función para cambiar frases
function cambiarFrase() {
  const index = Math.floor(Math.random() * frases.length);
  motivacional.textContent = frases[index];
}

// Frases cambian cada 6 segundos
intervaloFrases = setInterval(cambiarFrase, 6000);
cambiarFrase();

// Selección de tiempo
botonesTiempo.forEach(boton => {
  boton.addEventListener('click', () => {
    const minutos = parseInt(boton.textContent);
    duracionDescanso = minutos * 60;
    botonesTiempo.forEach(b => b.classList.remove('active'));
    boton.classList.add('active');
  });
});

// Función inicio descanso
startBtn.addEventListener('click', () => {
  if (temporizadorActivo) return;
  temporizadorActivo = true;

  let tiempoRestante = duracionDescanso;

  // Mostrar cuenta atrás sin quitar frases
  intervaloDescanso = setInterval(() => {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    cuentaTiempo.textContent = `⏳ ${minutos.toString().padStart(2,'0')}:${segundos.toString().padStart(2,'0')}`;
    tiempoRestante--;

    if (tiempoRestante < 0) {
      clearInterval(intervaloDescanso);
      temporizadorActivo = false;
      cuentaTiempo.textContent = '';
      alert("¡Tu descanso ha terminado! 🌸");
    }
  }, 1000);
});

// Botón Spotify
spotifyBtn.addEventListener('click', () => {
  window.open('https://open.spotify.com/playlist/TU_PLAYLIST_ID', '_blank');
});
