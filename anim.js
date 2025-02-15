// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "El mundo está lleno de gente demasiao imperfecta", time: 16},
  { text: "Por eso es que yo creo que no sos de este planeta", time: 18 },
  { text: "Cojamos nuestras cosas y empaquemos las maletas", time: 20 },
  { text: "Elige a donde quieras y vamos en camioneta", time: 23 },
  { text: "Si no la aniquilan, pues vamos en bicicleta", time: 25 },
  { text: "Vamo' a hacerle al mundo una vuelta completa", time: 27 },
  { text: "Yo sé que tu inseguridad a veces a ti te afecta", time: 30 },
  { text: "Pero tu único defecto es no ver que sos perfecta", time: 32 },
  { text: "Y neta, que tú eres como Dios", time: 35 },
  { text: "Calmas mi miedo pero solo con tu voz", time: 37 },
  { text: "Creí no creer en el maldito amor", time: 39 },
  { text: "Pero hice una excepción tratándose de vos", time: 41 },
  { text: "Neta, que tú eres como Dios", time: 44 },
  { text: "Calmas mi miedo pero solo con tu voz", time: 46 },
  { text: "Creí no creer en el maldito amor", time: 48 },
  { text: "Pero hice una excepción tratándose de vos", time: 50 },
  { text: "No me hagas dudar si soy ateo ", time: 53 },
  { text: "Pues en algo que no se puede ver, yo ya creo", time: 55 },
  { text: "Aunque puedo sentirlo cuando tu corazón yo leo", time: 58 },
  { text: "O cuando por las ventanas de tu alma veo", time: 60 },
  { text: "Y no sé si también lo ves", time: 61 },
  { text: "Búscalo y míralo a través", time: 64 },
  { text: "De mis ojos y solo así podrás ver", time: 66 },
  { text: "Que tú eres un 10 de 10", time: 68 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);