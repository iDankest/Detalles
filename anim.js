// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
let galery = document.querySelector("#galery")
let textImg =document.getElementById('textImg')

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
  { text:'Demostrando nuestro flow',time: 10, img: 'https://lh3.googleusercontent.com/pw/AP1GczOzr7sz0kuS-uMfthFWbY7o-nz9BL52vQhFcoVkpPiSXvXnJtbBvmrO2C4MiKyNUoi7b4wvJ80Qnw7_ksxEHrOiWL6duKeO6ui_pz5_CmrO1HoIecES-F0T8_HG_MnHjU9SBkOPWnrvLNJkeVO7cwvN=w986-h1315-s-no?authuser=0' },
  { text:'Ajolote VUELVEE',time: 20, img: 'https://lh3.googleusercontent.com/pw/AP1GczPsskL7scGlrZL9gEc5Req-8EwOjKgtMNI3nRoInuGgJGrpdNgFSjqME3PktFF6fa0HyPcSTtoeK7RusGzBCcf0Fx-myxu65mbZbBnDiyZvD2-wHR-pfgZwFnG9nzNdgqPFsZPeVp9atNYgWv1oEZc1=w992-h1323-s-no?authuser=0' },
  { text:'Violenchia a nuestro paso',time: 30, img: 'https://lh3.googleusercontent.com/pw/AP1GczP_lWaei4pAVYKLfVh91rTZU3-ADIEzaq0A1Wy5kwqiI9KccV_QzJarSQIa8o8rsEqJTiu4--benbP3OXUZ_Ag2yG2-9d0lMZHR0WkYogciamssb4TjjkJGfoBCPNy8RRFBJ-5BejR1FD1VALTzGktA=w992-h1323-s-no?authuser=0' },
  { text:'Las rutas son lo nuestro el postu no xD',time: 40, img: 'https://lh3.googleusercontent.com/pw/AP1GczNqM6iVY0qnLSTVRUB2jZ7Nz7TvAjpxmVnbD4CrNx3-v-S2Y7UOyd5W5jNWZzMZbrbiAMm8UhNyCYXbx92RzJygIWaxC80aIEDhsPAPcEilFKmH2HSWW8bKmuF5sQMEbMht8bFrN_NDYgod8LjzLo5-=w991-h1323-s-no?authuser=0' },
  { text:'La cabra que sube cualquier montaña a su paso',time: 50, img: 'https://lh3.googleusercontent.com/pw/AP1GczPR68ndvBXtBZl95vfidYvXhN7NPXD84t-v1BXUaUpFvtEV5IB3W70ndexxvS41kXCWhIX2MoSn75KmbzqDOjdm2qpje07twGRCyLQV-HPSYnwNjEJ8dmoHGdZLIDMSS9F36BLvzDAM9s79HyF7u_7l=w992-h1323-s-no?authuser=0' },
  { text:'Compatiendo la unica neurona que tenemos',time: 60, img: 'https://lh3.googleusercontent.com/pw/AP1GczPPizoY0Esit1yyO2Iuq_fFlDDaYydtYB-T4FnC_M_gH2J4S6C_iEJ1I-PNYmr_aK8z0fab7lqryu3udv4R7nXFxyp39NvUpFAJxC4A2sEUIYqWfoXaPattev1V9fKCG1OchE-EjJKFu6zjZumacYeL=w991-h1323-s-no?authuser=0' },
  { text:'Nuestra primerita vez haciendo snorkel',time: 70, img: 'https://lh3.googleusercontent.com/pw/AP1GczPtGTYXic67c4ifgLGSMs6wchh_9scrhKlTXN69DTSXvDQ_VX26sTygUE_2nwROHF9lmRMnarNiSKJOT6SSNLy6j4HbQCXmCn9dgPp-OxH4YnA2lOWHK4fJQ0I_z5EOPuAf7_XoYN_firRB2xUf3SBZ=w992-h1323-s-no?authuser=0' },
  { text:'Pedidos en las vacas',time: 90, img: 'https://lh3.googleusercontent.com/pw/AP1GczMjdRAxFzjctkAkwRfjf_ug1eR0MFiF7_FllluJbEiUoA6fvR_afzG8vaDW5ygB7B-78_0elV33p1CMbxIgx5irBx3x6nL3d6GbO2FBLUN2nncCSUOKYNIglSxvmlS3Xli-w2RYTJPgMN3NVkQ_NVc4=w992-h1323-s-no?authuser=0' },
  { text:'Siempre demostrando lo mala que es...',time: 100, img: 'https://lh3.googleusercontent.com/pw/AP1GczNnhWlQEuGSQ2FbhOfKpL_Of13Trry8oYLkh1WbMjpN1XYjzWKfpjJAL8SuxohoDQlywnfsKSHf2c74P8VPV4OC2UbxLbmUWYaA4rcfujjg6-Fc1Aj62K8LhlH4xrRbrHJ2gKpATRDf6sI__1HxY28K=w992-h1323-s-no?authuser=0' },
  { text:'la guagua nos puede',time: 110, img: 'https://lh3.googleusercontent.com/pw/AP1GczOnNT216N56dvCYjwHftMfHwGvAmmuLlBQjlUfP9kPl_HLRmt67KXjHmYxwl9dtC3W1_XvHubsNP_F5lZQe7HAnKDBhUZqDoP4WXPkQVZf-hXTi18xRnmmQAlBo_9eVRCrThv-si1rhqf-ewCG8_Bfj=w993-h1323-s-no?authuser=0' },
  { text:'Chiquito moreton me hiciste',time: 120, img: 'https://lh3.googleusercontent.com/pw/AP1GczOcSUKO9vpAyKtQSpWCbPdHRqg5A2U1plzBgMhMCjc0HzPaw3irWyT_E1869aB187EVKrWyrokTRQxkrUoC6-ZqI_vRmvZzy_OpoSFGRThcIKEUCOjZUW8uMLseNi2PmpXC8bekfk-0diBeBDk6oXSW=w1001-h1335-s-no?authuser=0' },
  { text:'De los primeros dias',time: 130, img: 'https://lh3.googleusercontent.com/pw/AP1GczO6s5GM5Gkj9Cg0k1EV6B44yWi54q04L1h7m70HWAc-xcJmLDQBKrqT0gAeTa2Y5r_jbXYB4n4mbgkYFm3a0V3Po7PvpMCQI1YV7Kno7w9wYhibwhTUFeIO1AdvLGzJtOvVuDjq_TtDGi4jX8H9SGKE=w992-h1323-s-no?authuser=0' },
  { text:'Lo de improvisar y perdernos es lo nuestro',time: 140, img: 'https://lh3.googleusercontent.com/pw/AP1GczMp7JhhVHsudc79yG5kmcD1GhbYDkVuYMAk1eXDjwHoftTSF8gGJZXfiRq5Z03gicXUUMLnIklxjl0NGFZjlGfbTCEbqzLPL7BYr9eM9vwmiqpCsuhsKqZjeWAqfmN0iu8BGvI95EfmgvtIkBfh_maR=w992-h1323-s-no?authuser=0' },
  { text:'Que NUNCA FALTE LA GORDURA',time: 150, img: 'https://lh3.googleusercontent.com/pw/AP1GczMTOwoG52RBY65sXUxXIXCmaKUERFTSQfBL6VWk0eSwHtS_SDD7Ar45KAO8O8dWApLr0Umfjg9ftXIk5hgKS3jFZA79V5Wqp4isXvyTeFw61f6EH1FJo-L682eCE_Ir03xqGNqmVZH18nxxJJyaQA0c=w992-h1323-s-no?authuser=0' },
  { text:'ME dejaste hecho un cristo JAJAJA',time: 160, img: 'https://lh3.googleusercontent.com/pw/AP1GczNsCe1sHefWAA-7R6lTy4vN5Gq2K25i14RoVkQ1EdD6fyOaawyBb4P6m8N4G6JWXzVb2fbTWDcXhhsKLPvLEMAyxT8bRbBEahvOsHHys0qqinJX3ZG9Bo7MQjS0h9NRmNf3LujY3DDwQr4RK86pfWIy=w1247-h935-s-no?authuser=0' },
  { text:'¿No hay algo raro?',time: 170, img: 'https://lh3.googleusercontent.com/pw/AP1GczOXx05Lb-kRIxQiCLHh97IdrfVE2TN4zyqrmFLIDCFAb0PiJCLOgHc7p0_L6PcWSUnFc5dAf8hMYFrxPdzY36xmBmvEqmLGMisrWDDoahZblh5J1aLdSt7c9E7TDYjTZgrjdA47Q_-TXljOsHoEV2vP=w992-h1323-s-no?authuser=0' }
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


   // Función para actualizar la imagen y el texto
   const updateContent = () => {
    let time = Math.floor(audio.currentTime);  // Tiempo actual del audio
  
    // Encuentra el elemento correspondiente en imgData según el tiempo
    let currentData = imgData.find((data) => time >= data.time && time < data.time + 6);
  
    if (currentData) {
      // Actualiza el texto con opacidad y fade in
      let fadeInDuration = 0.5;  // Duración de la animación de opacidad
      let opacity = Math.min(1, (time - currentData.time) / fadeInDuration);
  
      // Cambia la opacidad y el texto
      textImg.style.opacity = opacity;
      textImg.innerHTML = currentData.text;
  
      // Actualiza la imagen solo si ha cambiado
      if (galery.src !== currentData.img) {
        galery.style.opacity = 0;  // Desaparece suavemente antes de cambiar
        setTimeout(() => {
          galery.src = currentData.img;  // Cambia la imagen
          galery.style.opacity = 1;  // Aparece la nueva imagen
        }, 500);  // Tiempo de transición
      }
    } else {
      // Si no hay texto o imagen que mostrar en este tiempo, ocultar
      textImg.style.opacity = 0;
      galery.style.opacity = 0;
    }
  
    requestAnimationFrame(updateContent);  // Continuar la animación
  };
  
  // Inicia la animación cuando el audio empiece
  audio.addEventListener('play', () => {
    requestAnimationFrame(updateContent);
  });

// Inicia la animación cuando el audio empiece
audio.addEventListener('play', () => {
  requestAnimationFrame(updateLyrics);
  requestAnimationFrame(updateContent);
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