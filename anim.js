// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
let galery = document.querySelector("#galery")

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "At the time", time: 15 },
  { text: "The whisper of birds", time: 18 },
  { text: "Lonely before the sun cried", time: 27 },
  { text: "Fell from the sky", time: 32 },
  { text: "Like water drops", time: 33 },
  { text: "Where I'm now? I don't know why", time: 41 },
  { text: "Nice butterflies in my hands", time: 47 },
  { text: "Too much light for twilight", time: 54 },
  { text: "In the mood for the flowers love", time: 59 },
  { text: "That vision", time: 67 },
  { text: "Really strong, blew my mind", time: 72 },
  { text: "Silence Let me see what it was", time: 78 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
];



const imgData = [
  { time: 10, img: 'https://lh3.googleusercontent.com/pw/AP1GczPXPxMmkdonN-XBrZdNrFFKj9kuM8d3vF0se6J1pmDUU1fRASJalF9cmDWKzYsZY3GuUJB5dWqZZXZuQjd3V4qr3JjA_dHUO9rRqDaQYDIDEfh9Oj4AD0O9jUsN6Iia2v95vZQ8dmGpm0dO5zip34OT=w656-h875-s-no?authuser=0' },
  { time: 20, img: 'https://lh3.googleusercontent.com/pw/AP1GczPauHq2tqZLQGrkYJ0rSH0VA088ozXRzo3fcF0DgKm99a6OirAU9fGwHjQqcLDMTIrvG2vn6lhfS_qpCAfxFrSO6o1vBfK9M8t8qv9Nl4-uAUj7G9CkvAl_OKdIlUhRVXBwqhJx-Cp2SDOMaoq8yXWt=w728-h971-s-no?authuser=0' }
];

// Animar las letras
function updateLyrics() {
  let time = Math.floor(audio.currentTime);
  let currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    let fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    let opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
  requestAnimationFrame(updateLyrics)
}
//setInterval(updateLyrics, 1000);


    // Función para animar imágenes
    const updateImagen = () => {
      let time = Math.floor(audio.currentTime);

      let currentImage = imgData.find(
        (line) => time >= line.time && time < line.time + 6
      );

      if (currentImage) {
        if (galery.src !== currentImage.img) {
          galery.style.opacity = 0;
          setTimeout(() => {
            galery.src = currentImage.img;
            galery.style.opacity = 1;
          }, 500);
        }
      } else {
        galery.style.opacity = 0;
      }

      requestAnimationFrame(updateImagen);
    };

    // Inicia la animación cuando el audio empiece
    audio.addEventListener('play', () => {
      requestAnimationFrame(updateLyrics);
      requestAnimationFrame(updateImagen);
    });

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